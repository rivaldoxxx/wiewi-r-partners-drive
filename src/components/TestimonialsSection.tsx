import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mateusz K.",
    role: "Kierowca od 8 miesięcy",
    text: "Szukałem elastycznej pracy i trafiłem na Wiewiór Partners. Auto dostałem w 2 dni, warunki jasne od początku. Polecam każdemu!",
  },
  {
    name: "Oksana M.",
    role: "Kierowczyni od 4 miesięcy",
    text: "Przyjechałam z Ukrainy i firma pomogła mi ze wszystkimi formalnościami. Wsparcie 24/7 naprawdę działa. Czuję się bezpiecznie.",
  },
  {
    name: "Paweł S.",
    role: "Kierowca od roku",
    text: "Wcześniej jeździłem dla innego partnera — tu warunki są dużo lepsze. 60% obrotu, zero kaucji i auto w świetnym stanie.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Opinie
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Zaufali nam <span className="text-gradient">kierowcy</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border card-glow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
