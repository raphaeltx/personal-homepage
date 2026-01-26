"use client";

/**
 * NotFound component for handling 404 errors.
 * @returns JSX.Element The NotFound component.
 */
export default function NotFound() {
  return (
    <div className="bg-white dark:bg-zinc-950 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-1xl mb-5">The page you are looking for does not exist.</p>
      <button
        type="button"
        className="cursor-pointer border font-medium leading-5 text-xs px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800"
        onClick={() => (window.location.href = "/")}
      >
        Go Home
      </button>
    </div>
  );
}
