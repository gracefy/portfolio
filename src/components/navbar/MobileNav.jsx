import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileNav({ isOpen, setIsOpen }) {
  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md">
        {isOpen ? <XMarkIcon className="h-6 w-6 text-gray-900 dark:text-white" /> : <Bars3Icon className="h-6 w-6 text-gray-900 dark:text-white" />}
      </button>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg p-4 space-y-2">
          <li><a href="#about" className="block text-gray-700 dark:text-white">About</a></li>
          <li><a href="#projects" className="block text-gray-700 dark:text-white">Projects</a></li>
          <li><a href="#contact" className="block text-gray-700 dark:text-white">Contact</a></li>
        </ul>
      )}
    </div>
  );
}
