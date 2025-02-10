import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  onClick: (title: string) => void;
}

export default function ProductCard({
  title,
  subtitle,
  description,
  imageSrc,
  onClick,
}: ProductCardProps) {
  return (
    <div
      onClick={() => onClick(title)}
      className="relative flex h-[426px] w-full flex-col items-start gap-[64px] overflow-hidden rounded-[32px] border-[1px] border-[rgba(45,160,184,0.15)] bg-bg px-[16px] py-[20px] shadow-shadowCustom transition-transform duration-300 hover:scale-105 xl:h-[591px] xl:p-[34px]"
    >
      <div className="flex cursor-pointer flex-col items-start justify-center gap-[20px] self-stretch xl:gap-[24px]">
        <div className="flex flex-col items-start gap-[34px] self-stretch">
          <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
            <h1 className="text-size-7 font-normal text-[#414C5C]">{title}</h1>
          </div>
          {/* Subheading */}
          <p className="w-full text-[20px] font-medium xl:w-[467px] xl:text-[34px]">
            {subtitle}
          </p>
          <p className="self-stretch text-size-7 font-normal opacity-70 xl:text-size-5">
            {description}
          </p>
          <div className="flex items-center gap-[9px] self-stretch py-[8px]">
            <span className="text-size-7 font-normal">Discover InLights</span>
            <div className="flex h-[15px] w-[15px] items-center justify-center">
              <MoveUpRight width={15} height={15} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-[66px] -left-[16px] h-[172px] w-[297px] xl:-bottom-[107px] xl:left-[16px] xl:h-[307px] xl:w-[567px]">
        <div className="border-opacity-44 h-[308px] w-[461px] flex-shrink-0 rounded-[12px]">
          <Image
            src={imageSrc}
            alt={title}
            width={566}
            height={307}
            className="absolute left-[16px]"
          />
        </div>
      </div>
    </div>
  );
}
