export const PARTNER_FLOTOWY_PATH = "/partner-flotowy-wroclaw";
export const JAK_ZOSTAC_KIEROWCA_PATH = "/jak-zostac-kierowca-bolt-uber";
export const ZAROBKI_KIEROWCY_PATH = "/zarobki-kierowcy-uber-bolt";

// Podstrony-poradniki: z tej listy powstają linki w stopce, pod FAQ i w „Przeczytaj też”,
// a także wpisy do prerenderingu i sitemap.xml (src/entry-server.tsx).
export const GUIDE_PAGES = [
  { path: JAK_ZOSTAC_KIEROWCA_PATH, label: "Jak zostać kierowcą Bolt i Uber we Wrocławiu", short: "Jak zostać kierowcą" },
  { path: PARTNER_FLOTOWY_PATH, label: "Partner flotowy Uber i Bolt we Wrocławiu", short: "Partner flotowy" },
  { path: ZAROBKI_KIEROWCY_PATH, label: "Ile zarabia kierowca Uber i Bolt we Wrocławiu", short: "Zarobki kierowcy" },
];
