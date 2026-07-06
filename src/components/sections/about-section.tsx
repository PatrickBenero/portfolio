"use client";

import { professionalSummary } from "@/data/site-data";
import {
  SectionHeading,
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
} from "@/components/animations/scroll-reveal";

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About"
          title="I start with the database, then build up"
          description={professionalSummary.headline}
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3" direction="left">
            <div className="space-y-5">
              {professionalSummary.paragraphs.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-2" direction="right">
            <div className="glass rounded-2xl p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                What I work on
              </h3>
              <StaggerReveal className="grid grid-cols-2 gap-3">
                {professionalSummary.focusAreas.map((area) => (
                  <StaggerItem key={area}>
                    <div className="rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5">
                      {area}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
