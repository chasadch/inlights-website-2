"use client";

import { ChevronDown, Menu, X } from "lucide-react"; // Import ChevronLeft icon
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Image
          src={"/header/logo.png"}
          width={155}
          height={18}
          alt="InLights logo"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-8">
          <a href="#" className="text-white hover:text-[#6C63FF]">
            Home
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-white hover:text-[#6C63FF]"
          >
            Services
            <ChevronDown size={18} />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-white hover:text-[#6C63FF]"
          >
            Our Products
            <ChevronDown size={18} />
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-white hover:text-[#6C63FF]"
          >
            Company
            <ChevronDown size={18} />
          </a>
        </nav>

        <a
          href="#"
          className="border-borderCustom rounded-full bg-gradient-to-r from-gradientDark to-gradientLight px-6 py-2 text-white shadow-custom transition-opacity hover:opacity-90"
        >
          Join Us
        </a>

        {/* Mobile Menu Button */}
        <button className="text-white md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-[#0A0B14] bg-opacity-90 backdrop-blur-md md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            <a href="#" className="text-white hover:text-[#6C63FF]">
              Home
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-white hover:text-[#6C63FF]"
            >
              Services
              <ChevronDown size={18} />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-white hover:text-[#6C63FF]"
            >
              Our Products
              <ChevronDown size={18} />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-white hover:text-[#6C63FF]"
            >
              Company
              <ChevronDown size={18} />
            </a>
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-gradientDark to-gradientLight px-6 py-2 text-white transition-opacity hover:opacity-90"
            >
              Join Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
