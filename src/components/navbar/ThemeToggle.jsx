import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import useDarkMode from "../../hooks/useDarkMode";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700"
    >
      {isDarkMode ? (
        <SunIcon className="h-6 w-6 text-yellow-500" />
      ) : (
        <MoonIcon className="h-6 w-6 text-gray-900" />
      )}
    </button>
  );
}
