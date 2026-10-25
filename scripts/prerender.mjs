// Po buildzie zapisuje stronę jako gotowy HTML, żeby Google i boty AI (które zwykle nie
// uruchamiają JavaScriptu) widziały treść i dane strukturalne bez czekania na React.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render, SITE_URL } = await import(pathToFileURL(path.join(root, "dist-ssr", "entry-server.js")).href);

const template = await fs.readFile(path.join(dist, "index.html"), "utf8");
const rootTag = '<div id="root"></div>';
if (!template.includes(rootTag)) throw new Error(`Brak ${rootTag} w dist/index.html`);

// 404.html Vercel serwuje dla nieistniejących adresów, z kodem 404.
const pages = [
  { url: "/", file: "index.html" },
  { url: "/404", file: "404.html" },
];

for (const page of pages) {
  const { html, head } = render(page.url);
  const out = template
    .replace("</head>", `  ${head}\n  </head>`)
    .replace(rootTag, `<div id="root">${html}</div>`);
  await fs.writeFile(path.join(dist, page.file), out);
}

const buildDate = new Date().toISOString().slice(0, 10);
for (const file of ["robots.txt", "sitemap.xml"]) {
  const filePath = path.join(dist, file);
  const text = await fs.readFile(filePath, "utf8");
  await fs.writeFile(filePath, text.replaceAll("%SITE_URL%", SITE_URL).replaceAll("%BUILD_DATE%", buildDate));
}

console.log(`Prerender: ${pages.map((p) => p.file).join(", ")} dla ${SITE_URL}`);
