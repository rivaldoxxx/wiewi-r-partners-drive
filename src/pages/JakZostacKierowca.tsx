import { ArrowRight } from "lucide-react";
import SubpageLayout, { CheckList } from "@/components/SubpageLayout";
import type { FaqItem } from "@/data/faqs";
import { driverRequirements } from "@/data/requirements";
import { JAK_ZOSTAC_KIEROWCA_PATH, PARTNER_FLOTOWY_PATH } from "@/lib/routes";

// Poradnik pod frazy „jak zostać kierowcą bolta” (880/mies.), „kierowca bolt wymagania”,
// „kierowca ubera”, „uber jak zacząć” i „badania kierowca taxi” (docs/seo/frazy-kluczowe.md).
// W Google wygrywają na nie poradniki małych partnerów, ale żaden nie jest o Wrocławiu.

const documents = [
  "Dowód osobisty, paszport albo karta pobytu",
  "Polskie prawo jazdy kat. B",
  "Zaświadczenie o niekaralności z Krajowego Rejestru Karnego, nie starsze niż 30 dni",
  "Orzeczenia z badań lekarskich i psychologicznych",
  "Cudzoziemcy: zaświadczenie o niekaralności z kraju pochodzenia z tłumaczeniem przysięgłym oraz dokument pobytu z prawem do pracy w Polsce",
];

const examCosts = [
  { name: "Badanie lekarskie", price: "maks. 200 zł", note: "u uprawnionego lekarza" },
  { name: "Badanie psychologiczne", price: "maks. 150 zł", note: "u psychologa transportu; ministerstwo planuje podwyżkę do 200 zł" },
];

const steps = [
  {
    title: "Zgłoś się do nas",
    desc: "Wyślij zgłoszenie, zadzwoń albo napisz na WhatsApp. Odpowiadamy w ciągu kilku godzin.",
  },
  {
    title: "Zrób badania i zbierz dokumenty",
    desc: "Podpowiemy, gdzie we Wrocławiu zrobić badania i jak zamówić zaświadczenie o niekaralności. Koszty badań zwracamy.",
  },
  {
    title: "Zarejestruj się w Bolt i Uber",
    desc: "Zakładamy konto w aplikacjach i przeprowadzamy Cię przez weryfikację dokumentów.",
  },
  {
    title: "Odbierz auto albo zgłoś swoje",
    desc: "Dostajesz Toyotę Corollę bez kaucji, z paliwem, ubezpieczeniem i serwisem w cenie. Możesz też jeździć własnym autem, jeśli spełnia wymagania aplikacji.",
  },
  {
    title: "Jeździsz i zarabiasz",
    desc: "Włączasz aplikację, kiedy chcesz. Wypłaty dostajesz co tydzień.",
  },
];

const faqs: FaqItem[] = [
  {
    q: "Ile trwa, zanim zacznę jeździć?",
    a: "Jeśli masz już badania i dokumenty, możesz zacząć od zaraz. Najdłużej zwykle trwa zebranie dokumentów, np. zaświadczenia o niekaralności z kraju pochodzenia u cudzoziemców.",
  },
  {
    q: "Czy potrzebuję własnej licencji taxi?",
    a: "Nie. Jeździsz przez partnera flotowego, który ma licencję na przewóz osób. Nie musisz też zakładać działalności.",
  },
  {
    q: "Czy mogę zostać kierowcą bez własnego auta?",
    a: "Tak. Dajemy Toyotę Corollę bez kaucji, a paliwo, ubezpieczenie OC/AC/NNW i serwis są po naszej stronie.",
  },
  {
    q: "Czy cudzoziemiec może zostać kierowcą Bolta lub Ubera?",
    a: "Tak. Potrzebny jest dokument pobytu z prawem do pracy w Polsce, polskie prawo jazdy (zagraniczne trzeba wymienić) i zaświadczenie o niekaralności z kraju pochodzenia z tłumaczeniem przysięgłym. Pomagamy z formalnościami.",
  },
];

