import type { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, MessageCircle, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqList from "@/components/FaqList";
import { Button } from "@/components/ui/button";
import type { FaqItem } from "@/data/faqs";
import { GUIDE_PAGES } from "@/lib/routes";
import { faqPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

interface SubpageLayoutProps {
  path: string;
  title: string;
  description: string;
  /** Nazwa strony w ścieżce „Strona główna / …” (widocznej i w BreadcrumbList). */
  breadcrumb: string;
  eyebrow: string;
  heading: ReactNode;
  lead: ReactNode;
  faqHeading: string;
  faqs: FaqItem[];
  children: ReactNode;
}

// Wspólny układ podstron-poradników: meta i JSON-LD, nagłówek z CTA, treść strony,
// FAQ, linki do pozostałych poradników i końcowe CTA.
const SubpageLayout = ({
  path, title, description, breadcrumb, eyebrow, heading, lead, faqHeading, faqs, children,
}: SubpageLayoutProps) => {
  const pageUrl = `${SITE_URL}${path}`;
  const relatedPages = GUIDE_PAGES.filter((page) => page.path !== path);

  const schemaPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: pageUrl,
    inLanguage: "pl-PL",
    about: { "@id": `${SITE_URL}/#organization` },
  };

  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: breadcrumb, item: pageUrl },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${SITE_URL}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Wiewiór Partners" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.jpg`} />
        <script type="application/ld+json">{JSON.stringify(schemaPage)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumbs)}</script>
        <script type="application/ld+json">{JSON.stringify(faqPageSchema(faqs))}</script>
      </Helmet>
      <Header />
      <main className="pt-24 md:pt-28">
        <section className="pb-12 md:pb-16">
          <div className="container max-w-5xl">
            <nav aria-label="Ścieżka" className="text-xs text-muted-foreground mb-6">
              <a href="/" className="hover:text-foreground transition-colors">Strona główna</a>
              <span className="mx-2">/</span>
              <span>{breadcrumb}</span>
            </nav>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
              {eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl">{heading}</h1>
            <div className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">{lead}</div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="text-base gap-2 glow-primary">
                <a href="/#kontakt">
                  Aplikuj teraz
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base gap-2">
                <a href="tel:+48665660610">
                  <Phone className="w-4 h-4" />
                  +48 665 660 610
                </a>
              </Button>
            </div>
          </div>
        </section>

        {children}

        <section className="section-padding">
          <div className="container max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">{faqHeading}</h2>
            <div className="max-w-3xl">
              <FaqList items={faqs} />
            </div>
            <h2 className="font-heading text-lg font-semibold mt-12 mb-4">Przeczytaj też</h2>
            <ul className="space-y-2">
              {relatedPages.map((page) => (
                <li key={page.path}>
                  <a href={page.path} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                    {page.label}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Zacznij jeździć z Wiewiór Partners <span className="text-gradient">we Wrocławiu</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Zostaw zgłoszenie, zadzwoń albo napisz na WhatsApp. Odpowiadamy w ciągu kilku godzin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="text-base gap-2 glow-primary">
                <a href="/#kontakt">
                  Wyślij zgłoszenie
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base gap-2">
                <a href="https://wa.me/48665660610" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

/** Lista z pomarańczowym „ptaszkiem”, używana na podstronach. */
export const CheckList = ({ items, className = "" }: { items: string[]; className?: string }) => (
  <ul className={`space-y-3 ${className}`}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
        <span className="text-secondary-foreground">{item}</span>
      </li>
    ))}
  </ul>
);

export default SubpageLayout;
