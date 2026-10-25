import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Adres strony dla canonical, og:url, schema, sitemap i robots. Na Vercelu to domena produkcyjna
// projektu (VERCEL_PROJECT_PRODUCTION_URL), a zmienną SITE_URL można ją nadpisać.
const siteUrl = (
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:8080")
).replace(/\/+$/, "");

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  define: {
    __SITE_URL__: JSON.stringify(siteUrl),
  },
  // Paczka do prerenderingu ma zawierać zależności w środku: część z nich (np. react-helmet-async)
  // nie daje się zaimportować z Node jako ES module. Pliki z public/ trafiają tylko do dist.
  ssr: {
    noExternal: true,
  },
  build: isSsrBuild ? { copyPublicDir: false } : undefined,
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
