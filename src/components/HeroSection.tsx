import { Helmet } from "react-helmet-async";
import { ArrowRight, Shield, Clock, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-car.webp";

const badges = [
  { icon: Banknote, label: "Do 60% obrotu" },
  { icon: Clock, label: "Elastyczny grafik" },
  { icon: Shield, label: "Legalne zatrudnienie" },
];

// Docelowy ukos zdjęcia; animacja hero-reveal kończy się na tym samym kształcie,
// więc przy wyłączonych animacjach (motion-reduce) zdjęcie wygląda tak samo.
const HERO_CLIP_PATH = "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)";

// Animacje hero są w CSS (tailwind.config.ts, „hero-*”), a nie w framer-motion: startują od razu
// po wyświetleniu HTML z prerenderingu, więc treść nie czeka ukryta na załadowanie JavaScriptu.
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row md:items-center pt-20 overflow-hidden bg-background">
      <Helmet>
        {/* Na desktopie zdjęcie jest tłem CSS, którego przeglądarka sama wcześnie nie znajdzie. */}
        <link rel="preload" as="image" href={heroImg} />
      </Helmet>

      {/* ── Desktop: animated right-side image (hidden on mobile) ── */}
      <div className="hidden md:block absolute top-0 bottom-0 right-0 left-[44%] lg:left-[50%] z-0">
        <div
          className="hero-media w-full h-full bg-cover bg-center bg-no-repeat animate-hero-reveal motion-reduce:animate-none"
          role="img"
          aria-label="Kierowca Uber Bolt FreeNow Wrocław — Toyota Corolla Wiewiór Partners"
          style={{ backgroundImage: `url(${heroImg})`, clipPath: HERO_CLIP_PATH }}
        >
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        </div>
      </div>

      {/* ── Mobile: image as a block below text ── */}
      <div className="md:hidden relative w-full h-[45vh] min-h-[260px] mt-4 order-2 overflow-hidden">
        <div className="w-full h-full animate-hero-zoom-in motion-reduce:animate-none">
          <img
            src={heroImg}
            alt="Kierowca Uber Bolt FreeNow Wrocław — Toyota Corolla Wiewiór Partners"
            className="hero-media w-full h-full object-cover object-[center_20%]"
            // React 18 nie zna jeszcze propsa fetchPriority, więc podajemy atrybut HTML wprost.
            {...{ fetchpriority: "high" }}
            decoding="async"
          />
        </div>
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Text content ── */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 order-1 flex-shrink-0 pt-6 md:pt-0">
        {/* Widths are capped as a % of the viewport so the text column can never
            reach the diagonal edge of the hero image (also holds when zoomed). */}
        <div className="max-w-xl md:max-w-[min(28rem,42%)] lg:max-w-[min(36rem,44%)] xl:max-w-[min(42rem,46%)] relative z-20">
          <div className="animate-hero-fade-up motion-reduce:animate-none">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Rekrutujemy kierowców we Wrocławiu
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6 animate-hero-fade-up [animation-delay:100ms] motion-reduce:animate-none">
            Zarabiaj jako kierowca{" "}
            <span className="text-gradient">Uber, Bolt i FreeNow</span>{" "}
            we Wrocławiu
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mb-6 sm:mb-8 leading-relaxed animate-hero-fade-up [animation-delay:200ms] motion-reduce:animate-none">
            Dołącz do Wiewiór Partners — otrzymaj firmowe auto, paliwo, ubezpieczenie i zarabiaj nawet do 60% obrotu. Bez kaucji, bez ukrytych kosztów. Startujesz od zaraz!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-hero-fade-up [animation-delay:300ms] motion-reduce:animate-none">
            <Button asChild size="lg" className="text-base gap-2 glow-primary">
              <a href="#kontakt">
                Zacznij zarabiać
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="#oferta">Poznaj ofertę</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 pb-6 md:pb-0 animate-hero-fade-in [animation-delay:500ms] motion-reduce:animate-none">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-secondary/50 border border-border text-xs sm:text-sm text-secondary-foreground"
              >
                <badge.icon className="w-4 h-4 text-primary shrink-0" />
                {badge.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
