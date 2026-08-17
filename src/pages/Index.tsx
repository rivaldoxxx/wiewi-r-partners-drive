import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import OfferSection from "@/components/OfferSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import { SocialConnect } from "@/components/ui/connect-with-us";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const siteUrl = "https://wiewiorpartners.pl";

  const schemaWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wiewiór Partners",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": ["EmploymentAgency", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: "Wiewiór Partners",
    description:
      "Oficjalny partner flotowy Uber, Bolt i FreeNow we Wrocławiu. Rekrutujemy kierowców — oferujemy firmowe auto Toyota Corolla, paliwo, ubezpieczenie OC/AC/NNW i do 60% obrotu. Start nawet w 48h.",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/og-image.png`,
    telephone: "+48665660610",
    email: "biuro@wiewiorpartners.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Muchoborska 14/204A",
      addressLocality: "Wrocław",
      addressRegion: "Dolnośląskie",
      postalCode: "54-424",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.1079,
      longitude: 17.0385,
    },
    areaServed: [
      { "@type": "City", name: "Wrocław" },
      { "@type": "AdministrativeArea", name: "Dolnośląskie" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/profile.php?id=61574925892522",
      "https://www.instagram.com/wiewiorpartners/",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "3",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Natalia" },
        datePublished: "2026-04-13",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Spokojnie można sobie dorobić do swojego etatu w weekendy albo wolne dni.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "KrupierGin" },
        datePublished: "2026-02-03",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Niedługo minie rok w tej firmie i jestem bardzo zadowolony; można się pośmiać, pożartować. Jak są trudności to jest pomoc i ludzkie podejście.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Pracownik" },
        datePublished: "2025-05-14",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
        reviewBody:
          "Najlepszy partner Uber we Wrocławiu, pomagają z wszystkimi dokumentami, pieniądze zawsze na czas. Nowe samochody jeszcze pachną nowością. Polecam!",
      },
    ],
  };

  const schemaJobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Kierowca Uber / Bolt / FreeNow — Wrocław",
    description:
      "Szukamy kierowców do współpracy na platformach Uber, Bolt i FreeNow we Wrocławiu. Oferujemy firmowe auto Toyota Corolla (bez kaucji), paliwo, ubezpieczenie OC/AC/NNW, serwis i do 60% obrotu. Elastyczny grafik, tygodniowe wypłaty. Zatrudniamy też cudzoziemców. Start nawet w 48 godzin od kontaktu.",
    identifier: {
      "@type": "PropertyValue",
      name: "Wiewiór Partners",
      value: "kierowca-uber-bolt-wroclaw",
    },
    datePosted: "2025-01-01",
    validThrough: "2026-12-31",
    employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
    hiringOrganization: {
      "@type": "Organization",
      name: "Wiewiór Partners",
      sameAs: siteUrl,
      logo: `${siteUrl}/icon-512.png`,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Muchoborska 14/204A",
        addressLocality: "Wrocław",
        addressRegion: "Dolnośląskie",
        postalCode: "54-424",
        addressCountry: "PL",
      },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "PLN",
      value: {
        "@type": "QuantitativeValue",
        minValue: 4000,
        maxValue: 8000,
        unitText: "MONTH",
      },
    },
    skills: "Prawo jazdy kat. B",
    qualifications: "Prawo jazdy kat. B (wystarczy — brak doświadczenia w porządku)",
    responsibilities:
      "Przewóz pasażerów na platformach Uber, Bolt, FreeNow we Wrocławiu i okolicach.",
    jobBenefits:
      "Firmowe auto Toyota Corolla bez kaucji, paliwo w cenie, ubezpieczenie OC/AC/NNW, serwis gratis, elastyczny grafik, tygodniowe wypłaty, wsparcie 24/7, legalne zatrudnienie.",
    workHours: "Elastyczny — pracujesz kiedy chcesz",
    directApply: true,
    applicantLocationRequirements: {
      "@type": "Country",
      name: "PL",
    },
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy potrzebuję doświadczenia jako kierowca Uber lub Bolt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie! Wystarczy prawo jazdy kat. B. Wiewiór Partners pomaga Ci przejść cały proces — od badań lekarskich po aktywację konta na platformach Uber, Bolt i FreeNow.",
        },
      },
      {
        "@type": "Question",
        name: "Ile mogę zarabiać jako kierowca Uber we Wrocławiu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nasi kierowcy zarabiają nawet kilka tysięcy złotych miesięcznie przy elastycznym grafiku. Otrzymujesz do 60% obrotu z platform Uber, Bolt i FreeNow.",
        },
      },
      {
        "@type": "Question",
        name: "Czy muszę wpłacać kaucję za firmowe auto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nie. Wiewiór Partners nie pobiera kaucji. Zero ukrytych kosztów — jasne warunki od pierwszego dnia.",
        },
      },
      {
        "@type": "Question",
        name: "Jak szybko mogę zacząć pracę jako kierowca Bolt we Wrocławiu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nawet w 48 godzin od pierwszego kontaktu. Pomagamy z formalnościami i dostarczamy auto gotowe do jazdy.",
        },
      },
      {
        "@type": "Question",
        name: "Czy mogę jeździć własnym autem na Uber lub Bolt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak! Oferujemy współpracę zarówno na naszych autach (Toyota Corolla), jak i na Twoim własnym samochodzie — z jeszcze lepszymi warunkami rozliczenia.",
        },
      },
      {
        "@type": "Question",
        name: "Czy zatrudniacie cudzoziemców — kierowców Uber we Wrocławiu?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak, pomagamy z wszystkimi formalnościami, w tym z dokumentami potrzebnymi do legalnej pracy w Polsce.",
        },
      },
      {
        "@type": "Question",
        name: "Kto pokrywa koszty paliwa i serwisu auta?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wiewiór Partners! Paliwo, ubezpieczenie OC/AC/NNW, serwis, naprawy — to wszystko po naszej stronie.",
        },
      },
      {
        "@type": "Question",
        name: "Jak często wypłacane są zarobki kierowcy?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wypłaty realizujemy co tydzień. System rozliczeń jest w pełni przejrzysty.",
        },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Praca kierowca Uber Bolt FreeNow Wrocław — Wiewiór Partners</title>
        <meta
          name="description"
          content="Szukasz pracy jako kierowca Uber, Bolt lub FreeNow we Wrocławiu? Wiewiór Partners — oficjalny partner flotowy. Firmowe auto, paliwo, ubezpieczenie i do 60% obrotu. Start w 48h!"
        />
        <meta name="keywords" content="praca kierowca Wrocław, kierowca Uber Wrocław, kierowca Bolt Wrocław, kierowca FreeNow Wrocław, partner flotowy Wrocław, flota Uber Wrocław, zarobki kierowca Uber, praca taksówkarz Wrocław, firmowe auto kierowca" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content="Praca kierowca Uber Bolt FreeNow Wrocław — Wiewiór Partners" />
        <meta property="og:description" content="Dołącz do Wiewiór Partners — oficjalnego partnera flotowego Uber, Bolt i FreeNow we Wrocławiu. Firmowe auto, paliwo i do 60% obrotu. Zacznij zarabiać w 48h!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Wiewiór Partners" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Praca kierowca Uber Bolt FreeNow Wrocław — Wiewiór Partners" />
        <meta name="twitter:description" content="Dołącz do Wiewiór Partners — firmowe auto, paliwo i do 60% obrotu. Zacznij zarabiać jako kierowca we Wrocławiu!" />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify(schemaWebSite)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaOrganization)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaJobPosting)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <OfferSection />
        <BenefitsSection />
        <HowItWorks />
        <TestimonialsSection />
        <ContactSection />
        <SocialConnect />
        <FinalCTA />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
