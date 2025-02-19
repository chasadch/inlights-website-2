import Button from "@/components/Button";
import CallToActionBackground from "@/sections/CallToAction/CallToActionBackground";
import Image from "next/image";
import React from "react";

export default function WebDevelopmentPage() {
  return (
    <div className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="flex h-screen w-full flex-col items-center justify-between gap-[16px] self-stretch bg-cover bg-center px-[70px] lg:flex-row"
        style={{
          background:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/about/about_hero.png) lightgray -0.05px 0px / 100.006% 102.599% no-repeat",
        }}
      >
        <div className="mx-auto flex w-[319px] flex-col items-center gap-[17.612px] pt-[115px] lg:w-[452px] lg:items-start lg:pt-[0px] xl:w-[552px] 2xl:w-[652px]">
          <h1 className="text-size-3 font-semibold lg:text-size-2 lg:font-medium">
            Web Development
          </h1>
          <p className="text-center text-size-6 font-normal opacity-70 lg:text-start lg:text-size-4">
            Attracting and retaining customers in today&apos;s digital age
            requires a strong online presence. A website that is visually
            appealing, easy to navigate, and optimized for search engines is
            essential to building your brand and reaching your target audience.
            Our web development services can help you achieve all of these goals
            and more. Our web development services include everything from
            initial planning and design to development, testing, and deployment.
            We use the latest web technologies to create websites that are
            responsive, fast-loading, and optimized for search engines. We also
            offer ongoing maintenance and support to ensure that your website
            remains up-to-date and secure.
          </p>
        </div>

        <div
          className="relative mx-auto h-[197.426px] w-[246.173px] flex-shrink-0 lg:h-[330px] lg:w-[373.827px] xl:w-[423.827px] 2xl:h-[380px] 2xl:w-[473.827px]"
          style={{
            backgroundImage: "url(/services/web_development/rectangle.png)",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src={"/services/laptop.png"}
            alt=""
            width={323.704}
            height={323.704}
            className="absolute left-[10px] top-[18px] z-10 h-[168.178px] w-[168.178px] flex-shrink-0 lg:left-[15px] lg:top-[30px] lg:h-[273.704px] lg:w-[263.704px] xl:h-[323.704px] xl:w-[293.704px] 2xl:left-[20px] 2xl:top-[35px] 2xl:w-[323.704px]"
          />
          <Image
            src={"/services/tablet.png"}
            alt=""
            width={256.461}
            height={256.461}
            className="absolute -right-[10px] -top-[10px] h-[133.242px] w-[133.242px] flex-shrink-0 lg:-right-[15px] lg:-top-[15px] lg:h-[206.461px] lg:w-[196.461px] xl:w-[226.461px] 2xl:-right-[20px] 2xl:-top-[20px] 2xl:h-[256.461px] 2xl:w-[256.461px]"
          />
        </div>
      </div>

      {/* Tech section */}
      <div className="flex h-[681px] w-full flex-col items-start justify-center gap-[10px] self-stretch bg-black py-[120px] lg:bg-[url('/statistics/bg.png')]">
        <div className="mx-auto flex w-[249px] flex-col items-center gap-[26px] lg:w-full lg:gap-[40px]">
          <h1 className="hidden text-[44px] font-normal lg:block">
            Our Tech Stack
          </h1>
          <h1 className="block text-[24px] font-medium lg:hidden">
            Stacks Used
          </h1>
          <div className="grid grid-cols-2 items-start gap-[16px] lg:grid-cols-4 lg:gap-[44px] 2xl:gap-[64px]">
            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/nodejs.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                NodeJS
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/express.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                Express
              </span>
            </div>
            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/react.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                React
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/mongodb.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                MongoDB
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/nodejs.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                NodeJS
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/express.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                Express
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/react.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                React
              </span>
            </div>

            <div className="flex h-[112px] w-[116.5px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white lg:h-[146px] lg:gap-[16px] xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/mongodb.png"
                alt=""
                width={56}
                height={56}
                className="h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]"
              />
              <span className="text-size-7 font-normal text-black lg:text-size-3">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Talent Section 375 pixels with higher z-index */}
      <div className="flex items-center justify-center px-[16px] pb-[100px] pt-[40px] lg:hidden lg:px-[70px] lg:py-[160px]">
        <div
          className="relative h-[160px] w-full overflow-hidden rounded-[32px] bg-cover bg-no-repeat lg:h-[209px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px]"
          style={{
            backgroundImage: "url('/portfolio/portfolio_call_to_action.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-[16px] text-center lg:gap-[24px]">
            {/* Text */}
            <p
              className="font-bold text-[#FBFBFB] lg:text-[45px]"
              style={{ fontFamily: "Roboto Serif" }}
            >
              Enough talk, let&apos;s get to work
            </p>
            {/* Button */}
            <Button variant="gradient">Let&apos;s Get In Touch</Button>
          </div>
        </div>
      </div>

      {/* Talent Section 1024 pixels with higher z-index */}
      <div className="relative hidden items-center justify-center px-[70px] py-[160px] lg:flex">
        <div className="absolute inset-0 left-0 top-0 z-10">
          <CallToActionBackground />
        </div>

        <div
          className="relative z-20 h-[209px] overflow-hidden rounded-[32px] bg-cover bg-no-repeat lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px]"
          style={{
            backgroundImage: "url('/portfolio/portfolio_call_to_action.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-[24px] text-center">
            {/* Text */}
            <p
              className="text-[45px] font-bold text-[#FBFBFB]"
              style={{ fontFamily: "Roboto Serif" }}
            >
              Enough talk, let&apos;s get to work
            </p>
            {/* Button */}
            <Button variant="gradient">Let&apos;s Get In Touch</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
