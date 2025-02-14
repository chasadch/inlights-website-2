"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import Gradient from "./Gradient";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative h-[585px] self-stretch overflow-hidden pb-[336px] pt-[130px] text-center text-white lg:h-[810px] lg:pt-[161px]"
      style={{
        background:
          "linear-gradient(0deg, rgba(9, 17, 33, 0.80) 0%, rgba(9, 17, 33, 0.80) 100%)",
      }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Top Overlay */}
      <div
        className="absolute inset-0 z-10 bg-opacity-80"
        style={{
          background: "rgba(9, 17, 33, 0.8)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 inline-flex flex-col items-center gap-[48px] lg:gap-[50px]">
        {/* Main Heading */}
        <div className="flex flex-col items-center gap-[16px] self-stretch lg:gap-[18px]">
          {/* First heading */}
          <h1 className="text-[28px] font-medium lg:text-size-1">
            Redefining Smart Cities using
          </h1>
          {/* Second heading */}
          <Gradient />
        </div>

        {/* Let's talk button */}
        <Button onClick={() => router.push("/contact")} variant="gradient">
          Let&apos;s Talk
        </Button>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-[87px] left-1/2 z-20 inline-flex w-[523.724px] -translate-x-1/2 flex-col items-start justify-center gap-[64px]">
        <div className="flex w-[523.724px] flex-col items-center gap-[16px]">
          {/* Paragraph */}
          <p className="text-size-7 font-normal opacity-90 lg:text-size-5">
            IN PARTNERSHIP WITH
          </p>
          {/* Image container */}
          <div className="flex items-center gap-[40px] lg:gap-[62px]">
            {/* Image 1 */}
            <Image
              src={"/hero/ntdp.png"}
              alt="Ntdp image"
              width={52.847}
              height={54}
              className="h-[40.5px] w-[39.636px] lg:h-[54px] lg:w-[52.847px]"
            />
            {/* Image 2 */}
            <Image
              src={"/hero/sdaia.png"}
              alt="Sdaia image"
              width={107.724}
              height={24.094}
              className="h-[18.07px] w-[80.807px] lg:h-[24.094px] lg:w-[107.724px]"
            />
            {/* Image 3 */}
            <Image
              src={"/hero/nstp_new_2.png"}
              alt="Nstp image"
              width={54}
              height={54}
              className="h-[40.5px] w-[40.5px] lg:h-[54px] lg:w-[54px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
