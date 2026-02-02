/**
 * Help component.
 * @returns JSX.Element The Help component.
 */
export default function Help() {
  const commands = [
    { name: "help", description: "Display available commands" },
    { name: "about", description: "Learn more about me" },
    { name: "skills", description: "View my technical skills" },
    { name: "github", description: "View my GitHub source code repository" },
    { name: "clear or cls", description: "Clear the terminal screen" },
    { name: "contact", description: "Get my contact information" },
  ];

  return (
    <div className="my-2 font-mono text-sm">
      {commands.map((cmd) => (
        <div key={cmd.name} className="py-0.5">
          <span className="text-green-500">❯</span>{" "}
          <span className="text-cyan-400">{cmd.name}</span>
          <span className="text-gray-400 ml-8">// {cmd.description}</span>
        </div>
      ))}
    </div>
  );
}
