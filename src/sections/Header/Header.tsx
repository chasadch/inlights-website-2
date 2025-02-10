"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import DropDownCard from "./DropDownCard";

export default function Header() {
  const router = useRouter();

  return (
    <header className="absolute left-0 top-0 z-50 flex h-[84px] w-full flex-shrink-0 items-center justify-between px-[16px] py-[12px] text-white md:px-[40px] md:py-[8px] lg:px-[120px] lg:py-[16px]">
      {/* Logo */}
      <Image
        src={"/header/logo.png"}
        alt="Logo"
        width={156}
        height={18}
        className="h-[12px] w-[102.8px] flex-shrink-0 cursor-pointer lg:h-[18px] lg:w-[156px]"
      />

      {/* Navigation */}
      <ul className="z-50 hidden items-center justify-center gap-[9px] md:flex">
        <li className="flex cursor-pointer items-center justify-center rounded-[8px] p-[12px]">
          <span className="text-size-4 font-semibold">Home</span>
        </li>
        <li className="group relative flex cursor-pointer items-center justify-center gap-[2px] rounded-[8px] p-[12px] lg:gap-[4px]">
          <span className="text-size-4 font-semibold">Services</span>
          <ChevronDown width={16} height={16} />

          {/* Dropdown */}
          <div className="invisible absolute left-0 top-full z-10 inline-flex flex-col items-start gap-[32px] rounded-[32px] border-[1px] border-[rgba(45,160,184,0.15)] bg-bg p-[34px] opacity-0 shadow-shadowCustom transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="flex flex-col items-start gap-[18px]">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Custom Product Development
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/web_development.png"
                  title="Web Development"
                  onClick={() => router.push("/services/web_development")}
                />
                <DropDownCard
                  imageSrc="/header/product_design.png"
                  title="UI/UX Design"
                  onClick={() => router.push("/services/uiux_design")}
                />
              </div>
            </div>

            <div className="h-[1px] w-[386px] bg-[#E5EAEE] opacity-50"></div>

            <div className="flex flex-col items-start gap-[15px]">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Artificial Intelligence
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/computer_vision.png"
                  title="Computer Vision"
                  onClick={() => router.push("/services/computer-vision")}
                />
                <DropDownCard
                  imageSrc="/header/ai_automation.png"
                  title="AI Automation"
                  onClick={() => router.push("/services/ai-automation")}
                />
              </div>
            </div>
          </div>
        </li>

        <li className="group relative flex cursor-pointer items-center justify-center gap-[2px] rounded-[8px] p-[12px] lg:gap-[4px]">
          <span className="text-size-4 font-semibold">Products</span>
          <ChevronDown width={16} height={16} />

          {/* Dropdown */}
          <div className="border-1 invisible absolute left-0 top-full z-10 inline-flex flex-col items-start gap-[32px] rounded-[32px] border-[rgba(45,160,184,0.15)] bg-bg p-[34px] opacity-0 shadow-shadowCustom transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="flex flex-col items-start gap-[18px]">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Custom Product Development
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/web_development.png"
                  title="Web Development"
                  onClick={() => router.push("/products/web_development")}
                />
                <DropDownCard
                  imageSrc="/header/product_design.png"
                  title="Product Design"
                  onClick={() => router.push("/products/product_design")}
                />
              </div>
            </div>

            <div className="h-[1px] w-[386px] bg-[#E5EAEE] opacity-50"></div>

            <div className="flex flex-col items-start gap-[15px]">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Artificial Intelligence
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/computer_vision.png"
                  title="Computer Vision"
                  onClick={() => router.push("/products/computer_vision")}
                />
                <DropDownCard
                  imageSrc="/header/ai_automation.png"
                  title="AI Automation"
                  onClick={() => router.push("/products/ai_automation")}
                />
              </div>
            </div>
          </div>
        </li>

        <li className="group relative flex cursor-pointer items-center justify-center gap-[2px] rounded-[8px] p-[12px] lg:gap-[4px]">
          <span className="text-size-4 font-semibold">Company</span>
          <ChevronDown width={16} height={16} />

          {/* Dropdown */}
          <div className="invisible absolute left-0 top-full z-10 inline-flex flex-col items-start gap-[32px] rounded-[32px] border-[1px] border-[rgba(45,160,184,0.15)] bg-bg p-[34px] opacity-0 shadow-shadowCustom transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="flex flex-col items-start gap-[18px]">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Our Portfolio
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/web_development.png"
                  title="Web Development"
                  onClick={() => router.push("/portfolio")}
                />
                <DropDownCard
                  imageSrc="/header/product_design.png"
                  title="Product Design"
                  onClick={() => router.push("/company/product_design")}
                />
              </div>
            </div>

            <div className="h-[1px] w-[386px] bg-[#E5EAEE] opacity-50"></div>

            <div className="flex flex-col items-start gap-[15px]">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Our Team
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/computer_vision.png"
                  title="Computer Vision"
                  onClick={() => router.push("/team")}
                />
                <DropDownCard
                  imageSrc="/header/ai_automation.png"
                  title="AI Automation"
                  onClick={() => router.push("/company/ai_automation")}
                />
              </div>
            </div>
          </div>
        </li>
      </ul>

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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

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
