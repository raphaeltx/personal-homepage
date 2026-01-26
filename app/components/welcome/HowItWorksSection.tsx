/**
 * Props for HowItWorksSection component.
 */
interface HowItWorksSectionProps {
  steps: string[];
}

/**
 * HowItWorksSection component that displays a list of steps explaining
 * how something works.
 * @param steps - An array of strings representing the steps.
 * @returns JSX.Element representing the How It Works section.
 */
export default function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  return (
    <div>
      <span className="text-yellow-600 dark:text-yellow-400">
        📟 How it works:
      </span>
      <div className="ml-4 mt-2 space-y-2">
        {steps.map((step, index) => (
          <div key={index}>
            <span className="text-purple-600 dark:text-purple-400">•</span>{" "}
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
