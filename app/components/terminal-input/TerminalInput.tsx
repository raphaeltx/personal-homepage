import { useTerminalFocusContext } from "@/app/context/TerminalFocusContext";

/**
 * TerminalInput component props.
 */
export interface TerminalInputProps {
  value: string;
  isSubmitted?: boolean;
  onChange: (newValue: string) => void;
  onSubmit: () => void;
}

/**
 * TerminalInput component.
 * @returns JSX.Element The TerminalInput component.
 */
import { useEffect, type KeyboardEvent } from "react";

export default function TerminalInput({
  value,
  isSubmitted,
  onChange,
  onSubmit,
}: TerminalInputProps) {
  console.log("render TerminalInput");
  const { bump } = useTerminalFocusContext();

  useEffect(() => {
    bump();
  }, [bump]);

  return (
    <div className="text-green-500 font-mono">
      <span>raph:~$ </span>
      {isSubmitted && <span>{value}</span>}
      {!isSubmitted && (
        <input
          type="text"
          id="terminal-input"
          className="text-green-500 focus:outline-none"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              onSubmit();
            }
          }}
        />
      )}
    </div>
  );
}
