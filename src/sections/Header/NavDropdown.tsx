"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import DropDownCard from "./DropDownCard";

interface DropdownItem {
  imageSrc: string;
  title: string;
  onClick: () => void;
}

interface DropdownSection {
  header: string;
  items: DropdownItem[];
}

interface NavDropdownProps {
  title: string;
  sections: DropdownSection[];
}

export default function NavDropdown({ title, sections }: NavDropdownProps) {
  return (
    <li className="group relative flex cursor-pointer items-center justify-center gap-[2px] rounded-[8px] p-[12px] xl:gap-[4px]">
      <span className="text-size-4 font-semibold">{title}</span>
      <ChevronDown width={16} height={16} />
      {/* Dropdown */}
      <div className="pointer-events-none absolute left-0 top-[75px] z-10 flex flex-col items-start gap-[16px] rounded-[32px] border-[1px] border-borderCustom bg-bg p-[24px] opacity-0 shadow-shadowCustom transition-all duration-200 ease-in-out group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 2xl:gap-[32px] 2xl:p-[34px]">
        {sections.map((section, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-start gap-[18px]">
              <span
                className="self-stretch text-size-4 font-semibold"
                style={{ fontFamily: "Lato" }}
              >
                {section.header}
              </span>
              <div className="flex items-start gap-[20px] self-stretch">
                {section.items.map((item, i) => (
                  <DropDownCard
                    key={i}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    onClick={item.onClick}
                  />
                ))}
              </div>
            </div>
            {index !== sections.length - 1 && (
              <div className="h-[1px] w-full bg-[#E5EAEE] opacity-50"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </li>
  );
}
