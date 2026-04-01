import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nie czekaj. Zacznij zarabiać <span className="text-gradient">już dziś.</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Setki kierowców we Wrocławiu już nam zaufało. Dołącz do nich — auto, paliwo i wsparcie czekają.
          </p>
          <Button asChild size="lg" className="text-base gap-2 glow-primary">
            <a href="#kontakt">
              Aplikuj teraz
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
