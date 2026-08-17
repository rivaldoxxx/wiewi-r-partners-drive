import { motion } from "framer-motion";
import {
  Car, Fuel, Shield, Wrench, Calendar, Wallet,
  HeartHandshake, FileCheck, Clock
} from "lucide-react";

const benefits = [
  { icon: Car, title: "Firmowe auto", desc: "Toyota Corolla z pełnym wyposażeniem — bez kaucji." },
  { icon: Fuel, title: "Paliwo w cenie", desc: "Nie płacisz za paliwo — to nasz koszt." },
  { icon: Shield, title: "Ubezpieczenie", desc: "Pełne OC/AC i NNW po stronie firmy." },
  { icon: Wrench, title: "Serwis i naprawy", desc: "Wszystkie koszty eksploatacji pokrywamy my." },
  { icon: Wallet, title: "Do 60% obrotu", desc: "Atrakcyjne rozliczenie — zarabiasz więcej." },
  { icon: Calendar, title: "Elastyczny grafik", desc: "Pracujesz kiedy chcesz, ile chcesz." },
  { icon: Clock, title: "Tygodniowe wypłaty", desc: "Przejrzysty system — pieniądze co tydzień." },
  { icon: FileCheck, title: "Legalne zatrudnienie", desc: "Umowa, formalności i badania — załatwiamy." },
  { icon: HeartHandshake, title: "Wsparcie 24/7", desc: "Zawsze masz do kogo zadzwonić." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const BenefitsSection = () => {
  return (
    <section id="korzysci" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Korzyści
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Wszystko, czego potrzebujesz do <span className="text-gradient">zarabiania jako kierowca</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Zapewniamy firmowe auto, paliwo, ubezpieczenie i pełne wsparcie operacyjne. Ty skupiasz się na jeździe i zarabianiu na Uberze, Bolcie i FreeNow we Wrocławiu.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto"
        >
          {benefits.map((b) => (
            <motion.div
              key={b.title}
              variants={itemVariants}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 card-glow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-base mb-1">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
