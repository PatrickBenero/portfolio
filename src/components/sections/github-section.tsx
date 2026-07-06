"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitFork, Pin, Star } from "lucide-react";
import { siteConfig, recommendedPinnedRepos } from "@/data/site-data";
import { useGitHubStats } from "@/hooks/use-api-data";
import {
  SectionHeading,
  ScrollReveal,
  StaggerReveal,
  StaggerItem,
} from "@/components/animations/scroll-reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ACCENT = "ef4444";

const languageColors: Record<string, string> = {
  Python: "bg-[#3572A5]",
  JavaScript: "bg-[#f1e05a]",
  TypeScript: "bg-[#3178c6]",
  HTML: "bg-[#e34c26]",
  CSS: "bg-[#563d7c]",
  C: "bg-[#555555]",
  Shell: "bg-[#89e051]",
};

function getLanguageColor(lang: string): string {
  return languageColors[lang] ?? "bg-gray-400";
}

export function GitHubSection() {
  const { stats, loading, error } = useGitHubStats();
  const username = siteConfig.github;

  const totalLanguages = stats?.languages
    ? Object.values(stats.languages).reduce((a, b) => a + b, 0)
    : 0;

  const sortedLanguages = stats?.languages
    ? Object.entries(stats.languages).sort(([, a], [, b]) => b - a)
    : [];

  return (
    <section id="github" aria-labelledby="github-heading" className="section-padding bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="GitHub"
          title="Where my code lives"
          description="Python projects on GitHub — version controlled, incrementally built, ready for review."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="border-b border-border px-4 py-3">
                <h3 className="font-semibold text-foreground">Contribution Activity</h3>
              </div>
              <div className="overflow-x-auto p-4">
                <Image
                  src={`https://ghchart.rshah.org/${username}`}
                  alt={`${username} GitHub contribution chart`}
                  width={800}
                  height={120}
                  className="w-full min-w-[600px]"
                  loading="lazy"
                  unoptimized
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              {loading ? (
                <GitHubSkeleton />
              ) : stats?.user ? (
                <>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <div className="mb-4 flex items-center gap-3">
                      <Image
                        src={stats.user.avatar_url}
                        alt={`${username} GitHub avatar`}
                        width={48}
                        height={48}
                        className="rounded-full ring-2 ring-border"
                        loading="lazy"
                      />
                      <div>
                        <p className="font-semibold text-foreground">@{username}</p>
                        {stats.user.bio && (
                          <p className="line-clamp-2 text-xs text-muted-foreground">
                            {stats.user.bio}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <Stat label="Repos" value={stats.user.public_repos} />
                      <Stat label="Followers" value={stats.user.followers} />
                      <Stat label="Following" value={stats.user.following} />
                    </div>
                  </div>

                  {totalLanguages > 0 && (
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                      <h4 className="mb-4 text-sm font-semibold text-foreground">
                        Repository Languages
                      </h4>
                      <div
                        className="mb-3 flex h-2.5 overflow-hidden rounded-full bg-muted"
                        role="img"
                        aria-label="Language distribution across repositories"
                      >
                        {sortedLanguages.map(([lang, count]) => (
                          <div
                            key={lang}
                            className={cn("h-full", getLanguageColor(lang))}
                            style={{ width: `${(count / totalLanguages) * 100}%` }}
                            title={`${lang}: ${Math.round((count / totalLanguages) * 100)}%`}
                          />
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {sortedLanguages.map(([lang, count]) => (
                          <div key={lang} className="flex items-center gap-1.5 text-xs">
                            <span
                              className={cn(
                                "h-2 w-2 rounded-full",
                                getLanguageColor(lang)
                              )}
                              aria-hidden="true"
                            />
                            <span className="text-foreground">{lang}</span>
                            <span className="text-muted-foreground">
                              {Math.round((count / totalLanguages) * 100)}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-2xl border border-border bg-card p-6 text-center text-sm text-muted-foreground">
                  {error ?? "GitHub data unavailable."}{" "}
                  <Link
                    href={`https://github.com/${username}`}
                    className="text-primary underline-offset-2 hover:underline"
                  >
                    View profile
                  </Link>
                </div>
              )}

              <Button variant="outline" className="w-full" asChild>
                <Link
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  github.com/{username}
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-foreground">Top Repositories</h3>
            <p className="hidden text-xs text-muted-foreground sm:block">
              Pin these on your profile: {recommendedPinnedRepos.join(", ")}
            </p>
          </div>

          {loading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-36 animate-pulse rounded-2xl bg-muted" />
              ))}
            </div>
          ) : stats?.repos && stats.repos.length > 0 ? (
            <StaggerReveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stats.repos.slice(0, 6).map((repo) => (
                <StaggerItem key={repo.name}>
                  <Link
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <h4 className="font-semibold text-foreground group-hover:text-primary">
                        {repo.name}
                      </h4>
                      {repo.language === "Python" && (
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                          Python
                        </span>
                      )}
                    </div>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {repo.description ?? "No description yet."}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      {repo.language && (
                        <span className="flex items-center gap-1.5">
                          <span
                            className={cn(
                              "h-2 w-2 rounded-full",
                              getLanguageColor(repo.language)
                            )}
                            aria-hidden="true"
                          />
                          {repo.language}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" aria-hidden="true" />
                        {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="h-3 w-3" aria-hidden="true" />
                        {repo.forks_count}
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerReveal>
          ) : (
            <div className="rounded-2xl border border-dashed border-border bg-card p-8 text-center">
              <Pin className="mx-auto mb-3 h-8 w-8 text-muted-foreground" aria-hidden="true" />
              <p className="mb-2 text-sm font-medium text-foreground">
                No repositories found yet
              </p>
              <p className="text-sm text-muted-foreground">
                Push your Django projects to GitHub and pin:{" "}
                <span className="font-mono text-xs">
                  {recommendedPinnedRepos.join(", ")}
                </span>
              </p>
            </div>
          )}
        </ScrollReveal>

        <ScrollReveal className="mt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Image
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&hide_border=true&bg_color=f8fafc&title_color=111827&icon_color=${ACCENT}&text_color=6b7280`}
              alt="GitHub contribution statistics"
              width={400}
              height={200}
              className="w-full rounded-2xl border border-border bg-card"
              loading="lazy"
              unoptimized
            />
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&hide_border=true&background=f8fafc&ring=${ACCENT}&fire=${ACCENT}&currStreakLabel=6b7280&sideLabels=6b7280&dates=6b7280&sideNums=6b7280&currStreakNum=${ACCENT}`}
              alt="GitHub contribution streak"
              width={400}
              height={200}
              className="w-full rounded-2xl border border-border bg-card"
              loading="lazy"
              unoptimized
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <p className="text-xl font-bold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function GitHubSkeleton() {
  return (
    <div className="space-y-4" aria-hidden="true">
      {[1, 2].map((i) => (
        <div key={i} className="h-28 animate-pulse rounded-2xl bg-muted" />
      ))}
    </div>
  );
}
