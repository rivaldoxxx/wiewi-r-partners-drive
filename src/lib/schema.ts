import type { FaqItem } from "@/data/faqs";

/** FAQPage z tych samych pytań, które widać na stronie (Google wymaga zgodności). */
export const faqPageSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});
