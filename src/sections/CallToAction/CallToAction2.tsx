import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";
import CallToActionBackground from "./CallToActionBackground";

type CallToAction2Props = {
  mobilePaddingTop: string;
  mobilePaddingBottom: string;
  desktopPaddingTop: string;
  desktopPaddingBottom: string;
  isBackground: boolean;
};

export default function CallToAction2({
  mobilePaddingTop,
  mobilePaddingBottom,
  desktopPaddingTop,
  desktopPaddingBottom,
  isBackground,
}: CallToAction2Props) {
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
            <p
              className="text-center text-size-6 font-bold leading-normal text-[#FBFBFB] md:text-size-3 lg:text-[36px] xl:text-size-2"
              style={{ fontFamily: "Roboto Serif" }}
            >
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
        className="relative hidden w-full items-center justify-center px-[120px] lg:flex"
        style={{
          paddingBottom: desktopPaddingBottom,
          paddingTop: desktopPaddingTop,
        }}
      >
        {/* Background SVG */}
        <div className="absolute inset-0 left-0 top-0 z-10">
          {isBackground && <CallToActionBackground />}
        </div>

        <div
          className="relative h-[209px] w-full max-w-[1440px] overflow-hidden rounded-[32px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/callToAction/call_to_action_laptop.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[24px] lg:px-[60px]">
            {/* Text */}
            <p className="font-roboto text-size-7 font-bold text-white lg:text-[36px] xl:text-size-2">
              Enough talk, let’s get to work
            </p>
            {/* Button */}
            <Button onClick={() => router.push("/jobs")} variant="gradient">
              Let&apos;s Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
