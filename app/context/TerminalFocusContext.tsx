"use client";

import { createContext, useCallback, useContext, useState } from "react";

/**
 * Creates a context for terminal focus management.
 */
const TerminalFocusContext = createContext({
  version: 0,
  bump: () => {},
});

/**
 * TerminalFocusProvider component.
 * @returns JSX.Element The TerminalFocusProvider component.
 */
export function TerminalFocusProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [version, setVersion] = useState(0);
  const bump = useCallback(() => {
    setVersion((v) => v + 1);
  }, []);

  return (
    <TerminalFocusContext.Provider value={{ version, bump }}>
      {children}
    </TerminalFocusContext.Provider>
  );
}

export const useTerminalFocusContext = () => useContext(TerminalFocusContext);
