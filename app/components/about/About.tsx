import Contact from "../contact/Contact";
import {
  calculateAge,
  calculateExperience,
} from "@/app/utils/dateCalculations.util";
import {
  ASCII_BANNER,
  BIRTH_DATE,
  CAREER_START_DATE,
  GAP_START_DATE,
  GAP_END_DATE,
  DEVELOPER_INFO,
} from "@/app/constants/developerData";
import AsciiBanner from "./AsciiBanner";
import IntroText from "./IntroText";
import CodeProperty from "./CodeProperty";
import CodeArrayProperty from "./CodeArrayProperty";
import EducationSection from "./EducationSection";
import FooterComments from "./FooterComments";

/**
 * About component displays developer information including age, experience, education, roles, and technology stack.
 * @returns JSX.Element representing the About section.
 */
export default function About() {
  const age = calculateAge(BIRTH_DATE);
  const experienceYears = calculateExperience(
    CAREER_START_DATE,
    GAP_START_DATE,
    GAP_END_DATE,
  );

  return (
    <div className="my-2 font-mono text-sm">
      <AsciiBanner text={ASCII_BANNER} />
      <IntroText />

      <div className="space-y-2">
        <div>
          <span className="text-yellow-600 dark:text-yellow-400">const</span>{" "}
          <span className="text-blue-600 dark:text-blue-400">developer</span> ={" "}
          <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
        </div>

        <CodeProperty propertyName="name" value={DEVELOPER_INFO.name} />
        <CodeProperty propertyName="age" value={age} />
        <CodeProperty propertyName="location" value={DEVELOPER_INFO.location} />
        <CodeArrayProperty
          propertyName="languages"
          items={DEVELOPER_INFO.languages}
        />
        <CodeProperty
          propertyName="experience"
          value={`${experienceYears}+ years`}
        />

        <EducationSection
          education={DEVELOPER_INFO.education}
          certificateUrl={DEVELOPER_INFO.certificateUrl}
          certificateName={DEVELOPER_INFO.certificateName}
        />

        <CodeArrayProperty propertyName="roles" items={DEVELOPER_INFO.roles} />

        <div className="ml-4">
          <span className="text-purple-600 dark:text-purple-400">stack:</span>{" "}
          <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
        </div>
        <CodeArrayProperty
          propertyName="languages"
          items={DEVELOPER_INFO.stack.languages}
          indent={8}
        />
        <CodeArrayProperty
          propertyName="frameworks"
          items={DEVELOPER_INFO.stack.frameworks}
          indent={8}
        />
        <CodeArrayProperty
          propertyName="runtime"
          items={DEVELOPER_INFO.stack.runtime}
          indent={8}
        />
        <CodeArrayProperty
          propertyName="versionControl"
          items={DEVELOPER_INFO.stack.versionControl}
          indent={8}
        />
        <CodeArrayProperty
          propertyName="ides"
          items={DEVELOPER_INFO.stack.ides}
          indent={8}
        />
        <CodeArrayProperty
          propertyName="testing"
          items={DEVELOPER_INFO.stack.testing}
          indent={8}
        />
        <CodeArrayProperty
          propertyName="devops"
          items={DEVELOPER_INFO.stack.devops}
          indent={8}
        />
        <div className="ml-4">
          <span className="text-gray-600 dark:text-gray-400">{"}"}</span>,
        </div>

        <div className="text-gray-600 dark:text-gray-400">{"}"}</div>

        <Contact />
        <FooterComments />
      </div>
    </div>
  );
}
