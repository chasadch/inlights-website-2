import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <div className="bg-black px-[20px] py-[80px] md:px-[70px] md:py-[160px]">
      <div className="flex flex-col items-center gap-[40px] md:gap-[64px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-[8px]">
          <h1 className="mb-[40px] w-full text-center text-size-2 font-normal md:mb-[64px] md:w-[864px]">
            Don’t take our word, see what customers say about us
          </h1>
        </div>

        {/* Testimonial Card */}
        <div className="flex w-full max-w-[1300px] flex-col items-center justify-center gap-[20px] rounded-[32px] border border-[rgba(45,160,184,0.15)] bg-[#050919] p-[24px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)] md:gap-[40px] md:p-[48px]">
          <div className="flex w-full items-center justify-between gap-[20px] md:gap-[128px]">
            {/* Left Arrow */}
            <div className="flex items-center justify-center rounded-[50px] p-[10px] hover:bg-white/10">
              <div className="flex h-[24px] w-[24px] items-center justify-center">
                <ArrowLeft width={24} height={24} />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="flex flex-1 flex-col items-center justify-center gap-[20px] md:gap-[32px]">
              <p className="w-full text-center text-[16px] font-normal opacity-80 md:text-[24px]">
                InLights Solutions has transformed our campus management. With
                real-time tracking and automated scheduling, our facilities are
                always in top condition, allowing us to focus on educating our
                students
              </p>
              <div className="flex flex-col items-center justify-center gap-[16px]">
                <Image
                  src={"/testimonials/ellipse.png"}
                  alt={"Testimonial 1"}
                  width={42}
                  height={42}
                  className="rounded-[42px]"
                />
                <div className="flex flex-col items-center gap-[4px]">
                  <div className="text-size-5 font-medium">
                    Cameron Williamson
                  </div>
                  <div className="text-size-7 font-normal">CEO</div>
                </div>

                {/* Dots */}
                <div className="flex -rotate-[90deg] flex-col items-start gap-[6px]">
                  <div className="h-[18px] w-[6px] rounded-[97px] bg-white"></div>
                  <div className="h-[6px] w-[6px] rounded-[97px] bg-[#929CAB]"></div>
                  <div className="h-[6px] w-[6px] rounded-[97px] bg-[#929CAB]"></div>
                  <div className="h-[6px] w-[6px] rounded-[97px] bg-[#929CAB]"></div>
                  <div className="h-[6px] w-[6px] rounded-[97px] bg-[#929CAB]"></div>
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <div className="flex items-center justify-center rounded-[50px] p-[10px] hover:bg-white/10">
              <div className="flex h-[24px] w-[24px] items-center justify-center">
                <ArrowRight width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
