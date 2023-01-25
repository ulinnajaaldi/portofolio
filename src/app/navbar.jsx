"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme" || "light")
  );

  const toogleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <nav className="flex h-24 flex-wrap items-center justify-between px-8 shadow-md">
        <div>
          <h1 className="text-xl font-semibold">Aldilla Ulinnaja</h1>
          <p>Software Engginer</p>
        </div>
        <div className="block transition-transform duration-1000 ease-in-out md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-40 md:hidden "
          >
            {!isOpen ? (
              <BiMenuAltRight className="h-10 w-10 fill-current" />
            ) : (
              <BiX className="h-10 w-10 fill-current" />
            )}
          </button>
        </div>
        <div className="hidden gap-5 md:flex">
          <Link href="#home">Home</Link>
          <Link href="#project">Project</Link>
          <Link href="#Contact">Contact</Link>
        </div>
      </nav>
      {/* Sidebar */}
      <div
        className={`w-full overflow-hidden  md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="absolute top-0 h-screen w-full backdrop-blur-sm"></div>
        <div className="absolute right-0 top-0 z-0 h-screen w-3/4 bg-white drop-shadow-lg">
          <div className="flex flex-col  p-5 text-neutral">
            <Link href="#home">Home</Link>
            <Link href="#project">Project</Link>
            <Link href="#Contact">Contact</Link>
          </div>
        </div>
      </div>
    </>
  );
}
