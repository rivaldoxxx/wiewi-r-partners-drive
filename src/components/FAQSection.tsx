import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Czy potrzebuję doświadczenia jako kierowca?",
    a: "Nie! Wystarczy prawo jazdy kat. B. Pomagamy Ci przejść cały proces — od badań lekarskich po aktywację konta na platformach.",
  },
  {
    q: "Ile mogę zarabiać?",
    a: "Zarobki zależą od liczby przepracowanych godzin. Nasi kierowcy zarabiają nawet kilka tysięcy złotych miesięcznie przy elastycznym grafiku. Otrzymujesz do 60% obrotu.",
  },
  {
    q: "Czy muszę wpłacać kaucję za auto?",
    a: "Nie. Nie pobieramy kaucji. To jedna z naszych kluczowych zasad — zero ukrytych kosztów.",
  },
  {
    q: "Jak szybko mogę zacząć?",
    a: "Nawet w 48 godzin od pierwszego kontaktu. Pomagamy z formalnościami i dostarczamy auto gotowe do jazdy.",
  },
  {
    q: "Czy mogę jeździć własnym autem?",
    a: "Tak! Oferujemy współpracę zarówno na naszych autach (Toyota Corolla), jak i na Twoim własnym samochodzie — z jeszcze lepszymi warunkami rozliczenia.",
  },
  {
    q: "Czy zatrudniacie cudzoziemców?",
    a: "Tak, pomagamy z wszystkimi formalnościami, w tym z dokumentami potrzebnymi do legalnej pracy w Polsce.",
  },
  {
    q: "Kto pokrywa koszty paliwa i serwisu?",
    a: "My! Paliwo, ubezpieczenie, serwis, naprawy — to wszystko po naszej stronie.",
  },
  {
    q: "Jak często wypłacane są pieniądze?",
    a: "Wypłaty realizujemy co tydzień. System rozliczeń jest w pełni przejrzysty.",
  },
];

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Najczęściej zadawane <span className="text-gradient">pytania</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-border rounded-xl px-5 bg-card card-glow data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-sm md:text-base hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
