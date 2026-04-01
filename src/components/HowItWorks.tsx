import { motion } from "framer-motion";
import { PhoneCall, FileText, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Skontaktuj się z nami",
    desc: "Zadzwoń, napisz lub wypełnij formularz. Odpowiemy w ciągu kilku godzin.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Załatwiamy formalności",
    desc: "Pomagamy z dokumentami, badaniami lekarskimi i psychotestami. Zwracamy koszty!",
  },
  {
    icon: CarFront,
    step: "03",
    title: "Odbierz auto i zarabiaj",
    desc: "Dostajesz gotowe do jazdy auto i ruszasz na trasę. Nawet w 48 godzin!",
  },
];

const HowItWorks = () => {
  return (
    <section id="jak-zaczac" className="section-padding bg-secondary/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Jak zacząć
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            3 proste kroki do <span className="text-gradient">nowej pracy</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Nie potrzebujesz doświadczenia. Całą resztę załatwiamy za Ciebie.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative p-6 md:p-8 rounded-2xl bg-card border border-border card-glow text-center"
            >
              <span className="text-6xl font-heading font-bold text-primary/10 absolute top-4 right-6">
                {s.step}
              </span>
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="text-base glow-primary">
            <a href="#kontakt">Zacznij teraz — to proste!</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
