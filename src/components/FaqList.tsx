import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/faqs";

// Natywne <details>: odpowiedzi są w HTML także zwinięte, więc widzą je Google i boty AI
// (Radix Accordion wstawiał treść dopiero po kliknięciu).
const FaqList = ({ items }: { items: FaqItem[] }) => (
  <div className="space-y-3">
    {items.map((faq) => (
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
);

export default FaqList;
