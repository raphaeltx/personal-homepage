/**
 * EducationSection component displays a list of educational qualifications
 * and a link to a certificate in a formatted manner.
 */
interface EducationSectionProps {
  education: string[];
  certificateUrl: string;
  certificateName: string;
}

/**
 * Renders the EducationSection component.
 * @param education - Array of educational qualifications.
 * @param certificateUrl - URL to the certificate.
 * @param certificateName - Name of the certificate.
 * @returns JSX.Element representing the EducationSection.
 */
export default function EducationSection({
  education,
  certificateUrl,
  certificateName,
}: EducationSectionProps) {
  return (
    <>
      <div className="ml-4">
        <span className="text-purple-600 dark:text-purple-400">education:</span>{" "}
        <span className="text-gray-600 dark:text-gray-400">[</span>
      </div>

      {education.map((item, index) => (
        <div key={index} className="ml-8">
          <span className="text-green-600 dark:text-green-400">"{item}"</span>,
        </div>
      ))}

      <div className="ml-8">
        <a
          href={certificateUrl}
          className="text-blue-600 dark:text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          "{certificateName}"
        </a>
      </div>

      <div className="ml-4">
        <span className="text-gray-600 dark:text-gray-400">]</span>,
      </div>
    </>
  );
}
