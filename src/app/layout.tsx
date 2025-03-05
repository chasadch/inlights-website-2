import { Lato, Manrope, Roboto_Serif } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

import BackToTop from "@/sections/BackToTop/BackToTop";
import Footer from "@/sections/Footer/Footer";
import Header from "@/sections/Header/Header";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Inlights",
  description: "Redefining Smart Cities using AI",
};

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const roboto = Roboto_Serif({
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`overflow-x-hidden bg-[#03030E] text-white antialiased ${manrope.className} ${roboto.variable} ${lato.variable}`}
      >
        <Toaster
          toastOptions={{
            duration: 3000,
          }}
        />
        <Header />
        <BackToTop />
        {/* Insert the AOSInit component to initialize animations */}
        {/* <AOSInit /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
