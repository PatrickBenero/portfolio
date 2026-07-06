"use client";

import { useCallback } from "react";
import { navLinks, siteConfig } from "@/data/site-data";
import { useKeyboardShortcuts } from "@/hooks/use-scroll-progress";

export function KeyboardShortcuts() {
  const scrollTo = useCallback((href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openCommandPalette = useCallback(() => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
    );
  }, []);

  useKeyboardShortcuts({
    "mod+k": openCommandPalette,
    "mod+shift+c": () => scrollTo("#contact"),
    "mod+shift+p": () => scrollTo("#projects"),
    "mod+shift+g": () => scrollTo("#github"),
    "mod+shift+h": () => scrollTo("#hero"),
    "mod+shift+r": () => window.open(siteConfig.resumePath, "_blank"),
    home: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    end: () =>
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      }),
    ...Object.fromEntries(
      navLinks.slice(0, 9).map((link, i) => [
        String(i + 1),
        () => scrollTo(link.href),
      ])
    ),
  });

  return null;
}
