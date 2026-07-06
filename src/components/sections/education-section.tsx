"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { education } from "@/data/site-data";
import { SectionHeading, ScrollReveal } from "@/components/animations/scroll-reveal";

export function EducationSection() {
  return (
    <section id="education" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Education"
          title="Academic foundation in Information Technology"
          description="Building strong CS fundamentals alongside hands-on engineering projects."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/50 to-transparent sm:left-1/2 sm:-translate-x-px" />

          {education.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <div
                className={`relative mb-12 flex flex-col sm:flex-row ${
                  index % 2 === 0 ? "sm:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden sm:block sm:w-1/2" />

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background sm:left-1/2"
                >
                  <GraduationCap className="h-4 w-4 text-primary" />
                </motion.div>

                <div
                  className={`ml-12 sm:ml-0 sm:w-1/2 ${
                    index % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                  }`}
                >
                  <div className="rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-xl transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                      {item.period}
                    </span>
                    <h3 className="mb-1 text-lg font-bold">{item.degree}</h3>
                    <p className="mb-1 text-sm font-medium text-primary">
                      {item.institution}
                    </p>
                    <p className="mb-3 text-sm font-semibold">{item.grade}</p>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                    <ul className={`space-y-1 ${index % 2 === 0 ? "sm:text-right" : ""}`}>
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs text-muted-foreground before:mr-2 before:text-primary before:content-['•']"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
