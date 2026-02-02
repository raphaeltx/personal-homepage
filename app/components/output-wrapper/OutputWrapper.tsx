/**
 * OutputWrapper component that wraps the output of terminal commands.
 * @param children - The children elements to be wrapped.
 * @returns JSX.Element representing the OutputWrapper component.
 */
export default function OutputWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <div className="pb-2 pt-2">
        Type{" "}
        <code className="bg-gray-200 dark:bg-gray-800 p-1 rounded">help</code>{" "}
        to see the list of available commands.
      </div>
    </>
  );
}
