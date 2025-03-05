"use client";

import Underline from "@/components/Underline";
import {
  ChevronRight,
  Home,
  X,
  Briefcase,
  Box,
  Users,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "../../components/Button";
import NavDropdown from "./NavDropdown";

// Define types for dropdown data
type DropdownItem = {
  imageSrc: string;
  title: string;
  path: string;
};

type DropdownSection = {
  header: string;
  subtext?: string;
  items: DropdownItem[];
};

// Data for your dropdown sections
const servicesDropdownData: DropdownSection[] = [
  {
    header: "Custom Product Development",
    items: [
      {
        imageSrc: "/header/web_development.png",
        title: "Web Development",
        path: "/services/web_development",
      },
      {
        imageSrc: "/header/product_design.png",
        title: "UI/UX Design",
        path: "/services/uiux_design",
      },
    ],
  },
  {
    header: "Artificial Intelligence",
    items: [
      {
        imageSrc: "/header/computer_vision.png",
        title: "GeoHealth",
        path: "/geohealth",
      },
      {
        imageSrc: "/header/ai_automation.png",
        title: "AI Automation",
        path: "/services/ai-automation",
      },
    ],
  },
];

const productsDropdownData: DropdownSection[] = [
  {
    header: "Custom Product Development",
    items: [
      {
        imageSrc: "/header/web_development.png",
        title: "Traffic Management",
        path: "/products/traffic_management",
      },
      {
        imageSrc: "/header/product_design.png",
        title: "Premises Security",
        path: "/products/premises_security",
      },
    ],
  },
];

const companyDropdownData: DropdownSection[] = [
  {
    header: "About Us",
    items: [
      {
        imageSrc: "/header/web_development.png",
        title: "About",
        path: "/about",
      },
      {
        imageSrc: "/header/product_design.png",
        title: "Portfolio",
        path: "/portfolio",
      },
    ],
  },
  {
    header: "Our Team",
    items: [
      {
        imageSrc: "/header/computer_vision.png",
        title: "Team",
        path: "/team",
      },
      {
        imageSrc: "/header/computer_vision.png",
        title: "Careers",
        path: "/careers",
      },
    ],
  },
];

export default function Header() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50 mx-auto box-border flex w-full max-w-[1440px] flex-shrink-0 items-center justify-between px-[16px] py-[12px] text-white lg:px-[120px] lg:py-[16px]">
      {/* Logo */}
      <div
        className="relative h-[12px] w-[102.8px] flex-shrink-0 cursor-pointer lg:h-[18.197px] lg:w-[145.885px] xl:w-[155.885px]"
        onClick={() => router.push("/")}
      >
        <Image
          src={"/header/logo_2.png"}
          alt="Logo"
          fill
          className="object-cover"
        />
      </div>

      {/* Navigation (Desktop) */}
      <ul
        className="z-50 hidden flex-wrap items-center gap-[9px] md:flex"
        style={{ maxWidth: "100%", flexWrap: "wrap" }}
      >
        <li
          className="group relative flex cursor-pointer items-center justify-center rounded-[8px] p-[12px]"
          onClick={() => router.push("/")}
        >
          <span className="relative text-size-4 font-semibold">
            Home
            <Underline />
          </span>
        </li>

        {/* Services Dropdown */}
        <NavDropdown title="Services" sections={servicesDropdownData} />

        {/* Products Dropdown */}
        <NavDropdown title="Products" sections={productsDropdownData} />

        {/* Company Dropdown */}
        <NavDropdown title="Company" sections={companyDropdownData} />
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="flex cursor-pointer items-start gap-[105px] rounded-[56px] p-[6px] md:hidden"
        onClick={() => setMobileMenuOpen(true)}
      >
        <div className="relative h-[24px] w-[24px]">
          <Image
            src="/header/hamburger.png"
            alt="Menu"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* "Join Us" Button */}
      <Button
        onClick={() => router.push("/jobs")}
        variant="outline"
        className="hidden md:flex"
      >
        Join Us
      </Button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <MobileMenu onClose={() => setMobileMenuOpen(false)} router={router} />
      )}
    </header>
  );
}

// Mobile Menu component
interface MobileMenuProps {
  onClose: () => void;
  router: ReturnType<typeof useRouter>;
}

