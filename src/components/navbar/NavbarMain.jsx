import React, { useState } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

const NavbarMain = () => {
  return (
    <nav className="font-sans w-full p-4 mx-auto flex bg-gray-100 dark:bg-gray-900 shadow-md fixed z-20">
      <div className="max-w-[1300px] flex w-full mx-auto justify-between items-center">
        <NavLogo />
        <NavLinks />
        <ThemeToggle />
        <MobileNav />
      </div>
    </nav>
  )
}

export default NavbarMain