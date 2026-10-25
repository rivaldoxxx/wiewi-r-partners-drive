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
import { faqs } from "@/data/faqs";
import { faqPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const Index = () => {
  const siteUrl = SITE_URL;
  const pageUrl = `${siteUrl}/`;
  // Frazy z docs/seo/frazy-kluczowe.md: strona główna celuje w „kierowca Uber/Bolt”,
  // a „partner flotowy” ma własną podstronę (src/pages/PartnerFlotowy.tsx), żeby nie konkurowały.
  const title = "Kierowca Uber i Bolt we Wrocławiu — praca od zaraz | Wiewiór Partners";
  const description =
    "Praca kierowcy Uber, Bolt i FreeNow we Wrocławiu. Oficjalny partner flotowy: auto bez kaucji, paliwo i ubezpieczenie w cenie, do 60% obrotu. Start od zaraz!";

  const schemaWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Wiewiór Partners",
    url: pageUrl,
  };

  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": ["EmploymentAgency", "LocalBusiness"],
    "@id": `${siteUrl}/#organization`,
    name: "Wiewiór Partners",
    description:
      "Oficjalny partner flotowy Uber, Bolt i FreeNow we Wrocławiu. Rekrutujemy kierowców — oferujemy firmowe auto Toyota Corolla, paliwo, ubezpieczenie OC/AC/NNW i do 60% obrotu. Start od zaraz.",
    url: pageUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${siteUrl}/og-image.jpg`,
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
    // Budynek przy ul. Muchoborskiej 14 według OpenStreetMap.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.10904,
      longitude: 16.97091,
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
  };

  // Rekrutacja jest ciągła, więc bez validThrough (Google zaleca go pomijać, gdy oferta nie ma końca).
  const schemaJobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: "Kierowca Uber / Bolt / FreeNow — Wrocław",
    description:
      "Szukamy kierowców do współpracy na platformach Uber, Bolt i FreeNow we Wrocławiu. Oferujemy firmowe auto Toyota Corolla (bez kaucji), paliwo, ubezpieczenie OC/AC/NNW, serwis i do 60% obrotu. Elastyczny grafik, tygodniowe wypłaty. Zatrudniamy też cudzoziemców. Start od zaraz.",
    identifier: {
      "@type": "PropertyValue",
      name: "Wiewiór Partners",
      value: "kierowca-uber-bolt-wroclaw",
    },
    datePosted: "2026-10-25",
    employmentType: ["FULL_TIME", "PART_TIME", "CONTRACTOR"],
    hiringOrganization: {
      "@type": "Organization",
      name: "Wiewiór Partners",
      sameAs: pageUrl,
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
        minValue: 3500,
        maxValue: 10000,
        unitText: "MONTH",
      },
    },
    skills: "Prawo jazdy kat. B",
    qualifications:
      "Ukończone 18 lat, polskie prawo jazdy kat. B, zaświadczenie o niekaralności, badania lekarskie i psychologiczne. Doświadczenie nie jest wymagane.",
    responsibilities:
      "Przewóz pasażerów na platformach Uber, Bolt, FreeNow we Wrocławiu i okolicach.",
    jobBenefits:
      "Firmowe auto bez kaucji, paliwo w cenie, ubezpieczenie OC/AC/NNW, serwis i naprawy gratis, elastyczny grafik, tygodniowe wypłaty, cotygodniowy bonus, zwrot kosztów badań, prywatna opieka medyczna, wsparcie 24/7.",
    workHours: "Elastyczny — pracujesz kiedy chcesz",
    directApply: true,
    applicantLocationRequirements: {
      "@type": "Country",
      name: "PL",
    },
  };

  const schemaFAQ = faqPageSchema(faqs);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Dołącz do Wiewiór Partners — oficjalnego partnera flotowego Uber, Bolt i FreeNow we Wrocławiu. Firmowe auto, paliwo i do 60% obrotu. Zacznij zarabiać od zaraz!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Wiewiór Partners — partner flotowy Uber, Bolt i FreeNow we Wrocławiu" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="Wiewiór Partners" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="Dołącz do Wiewiór Partners — firmowe auto, paliwo i do 60% obrotu. Zacznij zarabiać jako kierowca we Wrocławiu!" />
        <meta name="twitter:image" content={`${siteUrl}/og-image.jpg`} />
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
