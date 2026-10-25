import SubpageLayout from "@/components/SubpageLayout";
import type { FaqItem } from "@/data/faqs";
import { ZAROBKI_KIEROWCY_PATH } from "@/lib/routes";

// Podstrona pod „kierowca bolt zarobki” (140/mies.) i „ile zarabia kierowca bolt/uber”
// (docs/seo/frazy-kluczowe.md). Nr 1 w Google ma tu blog MB Partner z konkretnymi liczbami.
// Przykładowych tygodniówek kierowców jeszcze nie ma: dodamy je, gdy właściciel poda prawdziwe dane.

const factors = [
  { title: "Liczba godzin", desc: "Im więcej jeździsz, tym większy obrót. Grafik ustalasz sam." },
  {
    title: "Pory i dni",
    desc: "Zwykle najwięcej kursów jest w piątkowe i sobotnie wieczory oraz w porannych i popołudniowych szczytach.",
  },
  { title: "Liczba aplikacji", desc: "Jazda na Bolcie, Uberze i FreeNow to mniej czekania na kurs." },
  { title: "Podział obrotu i bonusy", desc: "Na naszym aucie dostajesz do 60% obrotu, a do tego cotygodniowy bonus." },
  {
    title: "Koszty auta",
    desc: "Jeżdżąc własnym autem, sam płacisz za paliwo, ubezpieczenie i serwis. Na naszym aucie te koszty są po naszej stronie.",
  },
];

const comparison = [
  { label: "Udział w obrocie", ours: "do 60%", own: "wyższy procent" },
  { label: "Paliwo", ours: "po naszej stronie", own: "po Twojej stronie" },
  { label: "Ubezpieczenie OC/AC/NNW", ours: "po naszej stronie", own: "po Twojej stronie" },
  { label: "Serwis i naprawy", ours: "po naszej stronie", own: "po Twojej stronie" },
  { label: "Kaucja", ours: "brak", own: "nie dotyczy" },
  { label: "Wypłaty", ours: "co tydzień", own: "co tydzień" },
];

const faqs: FaqItem[] = [
  {
    q: "Czy jest bonus dla kierowców?",
    a: "Tak. Co tydzień dostajesz bonus ponad swój udział w obrocie.",
  },
  {
    q: "Ile zarabia kierowca na własnym aucie?",
    a: "Dostajesz wyższy procent obrotu niż na naszym aucie, ale sam płacisz za paliwo, ubezpieczenie i serwis. Ile zostaje, zależy głównie od spalania auta i liczby godzin.",
  },
  {
    q: "Ile godzin trzeba jeździć?",
    a: "Tyle, ile chcesz, bo grafik jest elastyczny. Możesz jeździć na pełny etat albo dorabiać, np. w weekendy.",
  },
  {
    q: "Jak często są wypłaty?",
    a: "Co tydzień. Rozliczamy przejazdy ze wszystkich aplikacji w jednym miejscu.",
  },
];

const ZarobkiKierowcy = () => (
  <SubpageLayout
    path={ZAROBKI_KIEROWCY_PATH}
    title="Ile zarabia kierowca Uber i Bolt we Wrocławiu? Zarobki 2026"
    description="Ile zarabia kierowca Bolta i Ubera we Wrocławiu? Nasi kierowcy: od ok. 3500 do 10 000 zł miesięcznie. Sprawdź, od czego zależą zarobki."
    breadcrumb="Zarobki kierowcy Uber i Bolt"
    eyebrow="Zarobki · Wrocław"
    heading={<>Ile zarabia kierowca Uber i Bolt <span className="text-gradient">we Wrocławiu?</span></>}
    lead={
      <p>
        Kierowcy, którzy jeżdżą z Wiewiór Partners, zarabiają od około 3500 do 10 000 zł miesięcznie.
        Najwięcej zależy od tego, ile godzin jeździsz i o jakich porach. Na naszym aucie dostajesz do 60% obrotu
        i cotygodniowy bonus, a paliwo, ubezpieczenie i serwis są po naszej stronie.
      </p>
    }
    faqHeading="Pytania o zarobki kierowcy"
    faqs={faqs}
  >
    <section className="section-padding bg-secondary/20">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Od czego zależą zarobki kierowcy?</h2>
        <ul className="space-y-5 max-w-3xl">
          {factors.map((factor) => (
            <li key={factor.title}>
              <h3 className="font-heading font-semibold text-base mb-1">{factor.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{factor.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="section-padding">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Nasze auto czy własne: co się bardziej opłaca?</h2>
        <div className="max-w-3xl overflow-x-auto rounded-xl border border-border mb-6">
          <table className="w-full text-sm">
            <thead className="bg-card">
              <tr>
                <th scope="col" className="text-left font-heading font-semibold p-3 sm:p-4"></th>
                <th scope="col" className="text-left font-heading font-semibold p-3 sm:p-4">Nasze auto</th>
                <th scope="col" className="text-left font-heading font-semibold p-3 sm:p-4">Własne auto</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <th scope="row" className="text-left font-medium p-3 sm:p-4">{row.label}</th>
                  <td className="p-3 sm:p-4 text-muted-foreground">{row.ours}</td>
                  <td className="p-3 sm:p-4 text-muted-foreground">{row.own}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Na własnym aucie dostajesz wyższy procent, ale od obrotu odejmujesz koszty paliwa, ubezpieczenia i serwisu.
            Na naszym aucie te koszty pokrywamy my, dlatego to dobry wybór na start, jeśli nie masz auta.
          </p>
          <p>Wypłaty są co tydzień, niezależnie od tego, czym jeździsz.</p>
        </div>
      </div>
    </section>

    <section className="section-padding bg-secondary/20">
      <div className="container max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ile zarabiają kierowcy Bolta w Polsce?</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl">
          <p>
            Bolt podaje, że mediana tygodniowych zarobków kierowców w Polsce w sierpniu 2026 r. wyniosła 2 804 zł.
            Na tę kwotę składają się opłaty za przejazdy, kampanie i napiwki. To dane dla całej Polski: Bolt zaznacza,
            że w danej okolicy mediana może być niższa.
          </p>
          <p>Jeśli jeździsz własnym autem, od takiej kwoty trzeba jeszcze odjąć koszty auta.</p>
          <p className="text-xs">
            Źródło:{" "}
            <a href="https://bolt.eu/pl-pl/driver/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
              bolt.eu, strona dla kierowców
            </a>
          </p>
        </div>
      </div>
    </section>
  </SubpageLayout>
);

export default ZarobkiKierowcy;
