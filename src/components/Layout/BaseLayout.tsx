"use client";

import React from "react";

import { Contact, Navbar, Footer } from "@/components";

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <Contact />
      <main className="container min-h-[100vh]">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
