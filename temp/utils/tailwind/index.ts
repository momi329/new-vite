import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind ClassNames
export type { ClassValue } from "clsx";
export function cN(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
