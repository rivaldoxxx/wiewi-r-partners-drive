import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FaqList from "@/components/FaqList";
import { faqs } from "@/data/faqs";
import { GUIDE_PAGES } from "@/lib/routes";

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

        <FaqList items={faqs} />

        <ul className="mt-8 space-y-2">
          {GUIDE_PAGES.map((page) => (
            <li key={page.path}>
              <a href={page.path} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                {page.label}
                <ArrowRight className="w-4 h-4" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
