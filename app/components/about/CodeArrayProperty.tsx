/**
 * CodeArrayPropertyProps interface defining the props for CodeArrayProperty component.
 */
interface CodeArrayPropertyProps {
  propertyName: string;
  items: string[];
  indent?: number;
}

/**
 * CodeArrayProperty component that displays a property name and its array value
 * in a styled format.
 * @param propertyName - The name of the property.
 * @param items - An array of strings representing the values.
 * @param indent - Optional indentation level (default is 4).
 * @returns JSX.Element representing the code array property.
 */
export default function CodeArrayProperty({
  propertyName,
  items,
  indent = 4,
}: CodeArrayPropertyProps) {
  const formattedArray = `["${items.join('", "')}"]`;

  return (
    <div className={`ml-${indent}`}>
      <span className="text-purple-600 dark:text-purple-400">
        {propertyName}:
      </span>{" "}
      <span className="text-green-600 dark:text-green-400">
        {formattedArray}
      </span>
      ,
    </div>
  );
}
