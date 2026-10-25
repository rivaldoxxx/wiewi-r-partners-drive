import { PARTNER_FLOTOWY_PATH } from "@/lib/routes";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-heading font-bold text-lg">
              <span className="text-foreground">Wiewiór</span>
              <span className="text-primary"> Partners</span>
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Partner flotowy Uber, Bolt, FreeNow — Wrocław
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              ul. Muchoborska 14/204A, 54-424 Wrocław ·{" "}
              <a href="tel:+48665660610" className="hover:text-foreground transition-colors">
                +48 665 660 610
              </a>
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <a href="/#oferta" className="hover:text-foreground transition-colors">Oferta</a>
            <a href="/#korzysci" className="hover:text-foreground transition-colors">Korzyści</a>
            <a href="/#jak-zaczac" className="hover:text-foreground transition-colors">Jak zacząć</a>
            <a href="/#opinie" className="hover:text-foreground transition-colors">Opinie</a>
            <a href="/#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="/#kontakt" className="hover:text-foreground transition-colors">Kontakt</a>
            <a href={PARTNER_FLOTOWY_PATH} className="hover:text-foreground transition-colors">Partner flotowy</a>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground">
          {/* Rok z prerenderingu może się różnić od bieżącego, gdy strona długo nie była budowana. */}
          <p suppressHydrationWarning>&copy; {new Date().getFullYear()} Wiewiór Partners. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
