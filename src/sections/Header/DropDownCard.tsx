import Image from "next/image";
import React from "react";

interface DropDownCardProps {
  imageSrc: string;
  title: string;
}

export default function DropDownCard({ imageSrc, title }: DropDownCardProps) {
  return (
    <div className="flex h-[152px] w-[183px] flex-col items-center justify-center gap-[16px] p-[20px]">
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
