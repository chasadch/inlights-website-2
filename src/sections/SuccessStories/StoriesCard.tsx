import { MoveUpRight } from "lucide-react";
import React from "react";

interface StoriesCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function StoriesCard({
  title,
  category,
  description,
  image,
}: StoriesCardProps) {
  return (
    <div className="relative flex w-full flex-[1_0_0] flex-col items-start gap-[34px] rounded-[32px] border-[1px] border-borderCustom bg-bg shadow-shadowCustom">
      {/* Image with overlay */}
      <div
        className="relative flex h-[174px] flex-col items-center justify-center gap-[10px] self-stretch overflow-hidden rounded-[18px] bg-cover bg-center lg:rounded-[20px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* 🔥 Fixed overlay: Now it covers the entire image */}
        <div className="absolute inset-0 bg-[rgba(18,19,22,0.46)] backdrop-blur-[1px]"></div>

        <span className="relative z-10 text-size-4 font-normal">
          {category}
        </span>
      </div>

      {/* Text content */}
      <div className="flex flex-col items-start gap-[14px] self-stretch px-[24px] pb-[24px]">
        <h1 className="self-stretch text-size-4 font-bold lg:text-size-3">
          {title}
        </h1>
        <p className="h-[65px] overflow-hidden text-size-7 font-normal text-white opacity-70 lg:text-size-6">
          {description}
        </p>
        <div className="flex items-center gap-[9px] self-stretch py-[8px]">
          <span className="text-size-7 font-normal">Read More</span>
          <div className="flex h-[15px] w-[15px] items-center justify-center">
            <MoveUpRight width={15} height={15} />
          </div>
        </div>
      </div>
    </div>
  );
}
