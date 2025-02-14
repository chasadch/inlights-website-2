import Image from "next/image";
import React from "react";

interface DropDownCardProps {
  imageSrc: string;
  title: string;
  onClick: () => void;
}

export default function DropDownCard({
  imageSrc,
  title,
  onClick,
}: DropDownCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex h-[152px] cursor-pointer flex-col items-center justify-center gap-[16px] rounded-[24px] bg-bg p-[20px] shadow-shadowCustom lg:w-[143px] xl:w-[163px] 2xl:w-[183px]"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={40}
        height={40}
        className="flex-shrink-0"
      />
      <span className="font-normal lg:text-size-7 xl:text-size-6 2xl:text-size-6">
        {title}
      </span>
    </div>
  );
}
