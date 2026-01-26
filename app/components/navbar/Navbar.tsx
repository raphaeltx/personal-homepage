import { ThemeToggle } from "../theme-toggle/ThemeToggle";

/**
 * Navbar component that contains the theme toggle button.
 * @returns JSX.Element representing the navigation bar.
 */
export default function Navbar() {
  return (
    <div id="navbar" className="p-3 w-full flex dark:bg-zinc-950 justify-end">
      <ThemeToggle />
    </div>
  );
}
