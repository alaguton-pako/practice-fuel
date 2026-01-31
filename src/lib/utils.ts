import type { PracticeStatus } from "./types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPracticeStatus = (rate: number): PracticeStatus => {
  if (rate >= 20) return "high";
  if (rate < 10) return "at-risk";
  return "neutral";
};

export const formatPercent = (value: number): string => {
  return `${value.toFixed(1)}%`;
};
