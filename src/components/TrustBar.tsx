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
        <div className="flex flex-col items-center gap-4 mb-10">
          <p className="text-muted-foreground text-xs font-medium uppercase tracking-[0.2em]">
            Oficjalny partner flotowy
          </p>
          <div className="flex items-center gap-3 md:gap-5">
            {["Uber", "Bolt", "FreeNow"].map((name, i, arr) => (
              <div key={name} className="flex items-center gap-3 md:gap-5">
                <span className="text-2xl md:text-3xl font-heading font-bold text-foreground/50 hover:text-foreground/80 transition-colors duration-200">
                  {name}
                </span>
                {i < arr.length - 1 && (
                  <span className="w-px h-5 bg-border" />
                )}
              </div>
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
