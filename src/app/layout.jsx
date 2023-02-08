import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Contact from "./contact";
import { poppins, roboto_mono } from "./font";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto_mono.variable} scroll-smooth `}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
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
