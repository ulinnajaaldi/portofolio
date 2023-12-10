"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/globals.css";
import { poppins, roboto_mono } from "@/constants/font";
import { Contact, Navbar, Footer } from "@/components";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({});
  }, []);

  const superadmin = ["/auth/superadmin", "/dashboard/superadmin"];

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_mono.variable} scroll-smooth `}
    >
      <head />
      <body>
        {superadmin.includes(pathname) ? null : <Navbar />}
        {superadmin.includes(pathname) ? null : <Contact />}
        <main className={`${superadmin.includes(pathname) ? "" : "container"}`}>
          {children}
        </main>
        {superadmin.includes(pathname) ? null : <Footer />}
      </body>
    </html>
  );
}
