import { cn } from "@/lib/utils";

export interface StepItem {
  step: string;
  title: string;
  desc: string;
  icon?: React.ElementType;
}

interface StepsTimelineProps {
  steps: StepItem[];
  className?: string;
}

export function StepsTimeline({ steps, className }: StepsTimelineProps) {
  return (
    <div className={cn("w-full", className)}>
      {/* ── Mobile: vertical timeline ── */}
      <div className="flex flex-col gap-8 md:hidden">
        {steps.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === steps.length - 1;

          return (
            <div key={`mobile-${item.step}`} className="flex gap-4">
              {/* Icon + vertical connector */}
              <div className="flex flex-col items-center shrink-0">
                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-xl border border-primary/40 bg-card text-primary shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                  {Icon ? <Icon className="w-5 h-5" /> : item.step}
                </div>
                {!isLast && (
                  <div className="w-[2px] flex-1 mt-2 bg-gradient-to-b from-primary/50 to-primary/10" aria-hidden="true" />
                )}
              </div>

              {/* Text */}
              <div className="pt-1 pb-2">
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-1 block">
                  Krok {item.step}
                </span>
                <h3 className="text-lg font-bold mb-1 text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Desktop: horizontal timeline (original) ── */}
      <div
        className="hidden md:grid w-full"
        style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}
      >
        {/* Row 1: icons + connectors */}
        {steps.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === steps.length - 1;

          return (
            <div key={`icon-${item.step}`} className="relative flex justify-center mb-8">
              {!isLast && (
                <div
                  className="absolute top-7 h-[2px] bg-gradient-to-r from-primary/50 to-primary/20"
                  style={{ left: "50%", right: "-50%" }}
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl border border-primary/40 bg-card text-primary shadow-[0_0_20px_hsl(var(--primary)/0.2)]">
                {Icon ? <Icon className="w-6 h-6" /> : item.step}
              </div>
            </div>
          );
        })}

        {/* Row 2: labels + descriptions */}
        {steps.map((item) => (
          <div key={`text-${item.step}`} className="flex flex-col items-center text-center px-4">
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2">
              Krok {item.step}
            </span>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground tracking-tight">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
