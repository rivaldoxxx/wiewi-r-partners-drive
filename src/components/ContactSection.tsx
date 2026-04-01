import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="kontakt" className="section-padding bg-secondary/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-3 block">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Gotowy, żeby <span className="text-gradient">zacząć zarabiać?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Skontaktuj się z nami — odpowiemy w ciągu kilku godzin. Pomożemy Ci ruszyć w trasę nawet w 48h.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 md:p-8 rounded-2xl bg-card border border-border card-glow"
          >
            <h3 className="font-heading text-xl font-bold mb-6">Wyślij zgłoszenie</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
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
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="">Wybierz opcję</option>
                  <option value="no">Nie — chcę auto firmowe</option>
                  <option value="yes">Tak — mam własne auto</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1.5">
                  Wiadomość (opcjonalnie)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Napisz, jeśli masz pytania..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-base glow-primary">
                Wyślij zgłoszenie
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Odpowiadamy w ciągu kilku godzin. Twoje dane są bezpieczne.
              </p>
            </form>
          </motion.div>

          {/* Contact info */}
          <motion.div
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
                href="tel:+48123456789"
                className="flex items-center gap-3 text-primary font-heading font-bold text-lg hover:underline"
              >
                <Phone className="w-5 h-5" />
                +48 123 456 789
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border card-glow">
              <h3 className="font-heading font-semibold mb-3">Napisz do nas</h3>
              <div className="space-y-3">
                <a href="mailto:kontakt@wiewiorpartners.pl" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  kontakt@wiewiorpartners.pl
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
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
                  <p>Wrocław, Dolnośląskie</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
