"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

/**
 * Theme toggle component to switch between light and dark modes.
 * @returns JSX.Element The ThemeToggle component.
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <span
        className="cursor-pointer hover:opacity-70 transition-opacity mr-10"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun size={32} />
        ) : (
          <Moon size={32} />
        )}
      </span>
    </div>
  );
}