function MobileMenu({ onClose, router }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // Delay open state to allow initial off-screen render
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 50);
  }, []);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      onClose();
    }, 300); // Duration should match the transition duration
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      {/* Overlay Background */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />

      {/* Sidebar Menu with translation animation */}
      <div
        className={`absolute right-0 top-0 flex h-full w-[85%] max-w-[300px] transform flex-col bg-black shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          backgroundImage: "url(/statistics/bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 rounded-full p-2 text-white hover:bg-gray-700"
          onClick={handleClose}
        >
          <X size={24} />
        </button>

        {/* Menu Header */}
        <div className="mt-16 flex items-center justify-center">
          <Image
            src="/header/logo_2.png"
            alt="Logo"
            width={120}
            height={24}
            className="object-cover"
          />
        </div>

        {/* Menu Items */}
        <ul className="mt-8 flex flex-col gap-2 px-6 text-size-4 font-semibold text-white">
          {/* Home */}
          <li
            className="flex cursor-pointer items-center gap-3 rounded-lg p-[12px] transition-colors duration-200 hover:bg-gray-700"
            onClick={() => {
              router.push("/");
              handleClose();
            }}
          >
            <Home size={16} />
            <span>Home</span>
          </li>

          {/* Services */}
          <li
            className="cursor-pointer rounded-lg p-[12px] transition-colors duration-200 hover:bg-gray-700"
            onClick={() => handleDropdownToggle("Services")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Briefcase size={16} />
                <span>Services</span>
              </div>
              <ChevronRight
                size={16}
                className={`transition-transform duration-200 ${
                  openDropdown === "Services" ? "rotate-90" : ""
                }`}
              />
            </div>
            {openDropdown === "Services" && (
              <SubDropdown
                router={router}
                onClose={handleClose}
                data={servicesDropdownData}
              />
            )}
          </li>

          {/* Products */}
          <li
            className="cursor-pointer rounded-lg p-[12px] transition-colors duration-200 hover:bg-gray-700"
            onClick={() => handleDropdownToggle("Products")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Box size={16} />
                <span>Products</span>
              </div>
              <ChevronRight
                size={16}
                className={`transition-transform duration-200 ${
                  openDropdown === "Products" ? "rotate-90" : ""
                }`}
              />
            </div>
            {openDropdown === "Products" && (
              <SubDropdown
                router={router}
                onClose={handleClose}
                data={productsDropdownData}
              />
            )}
          </li>

          {/* Company */}
          <li
            className="cursor-pointer rounded-lg p-[12px] transition-colors duration-200 hover:bg-gray-700"
            onClick={() => handleDropdownToggle("Company")}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Users size={16} />
                <span>Company</span>
              </div>
              <ChevronRight
                size={16}
                className={`transition-transform duration-200 ${
                  openDropdown === "Company" ? "rotate-90" : ""
                }`}
              />
            </div>
            {openDropdown === "Company" && (
              <SubDropdown
                router={router}
                onClose={handleClose}
                data={companyDropdownData}
              />
            )}
          </li>

          {/* Join Us */}
          <li
            className="flex cursor-pointer items-center gap-3 rounded-lg p-[12px] transition-colors duration-200 hover:bg-gray-700"
            onClick={() => {
              router.push("/jobs");
              handleClose();
            }}
          >
            <UserPlus size={16} />
            <span>Join Us</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// SubDropdown component for nested items
interface SubDropdownProps {
  data: DropdownSection[];
  router: ReturnType<typeof useRouter>;
  onClose: () => void;
}

function SubDropdown({ data, router, onClose }: SubDropdownProps) {
  return (
    <div className="mt-2 flex flex-col gap-4 pl-4">
      {data.map((section, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          {/* Dropdown Heading */}
          <div className="flex flex-col gap-1">
            <h3 className="text-size-6 font-medium text-white">
              {section.header}
            </h3>
          </div>
          {/* Dropdown Items */}
          <div className="flex flex-col gap-1">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer rounded-lg p-2 text-size-7 text-[#D1D1D1] transition-colors duration-200 hover:bg-gray-700"
                onClick={() => {
                  router.push(item.path);
                  onClose();
                }}
              >
                {item.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
