import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Testimonials() {
  return (
    <div className="bg-black px-[70px] py-[160px]">
      <div className="flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center gap-[8px]">
          <h1 className="mb-[64px] w-[864px] text-center text-size-2 font-normal">
            Don’t take our word, see what customers say about us
          </h1>
          <div className="flex w-[1300px] flex-col items-center justify-center gap-[40px] rounded-[32px] border border-[rgba(45,160,184,0.15)] bg-[#050919] p-[48px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)]">
            <div className="flex items-center gap-[128px]">
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center gap-[10px] rounded-[50px] p-[10px]">
                  <div className="flex h-[24px] w-[24px] items-center justify-center">
                    <ArrowLeft width={24} height={24} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center gap-[32px]">
                <p className="self-stretch text-center text-[24px] font-normal opacity-80">
                  InLights Solutions has transformed our campus management. With
                  real-time tracking and automated scheduling, our facilities
                  are always in top condition, allowing us to focus on educating
                  our students
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

                  <div className="flex -rotate-[90deg] flex-col items-start gap-[6px]">
                    <div className="h-[18px] w-[6px] rounded-[97px] bg-white"></div>
                    <div className="h-[6px] w-[6px] rounded-[97px] bg-[#929CAB]"></div>
                    <div className="h-[6px] w-[6px] rounded-[97px] bg-[#929CAB]"></div>
                    <div className="h-[6px] w-[6px] rounded-[97px] bg-[#929CAB]"></div>
                    <div className="h-[6px] w-[6px] rounded-[97px] bg-[#929CAB]"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-[10px] rounded-[50px] p-[10px]">
                <div className="flex h-[24px] w-[24px] items-center justify-center">
                  <ArrowRight width={24} height={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
