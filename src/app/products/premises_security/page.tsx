"use client";

import Button from "@/components/Button";
import Contact from "@/sections/Contact/Contact";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function PremiseSecurity() {
  const router = useRouter();

  return (
    <div className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="relative flex h-[961px] flex-col items-center justify-center px-[70px] pt-[162px]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/info/manage_city_traffic.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content container with higher z-index */}
        <div className="z-10 inline-flex flex-col items-center gap-[50px]">
          <div className="flex w-[949px] flex-col items-center gap-[18px]">
            <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
              <button
                className="text-size-6 font-normal text-[#414C5C]"
                style={{ fontFamily: "Manrope" }}
              >
                Premise Security
              </button>
            </div>
            <h1 className="text-[67px] font-medium">
              Manage Premise Security with
            </h1>
            <Image
              src="/premisesSecurity/artificial_intelligence.png"
              width={801.667}
              height={83.16}
              alt="Premise Security"
            />
          </div>
          <Button onClick={() => router.push("/contact")} variant="gradient">
            Let&apos;s Talk
          </Button>
        </div>

        {/* Image */}
        <div className="h-[495px] w-[1003px] flex-shrink-0">
          <Image
            src={"/info/manage_city_traffic_2.png"}
            alt="hero"
            width={1003}
            height={495}
            className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2"
          />
        </div>
      </div>

      {/* Topic Customization Engine */}
      <div className="bg-[url('/geohealth/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-[585px] flex-shrink-0 items-center justify-between p-[70px]">
          <div className="flex flex-col items-start gap-[24px] lg:w-[399px] xl:w-[499px] 2xl:w-[599px]">
            <div className="flex flex-col items-start gap-[24px] lg:w-[399px] xl:w-[499px] 2xl:w-[599px]">
              <div className="flex flex-col items-start gap-[12px] self-stretch">
                <h1 className="self-stretch text-[52px] font-medium leading-[66px]">
                  1. Easy to use
                </h1>
              </div>
              <p className="self-stretch text-size-4 font-medium opacity-80">
                Easy to use easy to use Easy to use easy to use Easy to use easy
                to use Easy to use easy to use vEasy to use easy to use
              </p>
            </div>
          </div>

          <div className="relative flex-shrink-0 lg:w-[439px] xl:h-[389px] xl:w-[555px] 2xl:w-[655px]">
            <Image
              src="/geohealth/topic_customization.png"
              alt="Geohealth"
              width={655}
              height={489}
              className="flex-shrink-0 rounded-[11.84px] p-[12px]"
            />

            <span className="absolute -translate-y-1/2 font-semibold lg:left-[110px] lg:top-[50%] lg:text-[17px] xl:left-[140px] xl:top-[54%] xl:text-[22px] 2xl:left-[150px] 2xl:top-[64%] 2xl:text-[28px]">
              Image Placeholder
            </span>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <Contact />
    </div>
  );
}
