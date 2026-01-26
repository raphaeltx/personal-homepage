interface AsciiBannerProps {
  text: string;
}

/**
 * AsciiBanner component that displays ASCII art text in a styled preformatted block.
 * @param text - The ASCII art text to display.
 * @returns JSX.Element representing the ASCII banner.
 */
export default function AsciiBanner({ text }: AsciiBannerProps) {
  return (
    <pre className="text-cyan-600 dark:text-cyan-400 text-xs mb-3 leading-tight">
      {text}
    </pre>
  );
}
