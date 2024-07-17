import React from "react";

import { poppins, roboto_mono } from "@/constants/font";
import "@/styles/globals.css";
import { BaseLayout } from "@/components";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_mono.variable} scroll-smooth `}
    >
      <body>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
