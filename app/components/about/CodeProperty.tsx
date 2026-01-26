/**
 * CodePropertyProps interface defining the props for CodeProperty component.
 */
interface CodePropertyProps {
  propertyName: string;
  value: string | number;
  indent?: number;
}

/**
 * CodeProperty component that displays a property name and its value
 * in a styled format.
 * @param propertyName - The name of the property.
 * @param value - The value of the property (string or number).
 * @param indent - Optional indentation level (default is 4).
 * @returns JSX.Element representing the code property.
 */
export default function CodeProperty({
  propertyName,
  value,
  indent = 4,
}: CodePropertyProps) {
  const isNumber = typeof value === "number";
  const isString = typeof value === "string";

  const valueColor = isNumber
    ? "text-orange-600 dark:text-orange-400"
    : "text-green-600 dark:text-green-400";

  const formattedValue = isString ? `"${value}"` : value;

  return (
    <div className={`ml-${indent}`}>
      <span className="text-purple-600 dark:text-purple-400">
        {propertyName}:
      </span>{" "}
      <span className={valueColor}>{formattedValue}</span>,
    </div>
  );
}
