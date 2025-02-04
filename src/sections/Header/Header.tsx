import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Button from "../../components/Button";
import DropDownCard from "./DropDownCard";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 flex h-[84px] w-full flex-shrink-0 items-center justify-between px-[120px] py-[16px] text-white">
      {/* Logo */}
      <Image
        src={"/header/logo.png"}
        alt="Logo"
        width={156}
        height={18}
        className="flex-shrink-0"
      />

      {/* Navigation */}
      <ul className="flex items-center justify-center gap-[9px]">
        <li className="flex cursor-pointer items-center justify-center gap-[4px] rounded-[8px] p-[12px]">
          <span className="text-size-4 font-semibold">Home</span>
        </li>
        <li className="group relative flex cursor-pointer items-center justify-center gap-[4px] rounded-[8px] p-[12px]">
          <span className="text-size-4 font-semibold">Services</span>
          <ChevronDown width={16} height={16} />

          {/* Dropdown */}
          <div className="invisible absolute left-0 top-full z-10 mt-2 inline-flex flex-col items-start gap-[32px] rounded-[32px] border-[1px] border-[rgba(45,160,184,0.15)] bg-bg p-[34px] opacity-0 shadow-shadowCustom transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="flex flex-col items-start gap-[16px]">
              <span className="self-stretch text-size-4 font-semibold">
                Custom Product Development
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/web_development.png"
                  title="Web Development"
                />
                <DropDownCard
                  imageSrc="/header/product_design.png"
                  title="Product Design"
                />
              </div>
            </div>

            <div className="h-[1px] w-[386px] bg-[#E5EAEE] opacity-50"></div>

            <div className="flex flex-col items-start gap-[15px]">
              <span className="self-stretch text-size-4 font-semibold">
                Artificial Intelligence
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/computer_vision.png"
                  title="Computer Vision"
                />
                <DropDownCard
                  imageSrc="/header/ai_automation.png"
                  title="AI Automation"
                />
              </div>
            </div>
          </div>
        </li>

        <li className="group relative flex cursor-pointer items-center justify-center gap-[4px] rounded-[8px] p-[12px]">
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
                />
                <DropDownCard
                  imageSrc="/header/product_design.png"
                  title="Product Design"
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
                />
                <DropDownCard
                  imageSrc="/header/ai_automation.png"
                  title="AI Automation"
                />
              </div>
            </div>
          </div>
        </li>

        <li className="group relative flex cursor-pointer items-center justify-center gap-[4px] rounded-[8px] p-[12px]">
          <span className="text-size-4 font-semibold">Company</span>
          <ChevronDown width={16} height={16} />

          {/* Dropdown */}
          <div className="invisible absolute left-0 top-full z-10 mt-2 inline-flex flex-col items-start gap-[32px] rounded-[32px] border-[1px] border-[rgba(45,160,184,0.15)] bg-bg p-[34px] opacity-0 shadow-shadowCustom transition-all duration-200 ease-in-out group-hover:visible group-hover:opacity-100">
            <div className="flex flex-col items-start gap-[16px]">
              <span className="self-stretch text-size-4 font-semibold">
                Custom Product Development
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/web_development.png"
                  title="Web Development"
                />
                <DropDownCard
                  imageSrc="/header/product_design.png"
                  title="Product Design"
                />
              </div>
            </div>

            <div className="h-[1px] w-[386px] bg-[#E5EAEE] opacity-50"></div>

            <div className="flex flex-col items-start gap-[15px]">
              <span className="self-stretch text-size-4 font-semibold">
                Artificial Intelligence
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                <DropDownCard
                  imageSrc="/header/computer_vision.png"
                  title="Computer Vision"
                />
                <DropDownCard
                  imageSrc="/header/ai_automation.png"
                  title="AI Automation"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>

      <Button variant="outline">Join Us</Button>
    </header>
  );
}
