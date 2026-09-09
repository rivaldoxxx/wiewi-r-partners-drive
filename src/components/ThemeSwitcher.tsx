import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Kolorystyka strony"
      className={cn(
        "inline-flex items-center gap-1 p-1 rounded-full border border-border bg-secondary/40",
        className,
      )}
    >
      {themes.map((option) => {
        const active = option.id === theme;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => setTheme(option.id)}
            title={option.name}
            className={cn(
              "flex items-center gap-2 h-8 px-3 rounded-full text-xs font-medium transition-colors",
              active
                ? "bg-background text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            <span
              aria-hidden="true"
              className="w-2.5 h-2.5 rounded-full shrink-0"
              style={{ background: `hsl(${option.swatch})` }}
            />
            <span className="hidden xl:inline">{option.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ThemeSwitcher;
