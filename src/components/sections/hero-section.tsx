"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Mail, MapPin } from "lucide-react";
import { siteConfig, typingPhrases } from "@/data/site-data";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = typingPhrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentPhrase.length) {
            setTypedText(currentPhrase.slice(0, typedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(currentPhrase.slice(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-accent/8 blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 h-[250px] w-[250px] rounded-full bg-primary/5 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <ScrollReveal delay={0.1}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Open to Python Full-Stack Internships
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="text-gradient">Patrick</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p
                className="mb-6 min-h-8 text-xl font-medium text-muted-foreground sm:text-2xl"
                aria-live="polite"
              >
                <span>{typedText}</span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="ml-1 inline-block h-6 w-0.5 bg-primary align-middle"
                  aria-hidden="true"
                />
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mx-0">
                Python full-stack developer — Django, PostgreSQL, REST APIs. I&apos;ve
                shipped three projects from database schema to working UI. B.Tech IT,
                Class of 2029.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <div className="mb-8 flex items-center justify-center gap-2 text-sm text-muted-foreground lg:justify-start">
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                {siteConfig.location}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Button size="lg" asChild>
                  <Link href={siteConfig.resumePath} target="_blank" download>
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download Resume
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link
                    href={`https://github.com/${siteConfig.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    View GitHub
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Contact Me
                </Button>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3} direction="right" className="order-1 lg:order-2">
            <div className="relative mx-auto w-fit">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div
                  className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/15 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-2 shadow-sm">
                  <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-card to-muted sm:h-80 sm:w-80">
                    <div
                      className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-4xl font-bold text-white shadow-lg sm:h-40 sm:w-40 sm:text-5xl"
                      aria-label="Patrick Benero A"
                    >
                      PB
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"
              >
                <p className="text-2xl font-bold text-primary">3</p>
                <p className="text-xs text-muted-foreground">Django Projects</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -right-4 -top-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"
              >
                <p className="text-2xl font-bold text-primary">8.0</p>
                <p className="text-xs text-muted-foreground">CGPA</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex justify-center"
        >
          <button
            type="button"
            onClick={() =>
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
