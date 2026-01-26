/**
 * WelcomeGreeting component that displays a greeting message.
 * @returns JSX.Element representing the welcome greeting.
 */
export default function WelcomeGreeting() {
  return (
    <div>
      <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
        Hey there! 👋
      </span>
      <br />
      Welcome to my interactive terminal-style personal page.
    </div>
  );
}
