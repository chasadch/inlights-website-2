"use client";

import Button from "@/components/Button";
import Contact from "@/sections/Contact/Contact";
import Testimonials from "@/sections/Testimonials/Testimonials";
import Image from "next/image";
import React from "react";

export default function GeoHealth() {
  return (
    <div className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="flex h-[810px] w-full items-center justify-between gap-[16px] self-stretch bg-cover bg-center px-[70px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/geohealth/geohealth_hero.png) lightgray -0.05px 0px / 100.006% 102.599% no-repeat",
        }}
      >
        <div className="inline-flex flex-col items-start gap-[50px]">
          <div className="flex flex-col items-start gap-[17.612px] xl:w-[746px]">
            <div className="flex items-center justify-center gap-[10px] rounded-[40px] bg-white px-[12px] py-[2px]">
              <button
                className="text-size-6 font-normal text-[#414C5C]"
                style={{ fontFamily: "Manrope" }}
              >
                GeoHealth
              </button>
            </div>
            <h1 className="font-bold leading-[94px] lg:w-[373px] lg:text-size-2 xl:w-[746px] xl:text-[65.58px]">
              GeoHealth
            </h1>
            <p className="text-size-4 font-normal opacity-70 lg:w-[438px] xl:w-[638px]">
              An AI-powered advanced exercise monitoring system that helps users
              maintain proper form during workouts through advanced computer
              vision and machine learning techniques.
            </p>
          </div>
          <Button>Let&apos;s Talk</Button>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 xl:h-[249px] xl:w-[411px] 2xl:h-[349px] 2xl:w-[511px]">
          <div className="relative flex-shrink-0 rounded-[22px] bg-[#33A0F1] lg:h-[249px] lg:w-[411px] 2xl:h-[349px] 2xl:w-[511px]">
            <Image
              src={"/geohealth/geohealth_image1.png"}
              alt="Geohealth"
              width={428}
              height={253}
              className="absolute bottom-0 left-1/2 flex-shrink-0 -translate-x-1/2 lg:h-[153px] lg:w-[318px] xl:h-[163px] xl:w-[328px] 2xl:h-[253px] 2xl:w-[428px]"
              style={{ borderRadius: "11.079px 11.079px 0px 0px" }}
            />
            <Image
              src={"/geohealth/star.png"}
              alt="Star"
              width={66}
              height={66}
              className="absolute right-[70px] top-[10px] flex-shrink-0 lg:h-[56px] lg:w-[56px] 2xl:h-[66px] 2xl:w-[66px]"
              style={{ borderRadius: "11.079px 11.079px 0px 0px" }}
            />
            <div className="absolute -left-[20px] -top-[30px] h-[90px] w-[165px] flex-shrink-0">
              <div className="relative h-[70px] w-[135px] flex-shrink-0 rounded-[8px] bg-[#F1F371] xl:h-[70px] xl:w-[135px] 2xl:h-[90px] 2xl:w-[165px]">
                <Image
                  src={"/geohealth/geohealth.png"}
                  alt="Geohealth"
                  width={88}
                  height={24}
                  className="absolute left-1/2 top-1/2 flex-shrink-0 -translate-x-1/2 -translate-y-1/2 xl:h-[24px] xl:w-[78px] 2xl:h-[24px] 2xl:w-[88px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Customization Engine */}
      <div
        className="bg-[url('/geohealth/bg.png')] bg-cover bg-center bg-no-repeat"
        // style={{ backgroundColor: "lightgray" }}
      >
        <div className="flex h-[585px] flex-shrink-0 items-center justify-between p-[70px]">
          <div className="flex w-[599px] flex-col items-start gap-[24px]">
            <div className="flex flex-col items-start gap-[12px] self-stretch">
              <h1 className="self-stretch text-[52px] font-medium leading-[66px]">
                Significance
              </h1>
            </div>
            <ul className="space-y-3 self-stretch text-size-4 opacity-80">
              <li>90%+ Accuracy in Pose Detection</li>
              <li>Exercise Variations Covered 2X Faster</li>
              <li>Form Correction Compared to Traditional Methods</li>
              <li>Seamless Integration with Dashboards</li>
              <li>Real-Time Feedback in Under 1 Second</li>
            </ul>
          </div>

          <div className="relative flex flex-shrink-0 items-center justify-center lg:h-[401px] lg:w-[382px] 2xl:h-[501px] 2xl:w-[632px]">
            <Image
              src="/geohealth/significance.png"
              alt="Geohealth"
              width={655}
              height={489}
              className="flex-shrink-0 rounded-[11.84px] p-[12px]"
            />
          </div>
        </div>
      </div>

      {/* Tech section */}
      <div className="flex w-full flex-col items-start gap-[40px] px-[70px] py-[50px]">
        <h1 className="w-full text-center text-size-2 font-normal">
          Stacks Used
        </h1>
        <div className="flex w-full items-center justify-between rounded-[28px]">
          <div className="flex flex-shrink-0 flex-col items-center gap-[32px] lg:w-[199px] xl:w-[249px]">
            <h1 className="font-semibold lg:text-size-4 xl:text-size-3">
              Frontend Architecture
            </h1>
            <div className="flex flex-col items-start gap-[12px]">
              <div className="flex h-[112px] w-[112px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white">
                <Image
                  src="/services/nodejs.png"
                  alt=""
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <span className="text-size-7 font-normal text-black">
                  NodeJS
                </span>
              </div>
              <div className="flex h-[112px] w-[112px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white">
                <Image
                  src="/services/nodejs.png"
                  alt=""
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <span className="text-size-7 font-normal text-black">
                  NodeJS
                </span>
              </div>
            </div>
          </div>
          <div className="h-[342px] w-[1px] bg-white opacity-50"></div>

          <div className="flex flex-shrink-0 flex-col items-center gap-[32px] lg:w-[199px] xl:w-[249px]">
            <h1 className="font-semibold lg:text-size-4 xl:text-size-3">
              Data Flow
            </h1>
            <div className="flex flex-col items-start gap-[12px]">
              <div className="flex h-[112px] w-[112px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white">
                <Image
                  src="/services/nodejs.png"
                  alt=""
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <span className="text-size-7 font-normal text-black">
                  NodeJS
                </span>
              </div>
              <div className="flex h-[112px] w-[112px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white">
                <Image
                  src="/services/nodejs.png"
                  alt=""
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <span className="text-size-7 font-normal text-black">
                  NodeJS
                </span>
              </div>
            </div>
          </div>
          <div className="h-[342px] w-[1px] bg-white opacity-50"></div>

          <div className="flex flex-shrink-0 flex-col items-center gap-[32px] lg:w-[199px] xl:w-[249px]">
            <h1 className="font-semibold lg:text-size-4 xl:text-size-3">
              UI Components
            </h1>
            <div className="flex flex-col items-start gap-[12px]">
              <div className="flex h-[112px] w-[112px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white">
                <Image
                  src="/services/nodejs.png"
                  alt=""
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <span className="text-size-7 font-normal text-black">
                  NodeJS
                </span>
              </div>
              <div className="flex h-[112px] w-[112px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white">
                <Image
                  src="/services/nodejs.png"
                  alt=""
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <span className="text-size-7 font-normal text-black">
                  NodeJS
                </span>
              </div>
            </div>
          </div>
          <div className="h-[342px] w-[1px] bg-white opacity-50"></div>

          <div className="flex flex-shrink-0 flex-col items-center gap-[32px] lg:w-[199px] xl:w-[249px]">
            <h1 className="font-semibold lg:text-size-4 xl:text-size-3">
              Development Workflow
            </h1>
            <div className="flex flex-col items-start gap-[12px]">
              <div className="flex h-[112px] w-[112px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white">
                <Image
                  src="/services/nodejs.png"
                  alt=""
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <span className="text-size-7 font-normal text-black">
                  NodeJS
                </span>
              </div>
              <div className="flex h-[112px] w-[112px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white">
                <Image
                  src="/services/nodejs.png"
                  alt=""
                  width={44}
                  height={44}
                  className="flex-shrink-0"
                />
                <span className="text-size-7 font-normal text-black">
                  NodeJS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <Testimonials />

      {/* Contact section */}
      <Contact />
    </div>
  );
}
