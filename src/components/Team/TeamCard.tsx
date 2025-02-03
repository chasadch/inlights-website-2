import Image from "next/image";
import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

export default function TeamCard({ image, name, role }: TeamCardProps) {
  return (
    <div className="relative flex flex-col items-start gap-[16px]">
      <Image
        src={image}
        alt={name}
        width={350}
        height={417}
        style={{
          background:
            "linear-gradient(0deg, rgba(18,18,18,0.20) 0%, rgba(18,18,18,0.20) 100%), url('" +
            image +
            "') lightgray 50% / cover no-repeat",
        }}
        className="rounded-[17px]"
      />
      <div className="flex flex-col items-start gap-[10px]">
        <h1 className="text-center text-size-3 font-semibold">{name}</h1>
        <p className="text-center text-size-5 font-normal opacity-80">{role}</p>
      </div>
      <div className="absolute right-[7px] top-[15px] flex items-start gap-[8px]">
        <div className="flex cursor-pointer items-start gap-[7px]">
          <div className="relative h-[35px] w-[35px] rounded-full bg-[#FBFBFB]">
            <Image
              src="/team/facebook.png"
              alt="Linkedin"
              width={10}
              height={15}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[var(--Black,#0C0C0C)] stroke-[1.05px]"
            />
          </div>
        </div>
        <div className="flex cursor-pointer items-start gap-[7px]">
          <div className="relative h-[35px] w-[35px] rounded-full bg-[#FBFBFB]">
            <Image
              src="/team/instagram.png"
              alt="Linkedin"
              width={16}
              height={16}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[var(--Black,#0C0C0C)] stroke-[1.05px]"
            />
          </div>
        </div>
        <div className="flex cursor-pointer items-start gap-[7px]">
          <div className="relative h-[35px] w-[35px] rounded-full bg-[#FBFBFB]">
            <Image
              src="/team/linkedin.png"
              alt="Linkedin"
              width={14}
              height={14}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 stroke-[var(--Black,#0C0C0C)] stroke-[1.05px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
