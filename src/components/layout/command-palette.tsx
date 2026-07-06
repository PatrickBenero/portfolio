"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import {
  Search,
  Home,
  User,
  Code2,
  FolderOpen,
  Award,
  GraduationCap,
  Github,
  Map,
  Mail,
  FileDown,
  Moon,
  Sun,
  ArrowUp,
} from "lucide-react";
import { useTheme } from "next-themes";
import { navLinks, siteConfig } from "@/data/site-data";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const iconMap: Record<string, React.ElementType> = {
  Home,
  About: User,
  Skills: Code2,
  Projects: FolderOpen,
  Certifications: Award,
  Education: GraduationCap,
  GitHub: Github,
  Journey: Map,
  Contact: Mail,
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggle]);

  const navigate = (href: string) => {
    setOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const actions = [
    {
      label: "Download Resume",
      icon: FileDown,
      action: () => {
        window.open(siteConfig.resumePath, "_blank");
        setOpen(false);
      },
    },
    {
      label: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      icon: theme === "dark" ? Sun : Moon,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setOpen(false);
      },
    },
    {
      label: "Back to Top",
      icon: ArrowUp,
      action: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setOpen(false);
      },
    },
    {
      label: "View GitHub",
      icon: Github,
      action: () => {
        window.open(`https://github.com/${siteConfig.github}`, "_blank");
        setOpen(false);
      },
    },
  ];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="overflow-hidden p-0 sm:max-w-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <div className="flex items-center border-b border-border/50 px-3">
            <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Search sections, actions..."
              className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
            <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-border/50 bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              ESC
            </kbd>
          </div>
          <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>
            <Command.Group heading="Navigation">
              {navLinks.map((link) => {
                const Icon = iconMap[link.label] || Home;
                return (
                  <Command.Item
                    key={link.href}
                    onSelect={() => navigate(link.href)}
                    className="relative flex cursor-pointer select-none items-center gap-3 rounded-xl px-3 py-2.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground"
                  >
                    <Icon className="h-4 w-4 text-muted-foreground" />
                    {link.label}
                  </Command.Item>
                );
              })}
            </Command.Group>
            <Command.Group heading="Actions">
              {actions.map((action) => (
                <Command.Item
                  key={action.label}
                  onSelect={action.action}
                  className="relative flex cursor-pointer select-none items-center gap-3 rounded-xl px-3 py-2.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground"
                >
                  <action.icon className="h-4 w-4 text-muted-foreground" />
                  {action.label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
          <div className="border-t border-border/50 px-4 py-2 text-xs text-muted-foreground">
            <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span>
                <kbd className="rounded border px-1">⌘K</kbd> palette
              </span>
              <span>
                <kbd className="rounded border px-1">1–9</kbd> jump to section
              </span>
              <span>
                <kbd className="rounded border px-1">⌘⇧R</kbd> resume
              </span>
            </span>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
