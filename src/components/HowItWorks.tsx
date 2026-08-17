import { motion } from "framer-motion";
import { PhoneCall, FileText, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StepsTimeline } from "@/components/ui/steps";

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            3 proste kroki do <span className="text-gradient">pracy kierowcy we Wrocławiu</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Nie potrzebujesz doświadczenia. Wystarczy prawo jazdy kat. B — całą resztę załatwiamy za Ciebie.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-16 max-w-5xl mx-auto px-4 md:px-8"
        >
          <StepsTimeline steps={steps} />
        </motion.div>

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
