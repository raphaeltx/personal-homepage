/**
 * Temporary UnderConstruction component that displays an ASCII art banner
 * and a message indicating that the feature is under construction.
 * @returns JSX.Element representing the Under Construction message.
 */
export default function UnderConstruction() {
  return (
    <div className="my-2 font-mono text-sm">
      <pre className="text-yellow-600 dark:text-yellow-400 text-xs mb-3 leading-tight">
        {`   _____                _                   _   _             
  / ____|              | |                 | | (_)            
 | |     ___  _ __  ___| |_ _ __ _   _  ___| |_ _  ___  _ __  
 | |    / _ \\| '_ \\/ __| __| '__| | | |/ __| __| |/ _ \\| '_ \\ 
 | |___| (_) | | | \\__ \\ |_| |  | |_| | (__| |_| | (_) | | | |
  \\_____\\___/|_| |_|___/\\__|_|   \\__,_|\\___|\\__|_|\\___/|_| |_|`}
      </pre>

      <div className="space-y-3 text-gray-600 dark:text-gray-400">
        <div>
          <span className="text-cyan-600 dark:text-cyan-400">$</span>{" "}
          <span className="text-red-600 dark:text-red-400">Error 503:</span>{" "}
          Sorry about that. It's unavailable right now.
        </div>

        <div className="ml-4 leading-relaxed">
          <span className="text-green-600 dark:text-green-400">//</span> This
          feature is currently being built...
          <br />
          <span className="text-green-600 dark:text-green-400">//</span> Check
          back soon! 🚧
        </div>
      </div>
    </div>
  );
}
