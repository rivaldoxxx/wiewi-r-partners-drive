import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Aktywnych kierowców" },
  { value: "48h", label: "Start współpracy" },
  { value: "60%", label: "Obrotu dla Ciebie" },
  { value: "24/7", label: "Wsparcie techniczne" },
];

const TrustBar = () => {
  return (
    <section className="relative border-y border-border bg-secondary/30">
      <div className="container py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
            Oficjalny partner flotowy
          </p>
          <div className="flex items-center gap-8 md:gap-12">
            {["Uber", "Bolt", "FreeNow"].map((name) => (
              <span key={name} className="text-2xl md:text-3xl font-heading font-bold text-foreground/60">
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
