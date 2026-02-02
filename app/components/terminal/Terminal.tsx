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
import Skills from "../skills/Skills";
import OutputWrapper from "../output-wrapper/OutputWrapper";

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
      case "welcome":
        setInputList((prev) => {
          const newList = [
            ...prev.map((item) =>
              item === input
                ? { ...item, isSubmitted: true, output: <Welcome /> }
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
                    output: (
                      <OutputWrapper>
                        <About />
                      </OutputWrapper>
                    ),
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
                    output: (
                      <OutputWrapper>
                        <Skills />
                      </OutputWrapper>
                    ),
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
                    output: (
                      <OutputWrapper>
                        <UnderConstruction feature="GitHub integration" />
                      </OutputWrapper>
                    ),
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
                    output: (
                      <OutputWrapper>
                        <Contact />
                      </OutputWrapper>
                    ),
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
    <div className="flex items-start gap-8 pt-5 pb-5 pl-20 pr-20">
      {/* Terminal Section */}
      <div className="flex-1">
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

      {/* Image Section
      <div className="flex-shrink-0 w-64 h-64">
        <img
          src="/placeholder-image.jpg"
          alt="Terminal companion image"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div> */}
    </div>
  );
}
