"use client";

import { useEffect, useState } from "react";
import type { GitHubStats } from "@/types";

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data: { count: number }) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return count;
}

export function useGitHubStats() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load GitHub data");
        return res.json();
      })
      .then((data: GitHubStats) => {
        setStats(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load GitHub stats.");
        setLoading(false);
      });
  }, []);

  return { stats, loading, error };
}
