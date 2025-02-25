export default function NavLinks() {
  return (
    <ul className="hidden md:flex space-x-6">
      <li><a href="#about" className="text-gray-700 dark:text-white">About</a></li>
      <li><a href="#skills" className="text-gray-700 dark:text-white">Skills</a></li>
      <li><a href="#experience" className="text-gray-700 dark:text-white">Experience</a></li>
      <li><a href="#projects" className="text-gray-700 dark:text-white">Projects</a></li>
      <li><a href="#contact" className="text-gray-700 dark:text-white">Contact</a></li>
    </ul>
  );
}
