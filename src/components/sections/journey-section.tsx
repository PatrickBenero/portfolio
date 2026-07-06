"use client";

import { BookOpen, Code, GitBranch } from "lucide-react";
import { learningJourney } from "@/data/site-data";
import {
  SectionHeading,
  ScrollReveal,
} from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

const typeConfig = {
  learning: {
    icon: BookOpen,
    label: "Learning",
    color: "border-orange-200 bg-orange-50 dark:border-orange-900/40 dark:bg-orange-950/30",
    dotColor: "bg-accent",
  },
  engineering: {
    icon: Code,
    label: "Building",
    color: "border-red-200 bg-red-50 dark:border-red-900/40 dark:bg-red-950/30",
    dotColor: "bg-primary",
  },
  opensource: {
    icon: GitBranch,
    label: "Open Source",
    color: "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800/50",
    dotColor: "bg-muted-foreground",
  },
};

export function JourneySection() {
  const grouped = {
    learning: learningJourney.filter((j) => j.type === "learning"),
    engineering: learningJourney.filter((j) => j.type === "engineering"),
    opensource: learningJourney.filter((j) => j.type === "opensource"),
  };

  return (
    <section id="journey" aria-labelledby="journey-heading" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Journey"
          title="How I got here"
          description="No corporate internship yet — but a clear track record of learning, building, and shipping on my own."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {(Object.keys(grouped) as Array<keyof typeof grouped>).map(
            (type, colIndex) => {
              const config = typeConfig[type];
              const Icon = config.icon;
              const items = grouped[type];

              return (
                <ScrollReveal key={type} delay={colIndex * 0.12}>
                  <div className="h-full">
                    <div className="mb-6 flex items-center gap-3">
                      <div
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-xl border",
                          config.color
                        )}
                      >
                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      </div>
                      <h3 className="font-semibold text-foreground">
                        {config.label}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {items.map((item, index) => (
                        <article
                          key={item.id}
                          className="relative rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                        >
                          {index < items.length - 1 && (
                            <div
                              className="absolute -bottom-4 left-6 h-4 w-px bg-border"
                              aria-hidden="true"
                            />
                          )}
                          <div className="mb-2 flex items-center gap-2">
                            <span
                              className={cn("h-2 w-2 rounded-full", config.dotColor)}
                              aria-hidden="true"
                            />
                            <time className="text-xs font-medium text-muted-foreground">
                              {item.period}
                            </time>
                          </div>
                          <h4 className="mb-1 font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="mb-2 text-sm font-medium text-primary">
                            {item.organization}
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {item.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
