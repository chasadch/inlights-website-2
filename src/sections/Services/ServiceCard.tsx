import Image from "next/image";
import { MoveUpRight } from "lucide-react";
import React from "react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  linkText?: string;
  onClick: () => void;
}

export default function ServiceCard({
  image,
  title,
  description,
  linkText = "Discover InLights",
  onClick,
}: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="border-[rgba(45, 160, 184, 0.15)] flex flex-grow cursor-pointer flex-col items-start gap-[16px] rounded-[32px] border border-borderCustom bg-bg p-[24px] shadow-shadowCustom transition-transform duration-300 hover:scale-105"
    >
      {/* Service Icon */}
      <Image src={image} alt={title} width={72} height={72} />

      {/* Service Info */}
      <div className="flex flex-col items-start gap-[14px] self-stretch">
        <h1 className="text-size-3 font-bold">{title}</h1>
        <p
          className="w-[257px] overflow-hidden text-size-6 font-normal opacity-70"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {description}
        </p>

        {/* Link */}
        <div className="flex items-center gap-[9px] self-stretch py-[8px]">
          <span className="text-size-7 font-normal">{linkText}</span>
          <div className="flex h-[15px] w-[15px] items-center justify-center">
            <MoveUpRight width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
