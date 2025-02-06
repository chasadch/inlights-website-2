"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function JobsPage() {
  const router = useRouter();
  const handleJobClick = (jobName: string) => {
    if (jobName === "AI Engineer") router.push("/jobs/ai-engineer");
  };

  return (
    <section className="bg-[#03030E]">
      {/* Hero Section */}
      <div
        className="relative h-[528px] bg-cover bg-center"
        style={{
          background:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/jobs/this_is_engineering.png) lightgray -0.05px 0px / 100.006% 102.599% no-repeat",
        }}
      >
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-[18px]">
          <button className="flex items-center justify-center gap-[0.625rem] rounded-[40px] bg-white px-[12px] py-[2px] text-size-7 font-normal text-[#06121B]">
            We&apos; are Hiring
          </button>
          <h1 className="text-size-2 font-medium">Be a part of our Mission</h1>
          <p className="text-size-4 font-normal opacity-70">
            Look at the open positions below
          </p>
        </div>
      </div>

      {/* Jobs section */}
      <div className="flex flex-col items-start gap-[20px] p-[70px]">
        <div className="flex flex-col items-start gap-[32px] self-stretch rounded-[24px] p-[28px]">
          <div className="flex flex-col items-start gap-[4px] self-stretch">
            <div className="flex items-center justify-between self-stretch">
              <h1 className="text-size-3 font-semibold">AI Engineer</h1>
              <Button onClick={() => handleJobClick("AI Engineer")}>
                Apply
              </Button>
            </div>
            <p className="w-[880px] text-size-6 font-normal opacity-80">
              Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
              La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
              gasiliaseIpsum thora Ista La Vista irtim gasiliase
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
              <Image
                src="/jobs/location_on.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span className="text-size-6 font-normal">Remote</span>
            </div>

            <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
              <Image
                src="/jobs/schedule.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span className="text-size-6 font-normal">Full Time</span>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white"></div>

        <div className="flex flex-col items-start gap-[32px] self-stretch rounded-[24px] p-[28px]">
          <div className="flex flex-col items-start gap-[4px] self-stretch">
            <div className="flex items-center justify-between self-stretch">
              <h1 className="text-size-3 font-semibold">AI Engineer</h1>
              <Button>Apply</Button>
            </div>
            <p className="w-[880px] text-size-6 font-normal opacity-80">
              Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
              La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
              gasiliaseIpsum thora Ista La Vista irtim gasiliase
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
              <Image
                src="/jobs/location_on.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span className="text-size-6 font-normal">Remote</span>
            </div>

            <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
              <Image
                src="/jobs/schedule.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span className="text-size-6 font-normal">Full Time</span>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white"></div>

        <div className="flex flex-col items-start gap-[32px] self-stretch rounded-[24px] p-[28px]">
          <div className="flex flex-col items-start gap-[4px] self-stretch">
            <div className="flex items-center justify-between self-stretch">
              <h1 className="text-size-3 font-semibold">AI Engineer</h1>
              <Button>Apply</Button>
            </div>
            <p className="w-[880px] text-size-6 font-normal opacity-80">
              Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
              La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
              gasiliaseIpsum thora Ista La Vista irtim gasiliase
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
              <Image
                src="/jobs/location_on.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span className="text-size-6 font-normal">Remote</span>
            </div>

            <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
              <Image
                src="/jobs/schedule.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span className="text-size-6 font-normal">Full Time</span>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white"></div>

        <div className="flex flex-col items-start gap-[32px] self-stretch rounded-[24px] p-[28px]">
          <div className="flex flex-col items-start gap-[4px] self-stretch">
            <div className="flex items-center justify-between self-stretch">
              <h1 className="text-size-3 font-semibold">AI Engineer</h1>
              <Button>Apply</Button>
            </div>
            <p className="w-[880px] text-size-6 font-normal opacity-80">
              Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
              La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
              gasiliaseIpsum thora Ista La Vista irtim gasiliase
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
              <Image
                src="/jobs/location_on.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span className="text-size-6 font-normal">Remote</span>
            </div>

            <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
              <Image
                src="/jobs/schedule.png"
                alt="Location"
                width={20}
                height={20}
              />
              <span className="text-size-6 font-normal">Full Time</span>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white"></div>
      </div>
    </section>
  );
}
