import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Natalia",
    role: "Pracownik",
    date: "13.04.2026",
    text: "Spokojnie można sobie dorobić do swojego etatu w weekendy albo wolne dni 😇",
  },
  {
    name: "KrupierGin",
    role: "Pracownik",
    date: "03.02.2026",
    text: "Niedługo minie rok w tej firmie i jestem bardzo zadowolony; można się pośmiać, pożartować. Jak są trudności to jest pomoc i ludzkie podejście.",
  },
  {
    name: "Pracownik",
    role: "Pracownik",
    date: "14.05.2025",
    text: "Najlepszy partner Uber we Wrocławiu, pomagają z wszystkimi dokumentami, pieniądze zawsze na czas. Nowe samochody jeszcze pachną nowością. POLECAM!!!",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="opinie" className="section-padding bg-secondary/20">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Zaufali nam <span className="text-gradient">kierowcy Uber i Bolt we Wrocławiu</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
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
                <p className="text-muted-foreground text-xs">
                  {t.role} · {t.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
