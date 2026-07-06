"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/site-data";
import { useVisitorCount } from "@/hooks/use-api-data";

const iconComponents = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const visitorCount = useVisitorCount();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                PB
              </div>
              <span className="font-semibold text-foreground">{siteConfig.name}</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Python full-stack developer — Django, PostgreSQL, REST APIs. Open to
              backend and full-stack internships.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h3>
            <nav aria-label="Social links" className="flex flex-col gap-2">
              {socialLinks.map((link) => {
                const Icon = iconComponents[link.icon];
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick links
            </h3>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link
                href={siteConfig.resumePath}
                target="_blank"
                download
                className="hover:text-primary"
              >
                Download resume
              </Link>
              <Link href="#projects" className="hover:text-primary">
                View projects
              </Link>
              <Link href="#contact" className="hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {siteConfig.name}. Built with Next.js and TypeScript.
          </p>
          {visitorCount !== null && (
            <p className="text-xs text-muted-foreground" aria-live="polite">
              {visitorCount.toLocaleString()} site visits
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
