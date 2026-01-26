import type { Metadata } from "next";
import { ThemeProvider } from "@/app/components/theme-provider/ThemeProvider";
import "@/assets/styles/globals.css";
import Navbar from "./components/navbar/Navbar";
import MainWrapper from "./components/main-wrapper/MainWrapper";
import { TerminalFocusProvider } from "./context/TerminalFocusContext";

export const metadata: Metadata = {
  title: "Raphael",
  description: "Personal page",
};

/**
 * RootLayout component that wraps the entire application with HTML structure,
 * theme provider, navbar, and terminal focus context.
 * @param children - The child components to be rendered within the layout.
 * @returns JSX.Element representing the root layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <TerminalFocusProvider>
            <MainWrapper>{children}</MainWrapper>
          </TerminalFocusProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
