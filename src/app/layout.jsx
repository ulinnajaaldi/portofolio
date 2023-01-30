import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { poppins, roboto_mono } from "./font";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto_mono.variable}`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <div className="container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
