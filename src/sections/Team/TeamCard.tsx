import Image from "next/image";
import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

export default function TeamCard({ image, name, role }: TeamCardProps) {
  return (
    <div className="group relative flex flex-col items-start gap-[16px] overflow-hidden">
      {/* Image */}
      <div className="relative h-[196.517px] w-full overflow-hidden rounded-[16px] border-[2px] border-white/15 lg:h-[417px]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Name and Role */}
      <div className="flex flex-col items-start lg:gap-[10px]">
        <h1 className="text-center text-size-6 font-semibold lg:text-size-3">
          {name}
        </h1>
        <p className="text-center text-size-7 font-normal opacity-80 lg:text-size-5">
          {role}
        </p>
      </div>

      {/* Social Icons */}
      <div className="absolute right-[7px] top-[10.2px] flex items-start gap-[8px] lg:lg:right-[13px] lg:lg:top-[15px] lg:-translate-y-[15%] lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
        {/* <div className="flex cursor-pointer items-start gap-[5.6px] transition-colors duration-300 lg:gap-[7px]">
          <div className="relative h-[28px] w-[28px] rounded-full bg-[#FBFBFB] transition-all duration-300 hover:bg-[#8794E0] lg:h-[35px] lg:w-[35px]">
            <div className="absolute left-1/2 top-1/2 h-[15px] w-[10px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply">
              <Image
                src="/team/facebook.svg"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div> */}
        {/* <div className="flex cursor-pointer items-start gap-[5.6px] transition-colors duration-300 lg:gap-[7px]">
          <div className="relative h-[28px] w-[28px] rounded-full bg-[#FBFBFB] transition-all duration-300 hover:bg-[#8794E0] lg:h-[35px] lg:w-[35px]">
            <div className="absolute left-1/2 top-1/2 h-[15.995px] w-[15.995px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply">
              <Image
                src="/team/instagram.svg"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div> */}
        <div className="flex cursor-pointer items-start gap-[5.6px] transition-colors duration-300 lg:gap-[7px]">
          <div className="relative h-[28px] w-[28px] rounded-full bg-[#FBFBFB] transition-all duration-300 hover:bg-[#8794E0] lg:h-[35px] lg:w-[35px]">
            <div className="absolute left-1/2 top-1/2 h-[15.995px] w-[15.995px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply">
              <Image
                src="/team/linkedin.svg"
                alt="Facebook"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
