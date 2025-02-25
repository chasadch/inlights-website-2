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
      <div className="relative h-[196.517px] w-full overflow-hidden rounded-[16px] lg:h-[417px]">
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
      <div className="absolute bottom-[70px] right-[7px] flex -translate-y-[15%] items-start gap-[8px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 lg:right-[13px] lg:top-[15px]">
        <div className="flex cursor-pointer items-start gap-[5.6px] transition-colors duration-300 lg:gap-[7px]">
          <div className="relative h-[28px] w-[28px] rounded-full bg-[#FBFBFB] transition-all duration-300 hover:bg-[#8794E0] lg:h-[35px] lg:w-[35px]">
            <Image
              src="/team/facebook.png"
              alt="Facebook"
              width={10}
              height={15}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"
            />
          </div>
        </div>
        <div className="flex cursor-pointer items-start gap-[5.6px] transition-colors duration-300 lg:gap-[7px]">
          <div className="relative h-[28px] w-[28px] rounded-full bg-[#FBFBFB] transition-all duration-300 hover:bg-[#8794E0] lg:h-[35px] lg:w-[35px]">
            <Image
              src="/team/instagram.png"
              alt="Instagram"
              width={16}
              height={16}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
        <div className="flex cursor-pointer items-start gap-[5.6px] transition-colors duration-300 lg:gap-[7px]">
          <div className="relative h-[28px] w-[28px] rounded-full bg-[#FBFBFB] transition-all duration-300 hover:bg-[#8794E0] lg:h-[35px] lg:w-[35px]">
            <Image
              src="/team/linkedin.png"
              alt="Linkedin"
              width={14}
              height={14}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
