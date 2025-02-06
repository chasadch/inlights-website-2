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
      className="flex h-[152px] w-[183px] flex-col items-center justify-center gap-[16px] rounded-[24px] bg-bg p-[20px] shadow-shadowCustom"
    >
      <Image
        src={imageSrc}
        alt={title}
        width={40}
        height={40}
        className="flex-shrink-0"
      />
      <span className="text-size-5 font-normal">{title}</span>
    </div>
  );
}
