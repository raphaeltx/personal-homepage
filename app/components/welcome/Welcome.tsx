import AsciiBanner from "../about/AsciiBanner";
import {
  WELCOME_ASCII,
  HOW_IT_WORKS_STEPS,
  STARTER_COMMANDS,
} from "@/app/constants/welcomeData";
import WelcomeGreeting from "./WelcomeGreeting";
import HowItWorksSection from "./HowItWorksSection";
import BeginnerGuideSection from "./BeginnerGuideSection";
import CallToAction from "./CallToAction";

/**
 * Welcome component that displays the welcome message, ASCII banner,
 * how it works section, beginner guide, and call to action.
 * @returns JSX.Element representing the Welcome section.
 */
export default function Welcome() {
  return (
    <div className="my-2 font-mono text-sm">
      <AsciiBanner text={WELCOME_ASCII} />

      <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
        <WelcomeGreeting />
        <HowItWorksSection steps={HOW_IT_WORKS_STEPS} />
        <BeginnerGuideSection commands={STARTER_COMMANDS} />
        <CallToAction />
      </div>
    </div>
  );
}
