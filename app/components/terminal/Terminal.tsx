"use client";

import React, { useState } from "react";
import TerminalInput from "../terminal-input/TerminalInput";
import Help from "../help/Help";
import CommandNotFound from "../command-not-found/CommandNotFound";
import { useTerminalFocusContext } from "@/app/context/TerminalFocusContext";
import About from "../about/About";
import Contact from "../contact/Contact";
import UnderConstruction from "../under-construction/UnderConstruction";
import Welcome from "../welcome/Welcome";
import { Skills } from "../skills/Skills";

/**
 * Terminal input data interface.
 */
interface TerminalInputData {
  value: string;
  isSubmitted: boolean;
  output?: React.ReactNode;
}

/**
 * Terminal component.
 * @returns JSX.Element The Terminal component.
 */
export default function Terminal() {
  const { bump } = useTerminalFocusContext();
  const [inputList, setInputList] = useState<TerminalInputData[]>([
    { value: "welcome", isSubmitted: true, output: <Welcome /> },
    { value: "", isSubmitted: false },
  ]);

  const handleSubmit = (input: TerminalInputData) => {
    switch (input.value.toLowerCase()) {
      case "":
        return;
      case "cls":
      case "clear":
        setInputList([{ value: "", isSubmitted: false }]);
        bump();
        return;
      case "help":
        setInputList((prev) => {
          const newList = [
            ...prev.map((item) =>
              item === input
                ? { ...item, isSubmitted: true, output: <Help /> }
                : item,
            ),
            {
              value: "",
              isSubmitted: false,
            },
          ];
          return newList;
        });
        bump();
        return;
      case "about":
        setInputList((prev) => {
          const newList = [
            ...prev.map((item) =>
              item === input
                ? {
                    ...item,
                    isSubmitted: true,
                    output: <About />,
                  }
                : item,
            ),
            {
              value: "",
              isSubmitted: false,
            },
          ];
          return newList;
        });
        bump();
        return;
      case "skills":
        setInputList((prev) => {
          const newList = [
            ...prev.map((item) =>
              item === input
                ? {
                    ...item,
                    isSubmitted: true,
                    output: <Skills />,
                  }
                : item,
            ),
            {
              value: "",
              isSubmitted: false,
            },
          ];
          return newList;
        });
        bump();
        return;
      case "github":
        setInputList((prev) => {
          const newList = [
            ...prev.map((item) =>
              item === input
                ? {
                    ...item,
                    isSubmitted: true,
                    output: <UnderConstruction />,
                  }
                : item,
            ),
            {
              value: "",
              isSubmitted: false,
            },
          ];
          return newList;
        });
        bump();
        return;
      case "contact":
        setInputList((prev) => {
          const newList = [
            ...prev.map((item) =>
              item === input
                ? {
                    ...item,
                    isSubmitted: true,
                    output: <Contact />,
                  }
                : item,
            ),
            {
              value: "",
              isSubmitted: false,
            },
          ];
          return newList;
        });
        bump();
        return;
      default:
        setInputList((prev) => {
          const newList = [
            ...prev.map((item) =>
              item === input
                ? {
                    ...item,
                    isSubmitted: true,
                    output: <CommandNotFound command={input.value} />,
                  }
                : item,
            ),
            {
              value: "",
              isSubmitted: false,
            },
          ];
          return newList;
        });
        bump();
        return;
    }
  };

  return (
    <div className="p-5">
      {inputList.map((input, index) => (
        <React.Fragment key={index}>
          <TerminalInput
            value={input.value}
            isSubmitted={input.isSubmitted}
            onChange={(newValue) => {
              const newInputList = [...inputList];
              newInputList[index].value = newValue;
              setInputList(newInputList);
            }}
            onSubmit={() => handleSubmit(input)}
          />
          {input.output && <div className="mb-1">{input.output}</div>}
        </React.Fragment>
      ))}
    </div>
  );
}
