import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      fontFamily: {
        // Rodzina nagłówków pochodzi z tokena motywu:
        // Nocny Orzech → Space Grotesk, Terakota Premium → Instrument Serif
        heading: ["var(--font-heading)", "Space Grotesk", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "surface-elevated": "hsl(var(--surface-elevated))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        // Wejście hero w czystym CSS: rusza od razu po wyświetleniu HTML z prerenderingu,
        // bez czekania na JavaScript (framer-motion trzymał treść w opacity: 0 do hydracji).
        "hero-fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "hero-fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "hero-zoom-in": {
          from: { opacity: "0", transform: "scale(1.05)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        "hero-reveal": {
          from: { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" },
          to: { clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "hero-fade-up": "hero-fade-up 0.6s ease-out both",
        "hero-fade-in": "hero-fade-in 0.6s ease-out both",
        "hero-zoom-in": "hero-zoom-in 0.8s ease-out both",
        // cubic-bezier odpowiada „circOut” z framer-motion
        "hero-reveal": "hero-reveal 1.2s cubic-bezier(0, 0.55, 0.45, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
