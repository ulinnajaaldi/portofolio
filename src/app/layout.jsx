"use client";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Contact from "./contact";
import { poppins, roboto_mono } from "./font";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_mono.variable} scroll-smooth `}
    >
      <head />
      <body>
        <Navbar />
        <Contact />
        <div className="container mx-auto ">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
