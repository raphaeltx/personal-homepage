/**
 * Component to display a message when a command is not found.
 * @param command The command that was not found.
 * @returns JSX.Element The CommandNotFound component.
 */
export default function CommandNotFound({ command }: { command: string }) {
  return (
    <div className="my-2 font-mono text-sm">
      <div className="text-red-600 dark:text-red-400">
        <span className="font-bold">bash:</span> {command}: command not found
      </div>
      <div className="text-amber-600 dark:text-yellow-500 mt-1">
        💡 Ops! This command does not exist. Try typing <span className="text-cyan-600 dark:text-cyan-400 font-semibold">help</span> to see available commands
      </div>
    </div>
  );
}
