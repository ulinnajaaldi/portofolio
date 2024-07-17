"use client";

import React, { useEffect } from "react";
// @ts-ignore
import * as AOS from "aos";

import { Contact, Navbar, Footer } from "@/components";

const BaseLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <>
      <Navbar />
      <Contact />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
