import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Czy potrzebuję doświadczenia jako kierowca Uber lub Bolt?",
    a: "Nie! Wystarczy prawo jazdy kat. B. Wiewiór Partners pomaga Ci przejść cały proces — od badań lekarskich po aktywację konta na platformach Uber, Bolt i FreeNow.",
  },
  {
    q: "Ile mogę zarabiać jako kierowca Uber we Wrocławiu?",
    a: "Zarobki zależą od liczby przepracowanych godzin. Nasi kierowcy zarabiają nawet kilka tysięcy złotych miesięcznie przy elastycznym grafiku. Otrzymujesz do 60% obrotu z platform.",
  },
  {
    q: "Czy muszę wpłacać kaucję za firmowe auto?",
    a: "Nie. Wiewiór Partners nie pobiera kaucji. To jedna z naszych kluczowych zasad — zero ukrytych kosztów od pierwszego dnia.",
  },
  {
    q: "Jak szybko mogę zacząć pracę jako kierowca Bolt we Wrocławiu?",
    a: "Nawet w 48 godzin od pierwszego kontaktu. Pomagamy z formalnościami i dostarczamy auto gotowe do jazdy.",
  },
  {
    q: "Czy mogę jeździć własnym autem na platformach Uber lub Bolt?",
    a: "Tak! Oferujemy współpracę zarówno na naszych autach (Toyota Corolla), jak i na Twoim własnym samochodzie — z jeszcze lepszymi warunkami rozliczenia.",
  },
  {
    q: "Czy zatrudniacie cudzoziemców — kierowców Uber we Wrocławiu?",
    a: "Tak, pomagamy z wszystkimi formalnościami, w tym z dokumentami potrzebnymi do legalnej pracy w Polsce.",
  },
  {
    q: "Kto pokrywa koszty paliwa i serwisu auta?",
    a: "Wiewiór Partners! Paliwo, ubezpieczenie OC/AC/NNW, serwis, naprawy — to wszystko po naszej stronie.",
  },
  {
    q: "Jak często wypłacane są zarobki kierowcy?",
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Pytania o pracę kierowcy <span className="text-gradient">Uber i Bolt we Wrocławiu</span>
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
