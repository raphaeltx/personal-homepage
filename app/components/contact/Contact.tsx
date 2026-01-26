/**
 * Contact component provides developer's contact information including email, LinkedIn, and GitHub.
 * @returns JSX.Element representing the Contact section.
 */
export default function Contact() {
  return (
    <div className="mt-1 space-y-1 font-mono text-sm">
      <div className="text-gray-600 dark:text-gray-400">
        <span className="text-green-600 dark:text-green-400">//</span> Get in
        touch:
      </div>
      <div>
        <span className="text-purple-600 dark:text-purple-400">► Email: </span>{" "}
        <a
          href="mailto:teixeira.e.a.raphael@gmail.com"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          teixeira.e.a.raphael@gmail.com
        </a>
      </div>
      <div>
        <span className="text-purple-600 dark:text-purple-400">
          ► Linkedin:{" "}
        </span>{" "}
        <a
          href="https://www.linkedin.com/in/raphael-teixeira-2a1012188/"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/raphael-teixeira
        </a>
      </div>
      <div>
        <span className="text-purple-600 dark:text-purple-400">► Github: </span>{" "}
        <a
          href="https://github.com/raphaeltx"
          className="text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/raphaeltx
        </a>
      </div>
    </div>
  );
}
