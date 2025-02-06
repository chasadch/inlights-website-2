import Button from "@/components/Button";
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
          <div className="flex w-[746px] flex-col items-start gap-[18px]">
            <div className="flex items-center justify-center gap-[10px] rounded-[40px] bg-white px-[12px] py-[2px]">
              <button
                className="text-size-6 font-normal text-[#414C5C]"
                style={{ fontFamily: "Manrope" }}
              >
                GeoHealth
              </button>
            </div>
            <h1 className="w-[746px] text-[65.58px] font-bold leading-[94px]">
              Lorem Ipsum Nate decgade ibum
            </h1>
            <p className="w-[638px] text-size-4 font-normal opacity-70">
              A sophisticated automated content generation platform that
              revolutionizes how businesses create and manage their content.
            </p>
          </div>
          <Button>Let&apos; Talk</Button>
        </div>

        {/* Image */}
        <div className="h-[349px] w-[511px] flex-shrink-0">
          <div className="relative h-[349px] w-[511px] flex-shrink-0 rounded-[22px] bg-[#33A0F1]">
            <Image
              src={"/geohealth/geohealth_image1.png"}
              alt="Geohealth"
              width={428}
              height={253}
              className="absolute bottom-0 left-1/2 flex-shrink-0 -translate-x-1/2"
              style={{ borderRadius: "11.079px 11.079px 0px 0px" }}
            />
            <Image
              src={"/geohealth/star.png"}
              alt="Star"
              width={66}
              height={66}
              className="absolute right-[70px] top-[10px] flex-shrink-0"
              style={{ borderRadius: "11.079px 11.079px 0px 0px" }}
            />
            <div className="absolute -left-[20px] -top-[30px] h-[90px] w-[165px] flex-shrink-0">
              <div className="relative h-[90px] w-[165px] flex-shrink-0 rounded-[8px] bg-[#F1F371]">
                <Image
                  src={"/geohealth/geohealth.png"}
                  alt="Geohealth"
                  width={88}
                  height={24}
                  className="absolute left-1/2 top-1/2 flex-shrink-0 -translate-x-1/2 -translate-y-1/2"
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
            <div className="flex w-[599px] flex-col items-start gap-[24px]">
              <div className="flex flex-col items-start gap-[12px] self-stretch">
                <h1 className="self-stretch text-[52px] font-medium leading-[66px]">
                  1
                </h1>
                <h2 className="self-stretch text-[52px] font-medium leading-[66px]">
                  Topic Customization Engine
                </h2>
              </div>
              <p className="self-stretch text-size-4 font-medium opacity-80">
                Developed a robust system allowing users to define and customize
                their content topics post-registration
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

      {/* Tech section */}
      <div className="flex w-full flex-col items-start gap-[40px] px-[70px] py-[50px]">
        <h1 className="w-full text-center text-size-2 font-normal">
          Stacks Used
        </h1>
        <div className="flex w-[1300px] items-center justify-between rounded-[28px]">
          <div className="flex w-[249px] flex-shrink-0 flex-col items-center gap-[32px]">
            <h1 className="text-size-3 font-semibold">Frontend Architecture</h1>
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

          <div className="flex w-[249px] flex-shrink-0 flex-col items-center gap-[32px]">
            <h1 className="text-size-3 font-semibold">Data Flow</h1>
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

          <div className="flex w-[249px] flex-shrink-0 flex-col items-center gap-[32px]">
            <h1 className="text-size-3 font-semibold">UI Components</h1>
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

          <div className="flex w-[249px] flex-shrink-0 flex-col items-center gap-[32px]">
            <h1 className="text-size-3 font-semibold">Development Workflow</h1>
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
      <div className="bg-black px-[70px] py-[160px]">
        <div className="flex flex-col items-center justify-center gap-[64px] self-stretch py-[24px]">
          <div className="flex flex-col items-center justify-center gap-[40px] rounded-[32px] border-[1px] border-borderCustom bg-bg p-[40px] shadow-shadowCustom">
            <div className="flex items-center gap-[12px] self-stretch">
              <div className="flex flex-grow flex-col items-center justify-center gap-[32px]">
                <p className="text-center text-[24px] font-light leading-normal opacity-80">
                  InLights Solution has transformed our campus management. With
                  real-time tracking and automated scheduling, our facilities
                  are always in top condition, allowing us to focus on educating
                  our students
                </p>
                <div className="flex flex-col items-center justify-center gap-[16px]">
                  <Image
                    src={"/testimonials/ellipse.png"}
                    alt={"ellipse"}
                    width={42}
                    height={42}
                    className="rounded-[42px]"
                  />
                  <div className="flex flex-col items-center justify-center gap-[4px]">
                    <h1 className="text-size-5 font-medium">
                      Cameron Williamson
                    </h1>
                    <span className="text-center text-size-7 font-normal text-[#CCD1D8]">
                      CEO
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
