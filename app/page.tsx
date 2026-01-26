import Terminal from "./components/terminal/Terminal";

/**
 * Home page component that renders the Terminal within a styled container.
 * @returns JSX.Element representing the home page.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <Terminal />
    </div>
  );
}
