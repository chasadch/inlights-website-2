// import Footer from "@/sections/Footer/Footer";
// import Header from "@/sections/Header/Header";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Header from "@/sections/Header/Header";
import Footer from "@/sections/Footer/Footer";

export const metadata = {
  title: "Smart Cities AI",
  description: "Redefining Smart Cities using AI",
};

const manrope = Manrope({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`overflow-x-hidden text-white antialiased ${manrope.className}`}
      >
        <Toaster
          toastOptions={{
            duration: 5000,
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
