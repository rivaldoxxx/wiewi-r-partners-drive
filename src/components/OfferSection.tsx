import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    title: "Nasze auto",
    highlight: true,
    subtitle: "Toyota Corolla z pełnym pakietem",
    split: "Do 60% obrotu dla Ciebie",
    features: [
      "Firmowa Toyota Corolla",
      "Paliwo po stronie firmy",
      "Ubezpieczenie OC/AC/NNW",
      "Serwis i naprawy gratis",
      "Brak kaucji",
      "Bonus na start",
      "Tygodniowe wypłaty",
      "Zwrot kosztów badań",
    ],
  },
  {
    title: "Twoje auto",
    highlight: false,
    subtitle: "Jeździsz swoim samochodem",
    split: "Jeszcze lepsze warunki rozliczenia",
    features: [
      "Jazda własnym autem",
      "Wyższy % obrotu",
      "Pełne wsparcie operacyjne",
      "Pomoc z formalnościami",
      "Legalne zatrudnienie",
      "Tygodniowe wypłaty",
      "Wsparcie 24/7",
      "Elastyczny grafik",
    ],
  },
];

const OfferSection = () => {
  return (
    <section id="oferta" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Oferta
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Wybierz wariant <span className="text-gradient">pracy kierowcy</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Masz auto? Świetnie — jeździsz swoim i zarabiasz więcej. Nie masz? Damy Ci Toyotę Corollę bez kaucji. W obu przypadkach wygrywasz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative p-6 md:p-8 rounded-2xl border ${
                plan.highlight
                  ? "border-primary/40 bg-primary/5 glow-primary"
                  : "border-border bg-card card-glow"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Najpopularniejsze
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold mb-1">{plan.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.subtitle}</p>
              <p className="text-primary font-heading font-bold text-lg mb-6">{plan.split}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-secondary-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full"
                variant={plan.highlight ? "default" : "outline"}
                size="lg"
              >
                <a href="#kontakt">Aplikuj teraz</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
