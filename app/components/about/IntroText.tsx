/**
 * IntroText component provides an introduction about the developer in a code-like format.
 * @returns JSX.Element representing the introductory text.
 */
export default function IntroText() {
  return (
    <div className="mb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
      <span className="text-green-600 dark:text-green-400">//</span> Hey! I'm
      Raphael. A fullstack dev from Brasília, Brazil.
      <br />
      <span className="text-green-600 dark:text-green-400">//</span> I love
      building stuff with React, Angular, Typescript, and DevOps tools
      <br />
      <span className="text-green-600 dark:text-green-400">//</span> that
      involves solving problems (or debugging why they don't work).
      <br />
      <span className="text-green-600 dark:text-green-400">//</span> Here is a
      little about me in code:
    </div>
  );
}
