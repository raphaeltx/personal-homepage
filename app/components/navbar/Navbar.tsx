import { ThemeToggle } from "../theme-toggle/ThemeToggle";

export default function Navbar() {
  return (
    <div id="navbar" className="p-3 w-full flex dark:bg-zinc-950 justify-end">
      <ThemeToggle />
    </div>
  );
}
