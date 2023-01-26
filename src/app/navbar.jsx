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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  const toogleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="flex h-24 items-center justify-between px-7 shadow-sm lg:px-14">
        <div className=" text-accent">
          <h1 className="text-xl font-medium">Aldilla Ulinnaja</h1>
          <p className="font-light ">Front-End Software Engginer</p>
        </div>

        {/* Hamburger Button */}
        <div className="flex lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="relative z-30">
            {!isOpen ? (
              <BiMenuAltRight className="h-10 w-10 fill-current text-accent" />
            ) : (
              <BiX className="h-10 w-10 fill-current text-accent" />
            )}
          </button>
        </div>

        {/* Navbar Text */}
        <div className="hidden gap-10  text-base-content lg:flex">
          <Link href="#home" className="hover:text-accent">
            About
          </Link>
          <Link href="#project" className="hover:text-accent">
            Project
          </Link>
          <Link href="#Contact" className="hover:text-accent">
            Contact
          </Link>
          <button onClick={toogleTheme}>
            {theme === "dark" ? (
              <MdLightMode size={25} className="text-yellow-500" />
            ) : (
              <MdDarkMode size={25} className="text-yellow-500" />
            )}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 w-full lg:hidden ${
          !isOpen
            ? "translate-x-full transition-all duration-150 ease-in-out"
            : "ease-in-ou translate-x-0 transition-all duration-150 ease-in-out"
        }`}
      >
        <div className="fixed top-0 z-0 h-screen w-full backdrop-blur-sm "></div>
        <div className="fixed right-0 top-0 z-10 h-screen w-3/4 bg-base-200 drop-shadow-lg md:w-1/2">
          <div className="mt-24 flex flex-col items-center justify-center gap-16 text-lg text-base-content">
            <Link href="#home" className="hover:text-accent">
              About
            </Link>
            <Link href="#project" className="hover:text-accent">
              Project
            </Link>
            <Link href="#Contact" className="hover:text-accent">
              Contact
            </Link>
            <div>
              <button onClick={toogleTheme}>
                {theme === "dark" ? (
                  <MdLightMode size={25} className="text-yellow-500" />
                ) : (
                  <MdDarkMode size={25} className="text-yellow-500" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
