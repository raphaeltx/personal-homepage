"use client";

import { useTerminalFocusContext } from "@/app/context/TerminalFocusContext";
import React, { useEffect, useRef } from "react";

/**
 * MainWrapper component.
 * @returns JSX.Element The MainWrapper component.
 */
export default function MainWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { version } = useTerminalFocusContext();
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    inputRef.current = document.getElementById(
      "terminal-input",
    ) as HTMLDivElement;

    console.log("Input Ref:", inputRef.current);

    handleMainClick();
  }, [version]);

  const handleMainClick = () => {
    console.log("Main area clicked");
    inputRef.current?.focus();
  };

  return <main onClick={handleMainClick}>{children}</main>;
}
