// Sprawdza zbudowane strony pod kątem podstaw SEO. Uruchamiany na końcu `npm run build`:
// błąd przerywa build, więc zepsute SEO nie trafi na produkcję (Vercel nie wdroży wersji z błędem).
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { SITE_URL, PAGES } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);

const TITLE_MAX = 75;
const DESCRIPTION_MIN = 50;
const DESCRIPTION_MAX = 160;

const errors = [];
const fail = (file, message) => errors.push(`${file}: ${message}`);

// React escapuje te znaki w tekście, a JSON-LD trzyma je dosłownie.
const decode = (text) =>
  text.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
const visibleText = (html) =>
  decode(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ");

const robots = await fs.readFile(path.join(dist, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${SITE_URL}/sitemap.xml`)) fail("robots.txt", "brak linii Sitemap z adresem strony");

const sitemap = await fs.readFile(path.join(dist, "sitemap.xml"), "utf8");
const pagePaths = new Set(PAGES.filter((page) => page.sitemap).map((page) => page.url));

for (const page of PAGES) {
  const html = await fs.readFile(path.join(dist, page.file), "utf8");
  const [head, body = ""] = html.split("</head>");

  if (html.includes('<div id="root"></div>')) fail(page.file, "pusty #root, prerendering nie zadziałał");

  const titles = [...head.matchAll(/<title[^>]*>([^<]*)<\/title>/g)].map((m) => decode(m[1]));
  if (titles.length !== 1) fail(page.file, `tytułów: ${titles.length}, ma być 1`);
  else if (titles[0].length > TITLE_MAX) fail(page.file, `tytuł ma ${titles[0].length} znaków (maks. ${TITLE_MAX})`);

  if (!page.sitemap) {
    if (!/<meta[^>]*name="robots"[^>]*content="noindex"/.test(head)) fail(page.file, "brak noindex na stronie błędu");
    continue;
  }

  const descriptions = [...head.matchAll(/<meta[^>]*name="description"[^>]*content="([^"]*)"/g)].map((m) => decode(m[1]));
  if (descriptions.length !== 1) fail(page.file, `opisów meta: ${descriptions.length}, ma być 1`);
  else if (descriptions[0].length < DESCRIPTION_MIN || descriptions[0].length > DESCRIPTION_MAX)
    fail(page.file, `opis ma ${descriptions[0].length} znaków (${DESCRIPTION_MIN}–${DESCRIPTION_MAX})`);

  const canonicals = [...head.matchAll(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/g)].map((m) => m[1]);
  const expectedCanonical = `${SITE_URL}${page.url}`;
  if (canonicals.length !== 1 || canonicals[0] !== expectedCanonical)
    fail(page.file, `canonical ${JSON.stringify(canonicals)}, ma być ["${expectedCanonical}"]`);

  if (!/<meta[^>]*property="og:image"[^>]*content="https?:\/\//.test(head)) fail(page.file, "brak og:image z pełnym adresem");

  const h1s = [...body.matchAll(/<h1\b([^>]*)>/g)];
  if (h1s.length !== 1) fail(page.file, `nagłówków H1: ${h1s.length}, ma być 1`);
  else if (/opacity:\s*0/.test(h1s[0][1])) fail(page.file, "H1 jest ukryty (opacity: 0) do czasu załadowania JavaScriptu");

  const text = visibleText(body);
  for (const [, json] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(json);
    } catch {
      fail(page.file, "niepoprawny JSON-LD");
      continue;
    }
    // Google wymaga, żeby pytania i odpowiedzi z FAQPage były widoczne na stronie.
    if (data["@type"] === "FAQPage") {
      for (const question of data.mainEntity) {
        if (!text.includes(question.name)) fail(page.file, `pytanie z FAQPage niewidoczne na stronie: "${question.name}"`);
        if (!text.includes(question.acceptedAnswer.text))
          fail(page.file, `odpowiedź z FAQPage niewidoczna na stronie: "${question.name}"`);
      }
    }
  }

  if (!sitemap.includes(`<loc>${expectedCanonical}</loc>`)) fail(page.file, "brak w sitemap.xml");

  for (const [, href] of body.matchAll(/<a[^>]*href="(\/[^"]*)"/g)) {
    const linkPath = href.split("#")[0].split("?")[0] || "/";
    if (!href.startsWith("//") && !pagePaths.has(linkPath)) fail(page.file, `link do nieistniejącej strony: ${href}`);
  }
}

if (errors.length) {
  console.error(`Test SEO: ${errors.length} błąd(ów)\n- ${errors.join("\n- ")}`);
  process.exit(1);
}
console.log(`Test SEO: OK (${PAGES.length} stron)`);
