/**
 * Command interface representing a terminal command and its description.
 */
interface Command {
  command: string;
  description: string;
}

/**
 * Props for the BeginnerGuideSection component.
 */
interface BeginnerGuideSectionProps {
  commands: Command[];
}

/**
 * BeginnerGuideSection component that provides a beginner-friendly guide
 * to using terminal commands.
 * @param param0 Props containing an array of commands with descriptions.
 * @returns JSX.Element representing the Beginner Guide section.
 */
export default function BeginnerGuideSection({
  commands,
}: BeginnerGuideSectionProps) {
  return (
    <div>
      <span className="text-green-600 dark:text-green-400">
        💡 New to terminals?
      </span>
      <div className="ml-4 mt-2">
        No worries! Think of this as a cool way to know more about me.
        <br />
        Just type these commands to get started:
        <div className="mt-2 space-y-1">
          {commands.map(({ command, description }) => (
            <div key={command}>
              <span className="text-cyan-600 dark:text-cyan-400">→</span>{" "}
              <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded font-semibold">
                {command}
              </span>{" "}
              - {description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
