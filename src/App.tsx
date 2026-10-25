import type { ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation } from "framer-motion";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PartnerFlotowy from "./pages/PartnerFlotowy.tsx";
import JakZostacKierowca from "./pages/JakZostacKierowca.tsx";
import ZarobkiKierowcy from "./pages/ZarobkiKierowcy.tsx";
import { JAK_ZOSTAC_KIEROWCA_PATH, PARTNER_FLOTOWY_PATH, ZAROBKI_KIEROWCY_PATH } from "./lib/routes";

// Wspólne dla przeglądarki i prerenderingu (src/entry-server.tsx), który podaje własny router i helmetContext.
// LazyMotion z domAnimation ładuje tylko potrzebną część framer-motion; komponenty używają `m` zamiast `motion`
// (strict zgłosi błąd, jeśli gdzieś zostanie pełne `motion`).
export const Providers = ({ children, helmetContext }: { children: ReactNode; helmetContext?: object }) => (
  <HelmetProvider context={helmetContext}>
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  </HelmetProvider>
);

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path={PARTNER_FLOTOWY_PATH} element={<PartnerFlotowy />} />
    <Route path={JAK_ZOSTAC_KIEROWCA_PATH} element={<JakZostacKierowca />} />
    <Route path={ZAROBKI_KIEROWCY_PATH} element={<ZarobkiKierowcy />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <Providers>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Providers>
);

export default App;
