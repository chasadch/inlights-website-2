"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function TrafficManagement() {
  const router = useRouter();

  return (
    <div className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="relative flex h-[1000px] w-full flex-col items-center justify-center bg-cover bg-center px-[70px] pt-[162px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/info/manage_city_traffic.png) lightgray -0.05px 0px / 100.006% 102.599% no-repeat",
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
                Traffic Management
              </button>
            </div>
            <h1 className="text-size-1 font-medium">
              Manage City Traffic with
            </h1>
            <h1
              className="bg-clip-text text-size-1 font-medium text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.31) 0%, rgba(255, 255, 255, 0.31) 100%), linear-gradient(216deg, #552DDA 5.71%, #507BD0 57.84%)",
              }}
            >
              Artificial Intelligence
            </h1>
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
          <div className="flex w-[599px] flex-col items-start gap-[24px]">
            <div className="flex w-[599px] flex-col items-start gap-[24px]">
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

          <div className="relative h-[489px] w-[655px] flex-shrink-0">
            <Image
              src="/geohealth/topic_customization.png"
              alt="Geohealth"
              width={655}
              height={489}
              className="flex-shrink-0 rounded-[11.84px] p-[12px]"
            />

            <span className="absolute left-[170px] top-1/2 -translate-y-1/2 text-[28px] font-semibold">
              Image Placeholder
            </span>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section className="flex items-center justify-between bg-black px-[70px] py-[140px]">
        <div className="flex w-[401px] flex-col items-start gap-[32px]">
          <div className="flex flex-col items-start gap-[20px]">
            <h1 className="text-size-2 font-normal">Let&apos;s talk</h1>
            <p className="w-[376px] text-size-5 font-normal opacity-70">
              Like our story? Contact now and create greatness together with us.
            </p>
          </div>
          <div className="h-[1px] w-[401px] bg-white opacity-20"></div>

          {/* Contact Info */}
          <div className="flex flex-col items-start gap-[20px]">
            {/* Email */}
            <div className="flex items-center gap-[26px]">
              <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
                <Image
                  src="/contact/email.png"
                  width={25}
                  height={20}
                  alt="Email"
                  className="absolute left-[12px] top-[15px]"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-size-3 font-bold">Our email</h1>
                <p className="text-size-5 font-normal opacity-70">
                  admin@inlights.com.pk
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-[26px]">
              <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
                <Image
                  src="/contact/call.png"
                  width={25}
                  height={20}
                  alt="Call"
                  className="absolute left-[12px] top-[15px]"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-size-3 font-bold">Call us</h1>
                <p className="text-size-5 font-normal opacity-70">
                  +92 3235353143
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-[26px]">
              <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
                <Image
                  src="/contact/map.png"
                  width={25}
                  height={20}
                  alt="Location"
                  className="absolute left-[12px] top-[15px]"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-size-3 font-bold">Find us</h1>
                <p className="text-size-5 font-normal opacity-70">
                  Open Google Maps
                </p>
              </div>
            </div>
          </div>

          <div className="h-[1px] w-[401px] bg-white opacity-20"></div>

          {/* Social Icons */}
          <div className="flex items-start gap-[40px] opacity-70">
            <Image
              src="/contact/facebook.png"
              alt="Facebook"
              width={12}
              height={22}
            />
            <Image
              src="/contact/instagram.png"
              alt="Facebook"
              width={23}
              height={23}
            />
            <Image
              src="/contact/linkedin.png"
              alt="Facebook"
              width={23}
              height={23}
            />
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex w-[695px] flex-col items-center justify-center gap-[30px] rounded-[20px] bg-[#050919] p-[36px] shadow-shadowCustom">
          <form className="flex w-full flex-col gap-[50px]">
            <div className="flex gap-[63px]">
              {/* First Name Input */}
              <div className="flex w-1/2 flex-col gap-[50px]">
                <label htmlFor="first-name" className="text-size-6 font-normal">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
                />
              </div>

              {/* Last Name Input */}
              <div className="flex w-1/2 flex-col gap-[50px]">
                <label htmlFor="last-name" className="text-size-6 font-normal">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
                />
              </div>
            </div>

            <div className="flex gap-[63px]">
              {/* Email Input */}
              <div className="flex w-1/2 flex-col gap-[50px]">
                <label htmlFor="email" className="text-size-6 font-normal">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
                />
              </div>

              {/* Phone Input */}
              <div className="flex w-1/2 flex-col gap-[50px]">
                <label htmlFor="phone" className="text-size-6 font-normal">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-size-6 font-normal">
                Message
              </label>
              <textarea
                id="message"
                className="resize-none border-b border-[#DFDFDF] bg-transparent text-white outline-none"
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button variant="gradient">Let&apos;s Talk</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
