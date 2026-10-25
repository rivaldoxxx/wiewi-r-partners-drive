import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import type { HelmetServerState } from "react-helmet-async";
import { AppRoutes, Providers } from "./App.tsx";

export { SITE_URL } from "./lib/site";

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
