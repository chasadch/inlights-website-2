"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import NavDropdown from "./NavDropdown";

export default function Header() {
  const router = useRouter();

  return (
    <header className="absolute left-0 top-0 z-50 box-border flex h-[84px] w-full flex-shrink-0 items-center justify-between px-[16px] py-[12px] text-white lg:px-[120px] lg:py-[16px]">
      {/* Logo */}
      <Image
        src={"/header/logo.png"}
        alt="Logo"
        width={156}
        height={18}
        className="h-[12px] w-[102.8px] flex-shrink-0 cursor-pointer xl:h-[18px] xl:w-[156px]"
      />

      {/* Navigation */}
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
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
          </span>
        </li>

        {/* Services Dropdown */}
        <NavDropdown
          title="Services"
          sections={[
            {
              header: "Custom Product Development",
              items: [
                {
                  imageSrc: "/header/web_development.png",
                  title: "Web Development",
                  onClick: () => router.push("/services/web_development"),
                },
                {
                  imageSrc: "/header/product_design.png",
                  title: "UI/UX Design",
                  onClick: () => router.push("/services/uiux_design"),
                },
              ],
            },
            {
              header: "Artificial Intelligence",
              items: [
                {
                  imageSrc: "/header/computer_vision.png",
                  title: "Computer Vision",
                  onClick: () => router.push("/services/computer-vision"),
                },
                {
                  imageSrc: "/header/ai_automation.png",
                  title: "AI Automation",
                  onClick: () => router.push("/services/ai-automation"),
                },
              ],
            },
          ]}
        />

        {/* Products Dropdown */}
        <NavDropdown
          title="Products"
          sections={[
            {
              header: "Custom Product Development",
              items: [
                {
                  imageSrc: "/header/web_development.png",
                  title: "Traffic Management",
                  onClick: () => router.push("/products/traffic_management"),
                },
                {
                  imageSrc: "/header/product_design.png",
                  title: "Premises Security",
                  onClick: () => router.push("/products/premises_security"),
                },
              ],
            },
          ]}
        />

        {/* Company Dropdown */}
        <NavDropdown
          title="Company"
          sections={[
            {
              header: "About",
              items: [
                {
                  imageSrc: "/header/web_development.png",
                  title: "About",
                  onClick: () => router.push("/about"),
                },
                {
                  imageSrc: "/header/product_design.png",
                  title: "Portfolio",
                  onClick: () => router.push("/portfolio"),
                },
              ],
            },
            {
              header: "Our Team",
              items: [
                {
                  imageSrc: "/header/computer_vision.png",
                  title: "Team",
                  onClick: () => router.push("/team"),
                },
                {
                  imageSrc: "/header/computer_vision.png",
                  title: "Team",
                  onClick: () => router.push("/team"),
                },
              ],
            },
          ]}
        />
      </ul>

      {/* Mobile Menu Icon */}
      <div className="flex items-start gap-[105px] rounded-[56px] p-[6px] md:hidden">
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
    </header>
  );
}
