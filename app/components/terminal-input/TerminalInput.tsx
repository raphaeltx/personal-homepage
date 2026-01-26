"use client";

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
  const { bump } = useTerminalFocusContext();

  useEffect(() => {
    bump();
  }, [bump]);

  return (
    <div className="font-mono">
      <span className="text-green-600 dark:text-green-500">raph:~$</span>{" "}
      {isSubmitted && <span className="text-gray-700 dark:text-gray-300">{value}</span>}
      {!isSubmitted && (
        <input
          type="text"
          id="terminal-input"
          className="focus:outline-none bg-transparent border-none caret-black dark:caret-white text-gray-900 dark:text-gray-100"
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
