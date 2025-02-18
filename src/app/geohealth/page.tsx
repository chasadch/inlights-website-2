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
        className="h-[790px] w-full items-center justify-between gap-[16px] self-stretch bg-cover bg-center px-[16px] pt-[119px] lg:flex lg:px-[70px] lg:pt-[0px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/geohealth/geohealth_hero.png) lightgray -0.05px 0px / 100.006% 102.599% no-repeat",
        }}
      >
        <div className="flex flex-col items-start gap-[49.727px]">
          <div className="flex flex-col items-start gap-[17.612px] xl:w-[746px]">
            <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
              <button
                className="text-size-7 font-normal text-[#414C5C] lg:text-size-6"
                style={{ fontFamily: "Manrope" }}
              >
                GeoHealth
              </button>
            </div>
            <h1 className="block text-[24px] font-bold leading-[32px] lg:hidden lg:w-[373px] lg:text-size-2 lg:leading-[94px] xl:w-[746px] xl:text-[65.58px]">
              Lorem Ipsum Nate decgade ibum
            </h1>
            <h1 className="hidden text-[24px] font-bold leading-[32px] lg:block lg:w-[373px] lg:text-size-2 lg:leading-[94px] xl:w-[746px] xl:text-[65.58px]">
              GeoHealth
            </h1>
            <p className="block text-size-7 font-normal opacity-70 lg:hidden lg:w-[438px] lg:text-size-4 xl:w-[638px]">
              A sophisticated automated content generation platform that
              revolutionizes how businesses create and manage their content.
            </p>
            <p className="hidden text-size-7 font-normal opacity-70 lg:block lg:w-[438px] lg:text-size-4 xl:w-[638px]">
              An AI-powered advanced exercise monitoring system that helps users
              maintain proper form during workouts through advanced computer
              vision and machine learning techniques.
            </p>
          </div>
          <Button variant="gradient">Let&apos;s Talk</Button>
        </div>

        {/* Image */}
        <div className="mx-auto h-[199.559px] w-[292.211px] flex-shrink-0 pt-[122px] lg:pt-[0px] xl:h-[249px] xl:w-[411px] 2xl:h-[349px] 2xl:w-[511px]">
          <div className="lg:ounded-[22px] relative h-[199.559px] w-[292.211px] flex-shrink-0 rounded-[12.67px] bg-[#33A0F1] lg:h-[249px] lg:w-[411px] 2xl:h-[349px] 2xl:w-[511px]">
            <Image
              src={"/geohealth/geohealth_image1.png"}
              alt="Geohealth"
              width={428}
              height={253}
              className="absolute bottom-0 left-1/2 h-[144.918px] w-[244.697px] flex-shrink-0 -translate-x-1/2 lg:h-[153px] lg:w-[318px] xl:h-[163px] xl:w-[328px] 2xl:h-[253px] 2xl:w-[428px]"
              style={{ borderRadius: "11.079px 11.079px 0px 0px" }}
            />
            <Image
              src={"/geohealth/star.png"}
              alt="Star"
              width={66}
              height={66}
              className="absolute right-[40px] top-[10px] h-[38.011px] w-[38.011px] flex-shrink-0 lg:right-[70px] lg:h-[56px] lg:w-[56px] 2xl:h-[66px] 2xl:w-[66px]"
              style={{ borderRadius: "11.079px 11.079px 0px 0px" }}
            />
            <div className="absolute -left-[20px] -top-[30px] h-[90px] w-[165px] flex-shrink-0">
              <div className="relative h-[51.631px] w-[94.322px] flex-shrink-0 rounded-[4.465px] bg-[#F1F371] lg:h-[70px] lg:w-[135px] lg:rounded-[8px] xl:h-[70px] xl:w-[135px] 2xl:h-[90px] 2xl:w-[165px]">
                <Image
                  src={"/geohealth/geohealth.png"}
                  alt="Geohealth"
                  width={88}
                  height={24}
                  className="absolute left-1/2 top-1/2 h-[13.954px] w-[50.228px] flex-shrink-0 -translate-x-1/2 -translate-y-1/2 xl:h-[24px] xl:w-[78px] 2xl:h-[24px] 2xl:w-[88px]"
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
        <div className="flex flex-shrink-0 flex-col items-center justify-between pb-[70px] pt-[100px] lg:flex-row lg:p-[70px]">
          <div className="flex w-[343px] flex-col items-start gap-[24px] lg:w-[709px]">
            <div className="flex flex-col items-start gap-[12px] self-stretch">
              <h1 className="block text-[24px] font-normal leading-[32px] lg:hidden">
                1
              </h1>
              <h1 className="block self-stretch text-[24px] font-medium leading-[32px] lg:hidden lg:text-[52px] lg:leading-[66px]">
                Topic Customization Engine
              </h1>
              <h1 className="hidden self-stretch text-[24px] font-medium leading-[32px] lg:block lg:text-[52px] lg:leading-[66px]">
                Significance
              </h1>
            </div>
            <p className="flex self-stretch text-size-6 font-medium leading-[24px] opacity-80 lg:hidden">
              Developed a robust system allowing users to define and customize
              their content topics post-registration
            </p>
            <ul className="hidden space-y-3 self-stretch text-size-4 opacity-80 lg:block">
              <li>90%+ Accuracy in Pose Detection</li>
              <li>Exercise Variations Covered 2X Faster</li>
              <li>Form Correction Compared to Traditional Methods</li>
              <li>Seamless Integration with Dashboards</li>
              <li>Real-Time Feedback in Under 1 Second</li>
            </ul>
          </div>

          <div className="relative flex w-[375px] flex-shrink-0 items-center justify-center lg:hidden lg:h-[401px] lg:w-[382px] 2xl:h-[501px] 2xl:w-[632px]">
            <Image
              src="/geohealth/geohealth_image2.png"
              alt="Geohealth"
              width={655}
              height={489}
              className="flex-shrink-0 rounded-[11.84px] p-[16px]"
            />
          </div>
          <div className="relative hidden flex-shrink-0 items-center justify-center lg:flex lg:h-[401px] lg:w-[382px] 2xl:h-[501px] 2xl:w-[632px]">
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

      {/* Stacks section */}
      <div className="flex w-full flex-col items-start gap-[26px] py-[100px] lg:gap-[40px] lg:px-[70px]">
        <h1 className="w-full text-center text-[24px] font-medium leading-[32px] lg:text-size-2 lg:font-normal">
          Stacks Used
        </h1>
        <div className="flex w-full flex-col items-center justify-between gap-[48px] rounded-[28px] lg:flex-row">
          <div className="flex flex-shrink-0 flex-col items-center gap-[20px] lg:w-[199px] lg:gap-[32px] xl:w-[249px]">
            <h1 className="text-size-4 font-semibold xl:text-size-3">
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

          <div className="flex flex-shrink-0 flex-col items-center gap-[20px] lg:w-[199px] lg:gap-[32px] xl:w-[249px]">
            <h1 className="text-size-4 font-semibold xl:text-size-3">
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

          <div className="flex flex-shrink-0 flex-col items-center gap-[20px] lg:w-[199px] lg:gap-[32px] xl:w-[249px]">
            <h1 className="text-size-4 font-semibold xl:text-size-3">
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

          <div className="flex flex-shrink-0 flex-col items-center gap-[20px] lg:w-[199px] lg:gap-[32px] xl:w-[249px]">
            <h1 className="text-size-4 font-semibold xl:text-size-3">
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
