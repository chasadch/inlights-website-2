import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function SuccessStories() {
  return (
    <div className="bg-black px-[70px] py-[140px]">
      <div className="flex flex-col items-start gap-[64px] self-stretch">
        <div className="flex items-center justify-between gap-[48px] self-stretch">
          <div className="flex flex-col items-start gap-[8px]">
            <h1 className="text-size-2 font-normal">Our Success Stories</h1>
          </div>
          <div className="flex-grow-1 flex items-end justify-end gap-[10px]">
            <button className="flex h-[40px] w-[40px] items-center justify-center rounded-[900px] border-[1px] border-[#B4BBC6] p-[12px]">
              <Image
                src={"/successStories/left.png"}
                alt="Arrow"
                width={24}
                height={24}
              />
            </button>
            <button className="flex h-[40px] w-[40px] items-center justify-center rounded-[900px] border-[1px] border-[#B4BBC6] p-[12px]">
              <Image
                src={"/successStories/right.png"}
                alt="Arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-[24px]">
          {/* Card 1 */}
          <div className="border-borderCustom relative flex flex-col items-start gap-[34px] rounded-[32px] border-[1px] bg-bg shadow-custom">
            {/* Image with overlay */}
            <div
              className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-[20px]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(15, 25, 82, 0.11) 0%, rgba(15, 25, 82, 0.11) 100%), url('/successStories/coverPhoto_1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="absolute top-1/2 text-size-4 font-normal">
                GeoHealth
              </span>
            </div>
            {/* Text content */}
            <div className="flex flex-col items-start gap-[14px] self-stretch px-[24px] pb-[24px]">
              <h1 className="text-size-3 font-bold">
                AI-Powered Physical Exercise Coach
              </h1>
              <p className="h-[65px] overflow-hidden text-size-6 font-normal text-white opacity-70">
                AI-powered exercise monitoring system for real-time pose
                detection, angle measurements, and form correction feedback for
                various exercises.
              </p>
              <div className="flex items-center gap-[9px] self-stretch py-[8px]">
                <span className="text-size-7 font-normal">
                  Discover InLights
                </span>
                <div className="flex h-[15px] w-[15px] items-center justify-center">
                  <MoveUpRight width={15} height={15} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border-borderCustom relative flex flex-col items-start gap-[34px] rounded-[32px] border-[1px] bg-bg shadow-custom">
            {/* Image with overlay */}
            <div
              className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-[20px]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(15, 25, 82, 0.11) 0%, rgba(15, 25, 82, 0.11) 100%), url('/successStories/coverPhoto_2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="absolute top-1/2 text-size-4 font-normal">
                Manufacturing
              </span>
            </div>
            {/* Text content */}
            <div className="flex flex-col items-start gap-[14px] self-stretch px-[24px] pb-[24px]">
              <h1 className="text-size-3 font-bold">Project 2</h1>
              <p className="h-[65px] overflow-hidden text-size-6 font-normal text-white opacity-70">
                Manufacturers are achieving remarkable gains in productivity and
                efficiency with Emerald’s innovative solutions. Our preventive
                maintenance system has...
              </p>
              <div className="flex items-center gap-[9px] self-stretch py-[8px]">
                <span className="text-size-7 font-normal">Read More</span>
                <div className="flex h-[15px] w-[15px] items-center justify-center">
                  <MoveUpRight width={15} height={15} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border-borderCustom relative flex flex-col items-start gap-[34px] rounded-[32px] border-[1px] bg-bg shadow-custom">
            {/* Image with overlay */}
            <div
              className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-[20px]"
              style={{
                background:
                  "linear-gradient(0deg, rgba(15, 25, 82, 0.11) 0%, rgba(15, 25, 82, 0.11) 100%), url('/successStories/coverPhoto_3.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="absolute top-1/2 text-size-4 font-normal">
                Health Care
              </span>
            </div>
            {/* Text content */}
            <div className="flex flex-col items-start gap-[14px] self-stretch px-[24px] pb-[24px]">
              <h1 className="text-size-3 font-bold">Project 3</h1>
              <p className="h-[65px] overflow-hidden text-size-6 font-normal text-white opacity-70">
                Healthcare providers are witnessing notable enhancements in
                service quality and operational efficiency with Emerald’s
                cutting-edge platform. Our asse...
              </p>
              <div className="flex items-center gap-[9px] self-stretch py-[8px]">
                <span className="text-size-7 font-normal">Read More</span>
                <div className="flex h-[15px] w-[15px] items-center justify-center">
                  <MoveUpRight width={15} height={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
