import { useState, type FormEvent } from "react";
import { m } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "48665660610";
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const CAR_OPTIONS = ["Nie — chcę auto firmowe", "Tak — mam własne auto"];

type FormStatus = "idle" | "sending" | "sent" | "whatsapp" | "error";

const STATUS_MESSAGES: Partial<Record<FormStatus, string>> = {
  sent: "Dziękujemy! Zgłoszenie dotarło — oddzwonimy w ciągu kilku godzin.",
  whatsapp: "Otworzyliśmy WhatsApp z gotową wiadomością — wystarczy ją wysłać.",
  error: "Nie udało się wysłać zgłoszenia. Zadzwoń: +48 665 660 610 albo napisz na WhatsApp.",
};

// Z kluczem Web3Forms zgłoszenie idzie e-mailem. Bez klucza otwieramy WhatsApp z gotową wiadomością,
// żeby żadne zgłoszenie nie przepadło.
const submitApplication = async (form: HTMLFormElement): Promise<FormStatus> => {
  const data = new FormData(form);

  if (!WEB3FORMS_KEY) {
    const car = String(data.get("car") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const text = [
      "Dzień dobry, chcę zostać kierowcą.",
      `Imię i nazwisko: ${data.get("name")}`,
      `Telefon: ${data.get("phone")}`,
      car && `Własne auto: ${car}`,
      message && `Wiadomość: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    return "whatsapp";
  }

  data.append("access_key", WEB3FORMS_KEY);
  data.append("subject", "Nowe zgłoszenie kierowcy ze strony");
  data.append("from_name", "Strona Wiewiór Partners");
  const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.success) throw new Error("Web3Forms odrzucił zgłoszenie");
  return "sent";
};

const ContactSection = () => {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const next = await submitApplication(form);
      setStatus(next);
      if (next === "sent") form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="section-padding bg-secondary/20">
      <div className="container">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Kontakt
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Gotowy, żeby <span className="text-gradient">zacząć zarabiać?</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Skontaktuj się z nami — odpowiemy w ciągu kilku godzin. Pomożemy Ci ruszyć w trasę od zaraz.
          </p>
        </m.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border card-glow"
          >
            <h3 className="font-heading text-xl font-bold mb-6">Wyślij zgłoszenie</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Pułapka na boty: ludzie tego pola nie widzą, Web3Forms odrzuca zgłoszenia z zaznaczonym. */}
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Numer telefonu
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  autoComplete="tel"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="+48 000 000 000"
                />
              </div>
              <div>
                <label htmlFor="car" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Masz własne auto?
                </label>
                <select
                  id="car"
                  name="car"
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="">Wybierz opcję</option>
                  {CAR_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Wiadomość (opcjonalnie)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Napisz, jeśli masz pytania..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-base glow-primary" disabled={status === "sending"}>
                {status === "sending" ? "Wysyłanie…" : "Wyślij zgłoszenie"}
              </Button>
              {STATUS_MESSAGES[status] ? (
                <p
                  role={status === "error" ? "alert" : "status"}
                  className={`text-sm text-center ${status === "error" ? "text-destructive" : "text-primary"}`}
                >
                  {STATUS_MESSAGES[status]}
                </p>
              ) : (
                <p className="text-xs text-muted-foreground text-center">
                  Odpowiadamy w ciągu kilku godzin. Twoje dane są bezpieczne.
                </p>
              )}
            </form>
          </m.div>

          {/* Contact info */}
          <m.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="p-6 rounded-2xl bg-card border border-border card-glow">
              <h3 className="font-heading text-xl font-bold mb-4">Wolisz zadzwonić?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Zadzwoń do nas — chętnie odpowiemy na wszystkie pytania i pomożemy Ci zacząć.
              </p>
              <a
                href="tel:+48665660610"
                className="flex items-center gap-3 text-primary font-heading font-bold text-lg hover:underline"
              >
                <Phone className="w-5 h-5" />
                +48 665 660 610
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border card-glow">
              <h3 className="font-heading font-semibold mb-3">Napisz do nas</h3>
              <div className="space-y-3">
                <a href="mailto:biuro@wiewiorpartners.pl" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  biuro@wiewiorpartners.pl
                </a>
                <a
                  href="https://wa.me/48665660610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-primary" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border card-glow">
              <h3 className="font-heading font-semibold mb-3">Biuro</h3>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <p>Wiewiór Partners</p>
                  <p>ul. Muchoborska 14/204A</p>
                  <p>54-424 Wrocław</p>
                  <p className="mt-2">Pon–pt 8:00–18:00, sob 9:00–14:00</p>
                </div>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
