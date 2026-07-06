import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site-data";
import type { GitHubRepo, GitHubStats } from "@/types";

export const revalidate = 3600;

interface RawGitHubRepo {
  fork: boolean;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

function buildHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

function mapRepo(repo: RawGitHubRepo): GitHubRepo {
  return {
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    language: repo.language,
    topics: repo.topics ?? [],
    updated_at: repo.updated_at,
  };
}

function sortRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return [...repos].sort((a, b) => {
    const aPython = a.language === "Python" ? 1 : 0;
    const bPython = b.language === "Python" ? 1 : 0;
    if (bPython !== aPython) return bPython - aPython;
    return b.stargazers_count - a.stargazers_count;
  });
}

export async function GET() {
  const username = siteConfig.github;

  try {
    const headers = buildHeaders();

    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
        headers,
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
        { next: { revalidate: 3600 }, headers }
      ),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      throw new Error("GitHub API request failed");
    }

    const user = await userRes.json();
    const allRepos: RawGitHubRepo[] = await reposRes.json();
    const ownRepos = allRepos.filter((repo) => !repo.fork).map(mapRepo);

    const repos = sortRepos(ownRepos).slice(0, 6);

    const languages: Record<string, number> = {};
    for (const repo of ownRepos) {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    }

    const payload: GitHubStats = {
      user: {
        avatar_url: user.avatar_url,
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
        bio: user.bio,
      },
      repos,
      languages,
    };

    return NextResponse.json(payload);
  } catch {
    const fallback: GitHubStats = {
      user: null,
      repos: [],
      languages: {},
    };
    return NextResponse.json(fallback);
  }
}