const JakZostacKierowca = () => (
  <SubpageLayout
    path={JAK_ZOSTAC_KIEROWCA_PATH}
    title="Jak zostać kierowcą Bolt i Uber we Wrocławiu — wymagania i kroki"
    description="Jak zostać kierowcą Bolta i Ubera we Wrocławiu? Wymagania, dokumenty, koszt badań i 5 kroków do startu. Pomagamy we wszystkim i zwracamy koszty badań."
    breadcrumb="Jak zostać kierowcą Bolt i Uber"
    eyebrow="Poradnik · Wrocław"
    heading={<>Jak zostać kierowcą Bolt i Uber <span className="text-gradient">we Wrocławiu</span></>}
    lead={
      <p>
        Żeby zostać kierowcą Bolta lub Ubera, potrzebujesz ukończonych 18 lat, polskiego prawa jazdy kat. B,
        zaświadczenia o niekaralności oraz badań lekarskich i psychologicznych. Doświadczenie nie jest potrzebne.
        Najprościej zacząć przez partnera flotowego: załatwia rejestrację i rozliczenia, a jeśli trzeba, daje auto.
      </p>
    }
    faqHeading="Pytania o to, jak zostać kierowcą"
    faqs={faqs}
  >
    <section className="section-padding bg-secondary/20">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Wymagania dla kierowcy Bolt i Uber</h2>
        <CheckList items={driverRequirements} className="mb-4 max-w-3xl" />
        <p className="text-sm text-muted-foreground max-w-3xl">
          Doświadczenie jako kierowca nie jest potrzebne. Potrzebny jest smartfon, na którym zainstalujesz aplikacje kierowcy.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Jakie dokumenty przygotować?</h2>
        <CheckList items={documents} className="mb-4 max-w-3xl" />
        <p className="text-sm text-muted-foreground max-w-3xl">
          Bolt i Uber sprawdzają oryginały dokumentów podczas weryfikacji. Powiemy Ci, co i gdzie zabrać.
        </p>
      </div>
    </section>

    <section className="section-padding bg-secondary/20">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Badania lekarskie i psychologiczne: ile kosztują?</h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mb-4">
          {examCosts.map((exam) => (
            <div key={exam.name} className="p-5 rounded-xl bg-card border border-border card-glow">
              <h3 className="font-heading font-semibold text-base mb-1">{exam.name}</h3>
              <p className="text-2xl font-heading font-bold text-primary mb-1">{exam.price}</p>
              <p className="text-sm text-muted-foreground">{exam.note}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground max-w-3xl">
          To maksymalne stawki z przepisów. Kierowcom Wiewiór Partners zwracamy koszty badań.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Krok po kroku: jak zacząć jeździć we Wrocławiu</h2>
        <ol className="space-y-5 max-w-3xl mb-6">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-4">
              <span className="w-8 h-8 shrink-0 rounded-full bg-primary/10 text-primary font-heading font-bold flex items-center justify-center text-sm">
                {i + 1}
              </span>
              <div>
                <h3 className="font-heading font-semibold text-base mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-sm text-muted-foreground max-w-3xl">Masz już badania i dokumenty? Możesz zacząć od zaraz.</p>
      </div>
    </section>

    <section className="section-padding bg-secondary/20">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Bolt czy Uber: w której aplikacji jeździć?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Nie musisz wybierać. Z partnerem flotowym możesz jeździć na Bolcie, Uberze i FreeNow, a przejazdy
            ze wszystkich aplikacji rozliczamy w jednym miejscu. Więcej aplikacji to mniej czekania na kurs.
          </p>
          <a href={PARTNER_FLOTOWY_PATH} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
            Czym jest partner flotowy i jak go wybrać?
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  </SubpageLayout>
);

export default JakZostacKierowca;
