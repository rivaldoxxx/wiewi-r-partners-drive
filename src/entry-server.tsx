import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import { AppRoutes, Providers } from "./App.tsx";
import { GUIDE_PAGES } from "./lib/routes";

export { SITE_URL } from "./lib/site";

// Strony zapisywane przez scripts/prerender.mjs. Te z sitemap: true trafiają do sitemap.xml.
// Pliki .html serwujemy bez rozszerzenia dzięki "cleanUrls" w vercel.json.
export const PAGES = [
  { url: "/", file: "index.html", sitemap: true },
  ...GUIDE_PAGES.map((page) => ({ url: page.path, file: `${page.path.slice(1)}.html`, sitemap: true })),
  { url: "/404", file: "404.html", sitemap: false },
];

/** Renderuje stronę do HTML dla scripts/prerender.mjs. Zwraca treść #root i tagi do <head>. */
export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <Providers helmetContext={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </Providers>,
  );
  const { helmet } = helmetContext;
  const head = helmet
    ? [helmet.title, helmet.meta, helmet.link, helmet.script].map(String).filter(Boolean).join("\n    ")
    : "";
  return { html, head };
}
