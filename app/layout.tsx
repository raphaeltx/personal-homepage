import type { Metadata } from "next";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Raphael",
  description: "Personal page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
