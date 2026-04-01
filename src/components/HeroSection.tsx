import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Banknote } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-car.jpg";

const badges = [
  { icon: Banknote, label: "Do 60% obrotu" },
  { icon: Clock, label: "Elastyczny grafik" },
  { icon: Shield, label: "Legalne zatrudnienie" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Nowoczesne auto na ulicach Wrocławia" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Rekrutujemy kierowców we Wrocławiu
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
          >
            Zarabiaj jako kierowca{" "}
            <span className="text-gradient">Uber, Bolt i FreeNow</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Dołącz do Wiewiór Partners — otrzymaj firmowe auto, paliwo, ubezpieczenie i zarabiaj nawet do 60% obrotu. Bez kaucji, bez ukrytych kosztów. Start w 48h.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button asChild size="lg" className="text-base gap-2 glow-primary">
              <a href="#kontakt">
                Zacznij zarabiać
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base">
              <a href="#oferta">Poznaj ofertę</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-secondary-foreground"
              >
                <badge.icon className="w-4 h-4 text-primary" />
                {badge.label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
