"use client";

import { useState, useEffect } from 'react';

export interface GithubStats {
  publicRepos: number;
  totalRepos: number;
  followers: number;
  avatarUrl: string;
  loading: boolean;
  error: string | null;
}

export const useGithubStats = (username: string): GithubStats => {
  const [stats, setStats] = useState<GithubStats>({
    publicRepos: 18,
    totalRepos: 54,
    followers: 0,
    avatarUrl: '',
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchUserStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Failed to fetch GitHub profile');
        const data = await response.json();
        
        setStats({
          publicRepos: data.public_repos || 18,
          totalRepos: 54, // User's actual total count including private repos
          followers: data.followers || 0,
          avatarUrl: data.avatar_url || '',
          loading: false,
          error: null,
        });
      } catch (err) {
        setStats({
          publicRepos: 18,
          totalRepos: 54,
          followers: 0,
          avatarUrl: '',
          loading: false,
          error: err instanceof Error ? err.message : 'Error fetching stats',
        });
      }
    };

    fetchUserStats();
  }, [username]);

  return stats;
};