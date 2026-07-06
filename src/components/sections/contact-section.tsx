"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { siteConfig } from "@/data/site-data";
import { copyToClipboard } from "@/lib/utils";
import {
  SectionHeading,
  ScrollReveal,
} from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(siteConfig.email);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      formState.subject || `Portfolio contact from ${formState.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-padding bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get in touch"
          description="Open to Python full-stack and backend internships. I usually reply within a day."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2" direction="left">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="mb-4 font-semibold text-foreground">Direct contact</h3>
                <div className="space-y-4">
                  <ContactItem icon={Mail} label="Email">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`Copy email ${siteConfig.email}`}
                    >
                      {siteConfig.email}
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                      ) : (
                        <Copy
                          className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </ContactItem>
                  <ContactItem icon={Phone} label="Phone">
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {siteConfig.phone}
                    </a>
                  </ContactItem>
                  <ContactItem icon={MapPin} label="Location">
                    <span className="text-sm text-muted-foreground">
                      {siteConfig.location}
                    </span>
                  </ContactItem>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={`https://linkedin.com/in/${siteConfig.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link
                    href={`https://github.com/${siteConfig.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={siteConfig.resumePath} target="_blank" download>
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Resume
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-3" direction="right">
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 sm:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    required
                    autoComplete="email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Python internship at..."
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                />
              </div>
              <div className="mt-5 space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the role and team..."
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                />
              </div>
              <Button type="submit" size="lg" className="mt-6 w-full sm:w-auto">
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" aria-hidden="true" />
                    Opening email client...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send message
                  </>
                )}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        {children}
      </div>
    </div>
  );
}
