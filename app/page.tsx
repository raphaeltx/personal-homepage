import Terminal from "./components/terminal/Terminal";

/**
 * Home page component.
 * @returns JSX.Element The Home component.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white">
      <Terminal />
    </div>
  );
}
