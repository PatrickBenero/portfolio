"use client";

import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Brain,
} from "lucide-react";
import { skillCategories } from "@/data/site-data";
import {
  SectionHeading,
  StaggerReveal,
  StaggerItem,
} from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

const iconMap = {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Wrench,
  Brain,
};

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-padding bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="Python, Django, and the tools around them"
          description="Stack built through coursework, certifications, and three shipped projects."
        />

        <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skillCategories.map((category) => {
            const Icon = iconMap[category.icon as keyof typeof iconMap];
            return (
              <StaggerItem key={category.id}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                      category.color
                    )}
                    aria-hidden="true"
                  />
                  <div className="relative">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mb-3 font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
