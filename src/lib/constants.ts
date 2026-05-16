export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
  TIMEOUT: 10000,
  HEADERS: {
    "Content-Type": "application/json",
  },
};

export const QUERY_KEYS = {
  USER: "user",
  POSTS: "posts",
  // Add more query keys as needed
} as const;

export const LOCAL_STORAGE_KEYS = {
  THEME: "theme",
  TOKEN: "token",
} as const;

export const ENDPOINTS = {
  AUTH: {
    login: "/auth/login",
    register: "/auth/register",
    logout: "/auth/logout",
  },
  USER: {
    me: "/users/me",
  },
} as const;
