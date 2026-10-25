import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

const FAQSection = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pytania o pracę kierowcy <span className="text-gradient">Uber i Bolt we Wrocławiu</span>
          </h2>
        </motion.div>

        {/* Natywne <details>: odpowiedzi są w HTML także zwinięte, więc widzą je Google i boty AI
            (Radix Accordion wstawiał treść dopiero po kliknięciu). */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group border border-border rounded-xl px-5 bg-card card-glow open:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                <h3 className="text-left font-heading font-semibold text-sm md:text-base">{faq.q}</h3>
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <p className="text-muted-foreground text-sm leading-relaxed pb-4">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
