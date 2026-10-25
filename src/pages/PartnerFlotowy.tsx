import { Helmet } from "react-helmet-async";
import {
  ArrowRight, Car, Check, FileCheck, Headphones, MapPin, MessageCircle, Phone, Smartphone, Wallet,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqList from "@/components/FaqList";
import { Button } from "@/components/ui/button";
import type { FaqItem } from "@/data/faqs";
import { PARTNER_FLOTOWY_PATH } from "@/lib/routes";
import { faqPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

// Podstrona pod frazy „bolt/uber partner flotowy” i „jak wybrać partnera flotowego”
// (docs/seo/frazy-kluczowe.md). We Wrocławiu wygrywa na nie dziś pośrednik, a nie lokalny partner.

const benefits = [
  { icon: Smartphone, title: "Rejestracja w aplikacjach", desc: "Zakładamy i aktywujemy konto w Uber, Bolt i FreeNow." },
  { icon: Wallet, title: "Wypłaty co tydzień", desc: "Rozliczamy przejazdy ze wszystkich aplikacji i co tydzień przelewamy pieniądze." },
  { icon: Car, title: "Auto bez kaucji", desc: "Toyota Corolla z paliwem, ubezpieczeniem OC/AC/NNW i serwisem w cenie." },
  { icon: FileCheck, title: "Pomoc z dokumentami", desc: "Badania, zaświadczenie o niekaralności, sprawy cudzoziemców. Zwracamy koszty badań." },
  { icon: MapPin, title: "Biuro we Wrocławiu", desc: "Ul. Muchoborska 14/204A. Przyjdź, zadzwoń albo napisz na WhatsApp." },
  { icon: Headphones, title: "Wsparcie 24/7", desc: "Gdy coś się dzieje na trasie, masz do kogo zadzwonić." },
];

const carOptions = [
  {
    title: "Jeździsz naszym autem",
    forWhom: "Dla tych, którzy nie mają auta albo nie chcą płacić za paliwo i serwis.",
    points: [
      "Toyota Corolla bez kaucji",
      "Paliwo w cenie",
      "Ubezpieczenie OC/AC/NNW i serwis po naszej stronie",
      "Do 60% obrotu i cotygodniowy bonus",
    ],
  },
  {
    title: "Jeździsz swoim autem",
    forWhom: "Dla tych, którzy mają auto spełniające wymagania Ubera i Bolta (m.in. co do wieku auta). Sprawdzimy je razem.",
    points: [
      "Wyższy procent obrotu",
      "Rozliczenia i wypłaty co tydzień",
      "Pomoc z formalnościami",
      "Wsparcie 24/7",
    ],
  },
];

const howToChoose = [
  {
    title: "Podział obrotu i brak ukrytych opłat",
    desc: "Zapytaj, ile procent obrotu dostajesz i czy są dodatkowe opłaty, np. kaucja. U nas: do 60% obrotu na naszym aucie, bez kaucji i bez ukrytych kosztów.",
  },
  {
    title: "Jak często dostajesz pieniądze",
    desc: "Najwygodniej co tydzień. U nas wypłaty są co tydzień.",
  },
  {
    title: "Co jest w cenie auta",
    desc: "Sprawdź, kto płaci za paliwo, ubezpieczenie i naprawy. U nas paliwo, OC/AC/NNW i serwis są po naszej stronie.",
  },
  {
    title: "Biuro w Twoim mieście",
    desc: "Partner na miejscu szybciej pomoże w sprawach auta i dokumentów. Nasze biuro jest przy ul. Muchoborskiej 14 we Wrocławiu.",
  },
  {
    title: "Pomoc z formalnościami",
    desc: "Dobry partner przeprowadzi Cię przez badania i dokumenty, także jeśli jesteś cudzoziemcem. My to robimy i zwracamy koszty badań.",
  },
];

const requirements = [
  "Ukończone 18 lat",
  "Polskie prawo jazdy kat. B (zagraniczne trzeba wymienić)",
  "Zaświadczenie o niekaralności, nie starsze niż 30 dni",
  "Badania lekarskie i psychologiczne — zwracamy ich koszty",
  "Cudzoziemcy: dokument pobytu z prawem do pracy w Polsce i zaświadczenie o niekaralności z kraju pochodzenia",
];

const faqs: FaqItem[] = [
  {
    q: "Czy partner flotowy to to samo co partner rozliczeniowy?",
    a: "Często tych nazw używa się zamiennie. Partner rozliczeniowy zwykle tylko rozlicza kierowców jeżdżących własnym autem, a partner flotowy dodatkowo udostępnia samochody. Wiewiór Partners robi jedno i drugie.",
  },
  {
    q: "Ile kosztuje współpraca z partnerem flotowym?",
    a: "W Wiewiór Partners nie płacisz kaucji ani opłat na start. Gdy jeździsz naszym autem, dostajesz do 60% obrotu, a paliwo, ubezpieczenie i serwis są po naszej stronie. Gdy jeździsz swoim autem, dostajesz wyższy procent obrotu.",
  },
  {
    q: "Czy mogę zmienić partnera flotowego?",
    a: "Tak, kierowca może przejść do innego partnera. Zadzwoń albo napisz — przeprowadzimy Cię przez to krok po kroku.",
  },
  {
    q: "Gdzie jest wasze biuro we Wrocławiu?",
    a: "Przy ul. Muchoborskiej 14/204A, 54-424 Wrocław. Biuro jest czynne od poniedziałku do piątku w godz. 8:00–18:00 i w soboty w godz. 9:00–14:00.",
  },
];

const PartnerFlotowy = () => {
  const pageUrl = `${SITE_URL}${PARTNER_FLOTOWY_PATH}`;
  const title = "Partner flotowy Uber i Bolt we Wrocławiu — jak wybrać | Wiewiór Partners";
  const description =
    "Czym jest partner flotowy Uber i Bolt i jak go wybrać? Wiewiór Partners z Wrocławia: wypłaty co tydzień, auto bez kaucji albo jazda własnym autem.";

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
      { "@type": "ListItem", position: 2, name: "Partner flotowy we Wrocławiu", item: pageUrl },
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
              <span>Partner flotowy we Wrocławiu</span>
            </nav>
            <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
              Uber · Bolt · FreeNow
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              Partner flotowy Uber i Bolt <span className="text-gradient">we Wrocławiu</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Wiewiór Partners to oficjalny partner flotowy Uber, Bolt i FreeNow z biurem we Wrocławiu.
              Rejestrujemy kierowców w aplikacjach, rozliczamy przejazdy i co tydzień wypłacamy zarobki.
              Możesz jeździć naszą Toyotą Corollą bez kaucji albo własnym autem.
            </p>
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

        <section className="section-padding bg-secondary/20">
          <div className="container max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Czym jest partner flotowy?</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
              <p>
                Partner flotowy to firma, przez którą kierowca jeździ na aplikacjach Uber, Bolt i FreeNow.
                Partner ma licencję na przewóz osób, rejestruje kierowcę w aplikacjach, rozlicza jego przejazdy
                i wypłaca zarobki. Często udostępnia też samochód.
              </p>
              <p>
                Bez partnera kierowca musi sam założyć działalność, załatwić licencję i prowadzić rozliczenia.
                Z partnerem zajmujesz się tylko jazdą.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Co daje współpraca z Wiewiór Partners?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="p-5 rounded-xl bg-card border border-border card-glow">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-base mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="container max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Własne auto czy auto partnera?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {carOptions.map((option) => (
                <div key={option.title} className="p-6 md:p-8 rounded-2xl border border-border bg-card card-glow">
                  <h3 className="font-heading text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5">{option.forWhom}</p>
                  <ul className="space-y-3">
                    {option.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-secondary-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
              Jak wybrać partnera flotowego? 5 rzeczy do sprawdzenia
            </h2>
            <ol className="space-y-5 max-w-3xl">
              {howToChoose.map((item, i) => (
                <li key={item.title} className="flex gap-4">
                  <span className="w-8 h-8 shrink-0 rounded-full bg-primary/10 text-primary font-heading font-bold flex items-center justify-center text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="container max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Kto może z nami jeździć?</h2>
            <ul className="space-y-3 mb-4 max-w-3xl">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                  <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="text-secondary-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground">Doświadczenie jako kierowca nie jest potrzebne.</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container max-w-5xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Pytania o partnera flotowego</h2>
            <div className="max-w-3xl">
              <FaqList items={faqs} />
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary/20">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Zacznij jeździć z partnerem flotowym <span className="text-gradient">we Wrocławiu</span>
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

export default PartnerFlotowy;
