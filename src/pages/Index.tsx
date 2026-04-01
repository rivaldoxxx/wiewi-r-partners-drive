import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import OfferSection from "@/components/OfferSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    name: "Wiewiór Partners",
    description: "Partner flotowy Uber, Bolt, FreeNow we Wrocławiu. Rekrutujemy kierowców — oferujemy firmowe auto, paliwo i do 60% obrotu.",
    url: "https://wiewiorpartners.pl",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Wrocław",
      addressRegion: "Dolnośląskie",
      addressCountry: "PL",
    },
    areaServed: "Wrocław i okolice",
    telephone: "+48123456789",
  };

  return (
    <>
      <Helmet>
        <title>Praca kierowca Uber Bolt FreeNow Wrocław — Wiewiór Partners</title>
        <meta
          name="description"
          content="Szukasz pracy jako kierowca Uber, Bolt lub FreeNow we Wrocławiu? Wiewiór Partners oferuje firmowe auto, paliwo, ubezpieczenie i do 60% obrotu. Aplikuj teraz!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://wiewiorpartners.pl" />
        <meta property="og:title" content="Praca kierowca Uber Bolt FreeNow Wrocław — Wiewiór Partners" />
        <meta property="og:description" content="Dołącz do Wiewiór Partners — firmowe auto, paliwo i do 60% obrotu. Zacznij zarabiać jako kierowca we Wrocławiu!" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <OfferSection />
        <BenefitsSection />
        <HowItWorks />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
