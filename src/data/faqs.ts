// Jedno źródło dla sekcji FAQ i danych strukturalnych FAQPage w src/pages/Index.tsx,
// żeby treść w Google zawsze zgadzała się z tym, co widać na stronie.
// Pytania odpowiadają frazom z docs/seo/frazy-kluczowe.md (wymagania, zarobki, partner flotowy, badania).
export type FaqItem = { q: string; a: string };

export const faqs: FaqItem[] = [
  {
    q: "Czym jest partner flotowy Uber i Bolt?",
    a: "To firma, przez którą kierowca jeździ na aplikacjach Uber, Bolt i FreeNow. Partner flotowy załatwia rejestrację, rozlicza przejazdy i wypłaca zarobki, a często daje też auto. Wiewiór Partners jest oficjalnym partnerem flotowym we Wrocławiu: dajemy auto bez kaucji albo rozliczamy Cię, gdy jeździsz własnym samochodem.",
  },
  {
    q: "Jakie są wymagania, żeby zostać kierowcą Uber lub Bolt?",
    a: "Musisz mieć ukończone 18 lat, polskie prawo jazdy kat. B, aktualne zaświadczenie o niekaralności (nie starsze niż 30 dni) oraz zrobić badania lekarskie i psychologiczne. Doświadczenie jako kierowca nie jest potrzebne. W każdym kroku pomagamy.",
  },
  {
    q: "Czy potrzebuję doświadczenia jako kierowca Uber lub Bolt?",
    a: "Nie! Wystarczy polskie prawo jazdy kat. B. Wiewiór Partners pomaga Ci przejść cały proces — od badań lekarskich po aktywację konta na platformach Uber, Bolt i FreeNow.",
  },
  {
    q: "Ile zarabia kierowca Uber i Bolt we Wrocławiu?",
    a: "Zarobki zależą od liczby przepracowanych godzin. Nasi kierowcy zarabiają od około 3500 do 10 000 zł miesięcznie. Otrzymujesz do 60% obrotu z platform, a do tego cotygodniowy bonus.",
  },
  {
    q: "Ile kosztują badania lekarskie i psychologiczne kierowcy?",
    a: "Według przepisów badanie lekarskie kosztuje maksymalnie 200 zł, a badanie psychologiczne maksymalnie 150 zł. Koszty badań Ci zwracamy.",
  },
  {
    q: "Czy muszę wpłacać kaucję za firmowe auto?",
    a: "Nie. Wiewiór Partners nie pobiera kaucji. To jedna z naszych kluczowych zasad — zero ukrytych kosztów od pierwszego dnia.",
  },
  {
    q: "Jak szybko mogę zacząć pracę jako kierowca Bolt we Wrocławiu?",
    a: "Nawet od zaraz od pierwszego kontaktu. Pomagamy z formalnościami i dostarczamy auto gotowe do jazdy.",
  },
  {
    q: "Czy mogę jeździć własnym autem na platformach Uber lub Bolt?",
    a: "Tak! Oferujemy współpracę zarówno na naszych autach, jak i na Twoim własnym samochodzie — z jeszcze lepszymi warunkami rozliczenia.",
  },
  {
    q: "Czy zatrudniacie cudzoziemców — kierowców Uber we Wrocławiu?",
    a: "Tak. Cudzoziemiec potrzebuje dokumentu pobytu z prawem do pracy w Polsce, polskiego prawa jazdy (zagraniczne trzeba wymienić) oraz zaświadczenia o niekaralności z kraju pochodzenia z tłumaczeniem przysięgłym. Pomagamy z wszystkimi formalnościami.",
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
