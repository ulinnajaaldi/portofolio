"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BiMenuAltRight, BiX } from "react-icons/bi";

import { NAVBAR_ITEMS } from "@/constants/components";
import { motionFadeDown, motionFadeUp } from "@/utils/motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isPageTop, setIsPageTop] = useState(true);
  const previousCurrentScrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsPageTop(currentScrollPosition === 0);
      if (
        previousCurrentScrollPosition.current < currentScrollPosition &&
        !isNavbarVisible
      ) {
        setIsNavbarVisible(true);
      } else if (
        previousCurrentScrollPosition.current > currentScrollPosition &&
        isNavbarVisible
      ) {
        setIsNavbarVisible(false);
      }
      previousCurrentScrollPosition.current = currentScrollPosition;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavbarVisible]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 z-[98] w-screen ${
        !isNavbarVisible
          ? !isPageTop
            ? `translate-y-0  bg-base_col shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out ${
                !isOpen ? "bg-opacity-80 backdrop-blur-md" : "bg-opacity-100"
              }`
            : " bg-base_col bg-opacity-80 py-3 transition-all"
          : `transition-all duration-300 ease-in-out ${
              !isPageTop ? "-translate-y-full" : "translate-y-0"
            } `
      }`}
    >
      <div className="flex h-24 items-center justify-between px-7 lg:px-14">
        <Link href="/" className="text-accent" scroll={false}>
          <motion.h1 {...motionFadeUp} className="text-2xl font-semibold">
            Ulinnaja.
          </motion.h1>
        </Link>

        {/* Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            aria-label={
              !isOpen ? "Open Navigation Menu" : "Close Navigation Menu"
            }
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-30"
          >
            {!isOpen ? (
              <BiMenuAltRight className="h-10 w-10 fill-current text-accent" />
            ) : (
              <BiX className="h-10 w-10 fill-current text-accent" />
            )}
          </button>
        </div>

        {/* Navbar Text */}
        <div className="text-base-content hidden  gap-10 lg:flex">
          {NAVBAR_ITEMS.map((item, index) => (
            <motion.div
              key={`${item.title}-${index}`}
              {...motionFadeDown}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
            >
              <Link
                href={item.href}
                className="flex flex-col items-end font-mono text-sm  text-primary transition-all duration-300 hover:text-accent xl:text-base"
              >
                <span className="text-xs text-accent">{item.number}</span>
                <p>{`// ${item.title}`}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 h-screen w-full lg:hidden ${
          !isOpen
            ? "translate-x-full transition-all duration-300 ease-in"
            : "translate-x-0 transition-all duration-300 ease-out"
        }`}
      >
        <div className="fixed top-0 z-0 h-full w-full backdrop-blur-sm"></div>
        <div className="fixed right-0 top-0 z-[99] h-full w-3/4 bg-base_col_darker drop-shadow-lg md:w-1/2">
          <div className="mt-44 flex flex-col items-center justify-center gap-12 text-base md:text-lg">
            {NAVBAR_ITEMS.map((item, index) => (
              <Link
                href={item.href}
                className="text-center font-mono text-primary hover:text-accent"
                key={index}
                onClick={() => setIsOpen(false)}
              >
                <p className="flex flex-col">
                  <span className="text-sm text-accent">{item.number}.</span>
                  {`${item.title}`}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
