import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <NavLogo />
      <NavLinks />
      <ThemeToggle />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}
