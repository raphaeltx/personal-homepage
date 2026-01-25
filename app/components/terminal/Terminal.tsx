"use client";

import { useState } from "react";
import TerminalInput from "../terminal-input/TerminalInput";

/**
 * Terminal input data interface.
 */
interface TerminalInputData {
  value: string;
  isSubmitted: boolean;
  output?: string;
}

/**
 * Terminal component.
 * @returns JSX.Element The Terminal component.
 */
export default function Terminal() {
  const [inputList, setInputList] = useState<TerminalInputData[]>([
    { value: "", isSubmitted: false },
  ]);

  const handleSubmit = (input: TerminalInputData) => {
    setInputList((prev) => {
      const newList = [
        ...prev.map((item) =>
          item === input ? { ...item, isSubmitted: true } : item,
        ),
        {
          value: "",
          isSubmitted: false,
        },
      ];
      return newList;
    });
  };

  return (
    <div className="p-5">
      {inputList.map((input, index) => (
        <TerminalInput
          key={index}
          value={input.value}
          isSubmitted={input.isSubmitted}
          onChange={(newValue) => {
            const newInputList = [...inputList];
            newInputList[index].value = newValue;
            setInputList(newInputList);
          }}
          onSubmit={() => handleSubmit(input)}
        />
      ))}
    </div>
  );
}
