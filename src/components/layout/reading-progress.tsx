"use client";

import { navLinks } from "@/data/site-data";
import { useReadingProgress } from "@/hooks/use-scroll-progress";
import { cn } from "@/lib/utils";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export function ReadingProgress() {
  const { activeSection, overallProgress } = useReadingProgress(sectionIds);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      aria-label="Page reading progress"
    >
      <div className="flex flex-col items-end gap-3">
        <div className="relative h-32 w-1 overflow-hidden rounded-full bg-border/50">
          <div
            className="absolute bottom-0 w-full rounded-full bg-primary transition-all duration-300"
            style={{ height: `${overallProgress}%` }}
          />
        </div>

        <div className="flex flex-col items-end gap-1.5">
          {navLinks.map((link, index) => {
            const isActive = activeSection === index;
            return (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={cn(
                  "group flex items-center gap-2 text-right transition-all",
                  isActive ? "opacity-100" : "opacity-40 hover:opacity-70"
                )}
                aria-label={`Go to ${link.label}`}
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={cn(
                    "max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-medium uppercase tracking-wider transition-all duration-300 group-hover:max-w-[80px]",
                    isActive && "max-w-[80px] text-primary"
                  )}
                >
                  {link.label}
                </span>
                <span
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-all",
                    isActive
                      ? "scale-125 bg-primary"
                      : "bg-muted-foreground/50 group-hover:bg-muted-foreground"
                  )}
                />
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
