import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Manrope } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

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
      <body className={`w-full text-white antialiased ${manrope.className}`}>
        {/* <Header /> */}
        <main className="min-w-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
