"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";
// import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isPageTop, setIsPageTop] = useState(window.pageXOffset === 0);
  const previousCurrentScrollPosition = React.useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsPageTop(currentScrollPosition === 0);
      if (
        previousCurrentScrollPosition.current > currentScrollPosition &&
        !isNavbarVisible
      ) {
        setIsNavbarVisible(true);
      } else if (
        previousCurrentScrollPosition.current < currentScrollPosition &&
        isNavbarVisible
      ) {
        setIsNavbarVisible(false);
      }
      previousCurrentScrollPosition.current = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [isNavbarVisible, isOpen]);

  const navbarText = [
    { text: "About", href: "/about", number: "01" },
    { text: "Projects", href: "/projects", number: "02" },
    { text: "Contact", href: "/contact", number: "03" },
  ];

  return (
    <div
      className={`fixed top-0 z-[98] w-screen ${
        isNavbarVisible
          ? !isPageTop
            ? "translate-y-0  bg-base_col bg-opacity-80 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] backdrop-blur-md  transition-all duration-300 ease-in-out"
            : " bg-base_col bg-opacity-80 py-3 transition-all"
          : `-translate-y-full transition-all duration-300 ease-in-out `
      }`}
    >
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
        <div className="text-base-content hidden  gap-10 lg:flex">
          {navbarText.map((item, index) => (
            <Link
              href={item.href}
              className="flex flex-col items-end font-mono text-sm  text-primary transition-all duration-300 hover:text-accent xl:text-base"
              key={index}
            >
              <span className="text-xs text-accent">{item.number}</span>
              <p>{`// ${item.text}`}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-screen w-full lg:hidden ${
          !isOpen
            ? "translate-x-full transition-all duration-150 ease-in-out"
            : "translate-x-0 transition-all duration-150 ease-in-out "
        }`}
      >
        <div className="absolute top-0 z-0 h-full w-full backdrop-blur-sm"></div>
        <div className="fixed right-0 top-0 z-[99] h-full w-3/4 bg-base_col_darker drop-shadow-lg md:w-1/2">
          <div className="text-base-content mt-32 flex flex-col items-center justify-center gap-12 text-lg">
            {navbarText.map((item, index) => (
              <Link
                href="#home"
                className="text-center font-mono text-primary hover:text-accent"
                key={index}
              >
                <p className="flex flex-col">
                  <span className="text-sm text-accent">{item.number}.</span>
                  {`${item.text}`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
