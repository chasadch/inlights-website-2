"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

type CallToActionProps = {
  mobilePaddingTop: string;
  mobilePaddingBottom: string;
  desktopPaddingTop: string;
  desktopPaddingBottom: string;
};

export default function CallToAction({
  mobilePaddingTop,
  mobilePaddingBottom,
  desktopPaddingTop,
  desktopPaddingBottom,
}: CallToActionProps) {
  const router = useRouter();

  return (
    <>
      {/* Talent Section (375 px) */}
      <div
        className={`flex w-full items-center justify-center px-[16px] md:py-[100px] lg:hidden lg:px-[70px]`}
        style={{
          paddingBottom: mobilePaddingBottom,
          paddingTop: mobilePaddingTop,
        }}
      >
        <div
          className="relative h-[182px] w-full overflow-hidden rounded-[32px] bg-cover bg-no-repeat lg:h-[255px]"
          style={{
            backgroundImage: "url('/callToAction/call_to_action_mobile.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[24px] lg:flex-row lg:justify-between lg:px-[60px]">
            {/* Text */}
            <p className="text-center font-roboto text-size-6 font-bold leading-normal text-[#FBFBFB] md:text-size-3 lg:text-[36px] xl:text-size-2">
              Enough talk, let&apos;s get to work
            </p>
            {/* Button */}
            <Button onClick={() => router.push("/jobs")} variant="gradient">
              Let&apos;s Get in Touch
            </Button>
          </div>
        </div>
      </div>
      {/* Talent Section (1024 px)*/}
      <div
        className="hidden w-full items-center justify-center px-[70px] lg:flex"
        style={{
          paddingBottom: desktopPaddingBottom,
          paddingTop: desktopPaddingTop,
        }}
      >
        <div
          className="relative h-[182px] w-full max-w-screen-xl overflow-hidden rounded-[32px] bg-cover bg-no-repeat lg:h-[255px]"
          style={{
            backgroundImage: "url('/services/this_is_engineering_lg.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[24px] sm:flex-row sm:justify-between lg:px-[60px]">
            {/* Text */}
            <p className="text-size-7 font-normal text-white lg:text-[36px] xl:text-size-2">
              We Are Looking for Exceptional Talent
            </p>
            {/* Button */}
            <Button onClick={() => router.push("/jobs")} variant="gradient">
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
