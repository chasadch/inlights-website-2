"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import DropDownCard from "./DropDownCard";

export default function Header() {
  const router = useRouter();

  return (
    <header className="absolute left-0 top-0 z-50 flex h-[84px] w-full flex-shrink-0 items-center justify-between px-4 py-[16px] text-white sm:px-8 lg:px-[120px]">
      {/* Logo */}
      <Image
        src={"/header/logo.png"}
        alt="Logo"
        width={156}
        height={18}
        className="flex-shrink-0 cursor-pointer"
      />

      {/* Navigation */}
      <ul className="z-50 flex flex-wrap items-center justify-center gap-2 sm:gap-[9px]">
        <li className="flex cursor-pointer items-center justify-center gap-1 rounded-md p-2">
          <span
            className="text-size-4 font-semibold"
            onClick={() => router.push("/")}
          >
            Home
          </span>
        </li>
        <li className="group relative flex cursor-pointer items-center justify-center gap-1 rounded-md p-2">
          <span className="text-size-4 font-semibold">Services</span>
          <ChevronDown width={16} height={16} />

          {/* Dropdown */}
          <div className="border-1 invisible absolute left-0 top-full z-10 flex flex-col items-start gap-8 rounded-2xl border-[rgba(45,160,184,0.15)] bg-bg p-8 opacity-0 shadow-shadowCustom transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="flex flex-col items-start gap-4">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Custom Product Development
              </span>
              <div className="flex flex-wrap items-start gap-5">
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

            <div className="h-px w-full max-w-[386px] bg-[#E5EAEE] opacity-50"></div>

            <div className="flex flex-col items-start gap-4">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Artificial Intelligence
              </span>
              <div className="flex flex-wrap items-start gap-5">
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

        <li className="group relative flex cursor-pointer items-center justify-center gap-1 rounded-md p-2">
          <span className="text-size-4 font-semibold">Products</span>
          <ChevronDown width={16} height={16} />

          {/* Dropdown */}
          <div className="border-1 invisible absolute left-0 top-full z-10 flex flex-col items-start gap-8 rounded-2xl border-[rgba(45,160,184,0.15)] bg-bg p-8 opacity-0 shadow-shadowCustom transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="flex flex-col items-start gap-4">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Custom Product Development
              </span>
              <div className="flex flex-wrap items-start gap-5">
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

            <div className="h-px w-full max-w-[386px] bg-[#E5EAEE] opacity-50"></div>

            <div className="flex flex-col items-start gap-4">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Artificial Intelligence
              </span>
              <div className="flex flex-wrap items-start gap-5">
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

        <li className="group relative flex cursor-pointer items-center justify-center gap-1 rounded-md p-2">
          <span className="text-size-4 font-semibold">Company</span>
          <ChevronDown width={16} height={16} />

          {/* Dropdown */}
          <div className="invisible absolute left-0 top-full z-10 flex flex-col items-start gap-8 rounded-2xl border border-[rgba(45,160,184,0.15)] bg-bg p-8 opacity-0 shadow-shadowCustom transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="flex flex-col items-start gap-4">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Our Portfolio
              </span>
              <div className="flex flex-wrap items-start gap-5">
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

            <div className="h-px w-full max-w-[386px] bg-[#E5EAEE] opacity-50"></div>

            <div className="flex flex-col items-start gap-4">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                Our Team
              </span>
              <div className="flex flex-wrap items-start gap-5">
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

      <Button onClick={() => router.push("/jobs")} variant="outline">
        Join Us
      </Button>
    </header>
  );
}
