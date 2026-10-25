// Po buildzie zapisuje strony jako gotowy HTML, żeby Google i boty AI (które zwykle nie
// uruchamiają JavaScriptu) widziały treść i dane strukturalne bez czekania na React.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render, SITE_URL, PAGES } = await import(
  pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href
);

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
const rootTag = '<div id="root"></div>';
if (!template.includes(rootTag)) throw new Error(`Brak ${rootTag} w dist/index.html`);

// 404.html Vercel serwuje dla nieistniejących adresów, z kodem 404.
for (const page of PAGES) {
  const { html, head } = render(page.url);
  const out = template
    .replace("</head>", `  ${head}\n  </head>`)
    .replace(rootTag, `<div id="root">${html}</div>`);
  await fs.writeFile(path.join(dist, page.file), out);
}

const buildDate = new Date().toISOString().slice(0, 10);
const sitemapUrls = PAGES.filter((page) => page.sitemap)
  .map((page) => `  <url>\n    <loc>${SITE_URL}${page.url}</loc>\n    <lastmod>${buildDate}</lastmod>\n  </url>`)
  .join("\n");
await fs.writeFile(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>\n`,
);

const robotsPath = path.join(dist, "robots.txt");
const robots = await fs.readFile(robotsPath, "utf8");
await fs.writeFile(robotsPath, robots.replaceAll("%SITE_URL%", SITE_URL));

console.log(`Prerender: ${PAGES.map((p) => p.file).join(", ")} dla ${SITE_URL}`);
