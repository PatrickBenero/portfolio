"use client";

import Image from "next/image";
import { Award } from "lucide-react";
import { certifications } from "@/data/site-data";
import {
  SectionHeading,
  StaggerReveal,
  StaggerItem,
} from "@/components/animations/scroll-reveal";
import { cn } from "@/lib/utils";

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-padding bg-muted/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Certifications"
          title="Credentials that back up the code"
          description="Full-stack development, cloud fundamentals, database engineering, and cybersecurity."
        />

        <StaggerReveal className="grid gap-6 sm:grid-cols-2">
          {certifications.map((cert) => (
            <StaggerItem key={cert.id}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    cert.color
                  )}
                  aria-hidden="true"
                />
                <div className="relative flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background">
                    <Image
                      src={cert.logo}
                      alt=""
                      width={40}
                      height={40}
                      className="object-contain"
                      loading="lazy"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground">{cert.title}</h3>
                      <Award
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mb-1 text-sm font-medium text-primary">
                      {cert.issuer}
                    </p>
                    <p className="mb-2 text-xs text-muted-foreground">{cert.year}</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
