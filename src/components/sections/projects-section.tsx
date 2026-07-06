"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Search,
  ChevronDown,
  ChevronUp,
  Layers,
  Lightbulb,
  AlertTriangle,
  GitBranch,
} from "lucide-react";
import { projects } from "@/data/site-data";
import {
  SectionHeading,
  ScrollReveal,
} from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const allTags = [...new Set(projects.flatMap((p) => p.tags))];

export function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesFilter = filter === "All" || project.tags.includes(filter);
      const query = search.toLowerCase();
      const matchesSearch =
        search === "" ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((t) => t.toLowerCase().includes(query));
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Projects"
          title="Three Django apps, built end to end"
          description="Each one started with a PostgreSQL or SQLite schema and ended with a working interface."
        />

        <ScrollReveal className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative max-w-sm flex-1">
            <Search
              className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder="Search by name or tech..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
              aria-label="Search projects"
            />
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            <FilterButton active={filter === "All"} onClick={() => setFilter("All")}>
              All
            </FilterButton>
            {allTags.map((tag) => (
              <FilterButton
                key={tag}
                active={filter === tag}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </FilterButton>
            ))}
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isExpanded = expandedId === project.id;
              const detailsId = `project-details-${project.id}`;

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="relative aspect-video overflow-hidden lg:aspect-auto lg:min-h-[320px]">
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br",
                          project.gradient
                        )}
                        aria-hidden="true"
                      />
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-col p-6 sm:p-8">
                      <div className="mb-2 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="mb-2 text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                      <p className="mb-1 text-sm font-medium text-primary">
                        {project.tagline}
                      </p>
                      <p className="mb-4 leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-lg border border-border bg-background px-2.5 py-1 text-xs text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-wrap gap-3">
                        <Button size="sm" asChild>
                          <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" aria-hidden="true" />
                            GitHub
                          </Link>
                        </Button>
                        {project.liveUrl ? (
                          <Button variant="outline" size="sm" asChild>
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-4 w-4" aria-hidden="true" />
                              Live Demo
                            </Link>
                          </Button>
                        ) : (
                          <Button variant="outline" size="sm" disabled>
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            Demo coming soon
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          aria-expanded={isExpanded}
                          aria-controls={detailsId}
                          onClick={() =>
                            setExpandedId(isExpanded ? null : project.id)
                          }
                        >
                          {isExpanded ? (
                            <>
                              Less detail <ChevronUp className="h-4 w-4" />
                            </>
                          ) : (
                            <>
                              Full breakdown <ChevronDown className="h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        id={detailsId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-border"
                      >
                        <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-3">
                          <DetailBlock
                            icon={AlertTriangle}
                            title="Problem"
                            content={project.problem}
                          />
                          <DetailBlock
                            icon={Lightbulb}
                            title="Solution"
                            content={project.solution}
                          />
                          <DetailBlock
                            icon={Layers}
                            title="Architecture"
                            content={project.architecture}
                          />

                          <ListBlock
                            title="Engineering Decisions"
                            items={project.engineeringDecisions}
                            dotClass="bg-accent"
                          />
                          <ListBlock
                            title="Key Features"
                            items={project.features}
                            dotClass="bg-primary"
                          />
                          <ListBlock
                            title="Challenges"
                            items={project.challenges}
                            dotClass="bg-orange-400"
                          />

                          <div className="sm:col-span-2 lg:col-span-3">
                            <ListBlock
                              title="Lessons Learned"
                              items={project.lessons}
                              dotClass="bg-muted-foreground"
                              columns
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <p className="py-12 text-center text-muted-foreground" role="status">
              No projects match that search. Try a different filter.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
        active
          ? "bg-primary text-primary-foreground shadow-sm"
          : "border border-border bg-background text-foreground hover:border-primary/40"
      )}
    >
      {children}
    </button>
  );
}

function DetailBlock({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType;
  title: string;
  content: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-background p-4">
      <div className="mb-2 flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
        <h4 className="text-sm font-semibold text-foreground">{title}</h4>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{content}</p>
    </div>
  );
}

function ListBlock({
  title,
  items,
  dotClass,
  columns = false,
}: {
  title: string;
  items: string[];
  dotClass: string;
  columns?: boolean;
}) {
  return (
    <div className={columns ? "" : ""}>
      <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
        {title === "Engineering Decisions" && (
          <GitBranch className="h-4 w-4 text-accent" aria-hidden="true" />
        )}
        {title}
      </h4>
      <ul
        className={cn(
          "space-y-2",
          columns && "grid gap-2 sm:grid-cols-3 sm:space-y-0"
        )}
      >
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
          >
            <span
              className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full", dotClass)}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
