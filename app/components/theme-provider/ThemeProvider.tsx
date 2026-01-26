"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes";

/**
 * Theme Provider component to manage application themes.
 * @param props - Props for the ThemeProvider component.
 * @returns The ThemeProvider component wrapping its children.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
