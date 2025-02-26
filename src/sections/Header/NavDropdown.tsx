"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DropDownCard from "./DropDownCard";
import Underline from "@/components/Underline";

interface DropdownItem {
  imageSrc: string;
  title: string;
  path: string;
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
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // When route changes, close the dropdown
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <li
      className="relative flex flex-col items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <div className="flex cursor-pointer items-center justify-center gap-[4px] rounded-[8px] p-[12px]">
        <span className="relative text-size-4 font-semibold">
          {title}
          <Underline />
        </span>
        <Image
          src="/header/down_arrow.png"
          alt="arrow"
          width={16}
          height={16}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full z-10 flex flex-col items-start gap-[16px] rounded-[32px] border-[1px] border-borderCustom bg-bg p-[24px] shadow-shadowCustom transition-all duration-200 ease-in-out">
          {sections.map((section, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-start gap-[18px]">
                <span className="self-stretch font-lato text-size-4 font-semibold leading-[28.8px]">
                  {section.header}
                </span>
                <div className="flex items-start gap-[20px] self-stretch">
                  {section.items.map((item, i) => (
                    <DropDownCard
                      key={i}
                      imageSrc={item.imageSrc}
                      title={item.title}
                      onClick={() => router.push(item.path)}
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
      )}
    </li>
  );
}
