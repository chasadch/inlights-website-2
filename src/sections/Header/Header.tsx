"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import NavDropdown from "./NavDropdown";
import { X } from "lucide-react";
import Underline from "@/components/Underline";

// Define types for dropdown data
type DropdownItem = {
  imageSrc: string;
  title: string;
  path: string;
};

type DropdownSection = {
  header: string;
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
    header: "About",
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
        title: "Team",
        path: "/team",
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
      <Image
        src={"/header/logo_2.png"}
        alt="Logo"
        width={156}
        height={18}
        className="h-[12px] w-[102.8px] flex-shrink-0 cursor-pointer lg:h-[18.197px] lg:w-[145.885px] xl:w-[155.885px]"
        onClick={() => router.push("/")}
      />

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
  const [isClosing, setIsClosing] = useState(false);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Transition duration
  };

  return (
    <div
      className={`fixed left-0 top-0 z-[60] flex h-screen w-screen flex-col overflow-auto px-[16px] py-[24px] transition-transform duration-300 ${
        isClosing ? "translate-x-full" : "translate-x-0"
      }`}
      style={{
        backgroundImage: "url(/statistics/bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Close Button */}
      <div className="-mt-[4px] mb-[24px] mr-[6px] flex items-center justify-end">
        <button
          className="text-size-4 font-semibold text-white"
          onClick={handleClose}
        >
          <X size={24} />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col gap-[16px] text-size-4 font-semibold text-white">
        {/* Home */}
        <li
          className="cursor-pointer rounded-[8px] p-[12px]"
          onClick={() => {
            router.push("/");
            handleClose();
          }}
        >
          Home
        </li>

        {/* Services */}
        <li className="cursor-pointer rounded-[8px] p-[12px]">
          <div onClick={() => handleDropdownToggle("Services")}>Services</div>
          {openDropdown === "Services" && (
            <SubDropdown
              router={router}
              onClose={handleClose}
              data={servicesDropdownData}
            />
          )}
        </li>

        {/* Products */}
        <li className="cursor-pointer rounded-[8px] p-[12px]">
          <div onClick={() => handleDropdownToggle("Products")}>Products</div>
          {openDropdown === "Products" && (
            <SubDropdown
              router={router}
              onClose={handleClose}
              data={productsDropdownData}
            />
          )}
        </li>

        {/* Company */}
        <li className="cursor-pointer rounded-[8px] p-[12px]">
          <div onClick={() => handleDropdownToggle("Company")}>Company</div>
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
          className="cursor-pointer rounded-[8px] p-[12px]"
          onClick={() => {
            router.push("/jobs");
            handleClose();
          }}
        >
          Join Us
        </li>
      </ul>
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
    <div className="ml-[12px] mt-[12px] flex flex-col gap-[12px] text-size-3 font-normal">
      {data.map((section, idx) => (
        <div key={idx} className="flex flex-col gap-[8px]">
          <div className="text-size-4 font-semibold">{section.header}</div>
          <div className="flex flex-col gap-[6px]">
            {section.items.map((item, i) => (
              <div
                key={i}
                className="cursor-pointer pl-[12px] text-size-4 text-[#D1D1D1]"
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
