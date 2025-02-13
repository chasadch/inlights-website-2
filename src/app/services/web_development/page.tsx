import Button from "@/components/Button";
import CallToActionBackground from "@/sections/CallToAction/CallToActionBackground";
import Image from "next/image";
import React from "react";

export default function WebDevelopmentPage() {
  return (
    <div className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="flex h-[685px] w-full items-center justify-between gap-[16px] self-stretch bg-cover bg-center px-[70px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/about/about_hero.png) lightgray -0.05px 0px / 100.006% 102.599% no-repeat",
        }}
      >
        <div className="flex flex-col items-start gap-[17.612px] lg:w-[452px] xl:w-[552px] 2xl:w-[652px]">
          <h1 className="text-size-2 font-medium">Web Development</h1>
          <p className="text-size-4 font-normal opacity-70">
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
          className="relative flex-shrink-0 lg:h-[330px] lg:w-[373.827px] xl:w-[423.827px] 2xl:h-[380px] 2xl:w-[473.827px]"
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
            className="absolute left-[15px] top-[30px] z-10 h-[273.704px] w-[263.704px] flex-shrink-0 xl:h-[323.704px] xl:w-[293.704px] 2xl:left-[20px] 2xl:top-[35px] 2xl:w-[323.704px]"
          />
          <Image
            src={"/services/tablet.png"}
            alt=""
            width={256.461}
            height={256.461}
            className="absolute -right-[15px] -top-[15px] h-[206.461px] w-[196.461px] flex-shrink-0 xl:w-[226.461px] 2xl:-right-[20px] 2xl:-top-[20px] 2xl:h-[256.461px] 2xl:w-[256.461px]"
          />
        </div>
      </div>

      {/* Tech section */}
      <div
        className="flex h-[541px] w-full flex-col items-start justify-center gap-[10px] self-stretch py-[70px]"
        style={{ backgroundImage: "url(/statistics/bg.png)" }}
      >
        <div className="mx-auto inline-flex flex-col items-center gap-[40px]">
          <h1 className="text-[44px] font-normal">Our Tech Stack</h1>
          <div className="flex items-start gap-[44px] 2xl:gap-[64px]">
            <div className="flex h-[146px] w-[195px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/nodejs.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">NodeJS</span>
            </div>

            <div className="flex h-[146px] w-[195px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/express.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">
                Express
              </span>
            </div>

            <div className="flex h-[146px] w-[195px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/react.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">React</span>
            </div>

            <div className="flex h-[146px] w-[195px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/mongodb.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">
                MongoDB
              </span>
            </div>
          </div>

          <div className="flex items-start gap-[44px] 2xl:gap-[64px]">
            <div className="flex h-[146px] w-[195px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/nodejs.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">NodeJS</span>
            </div>

            <div className="flex h-[146px] w-[195px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/express.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">
                Express
              </span>
            </div>

            <div className="flex h-[146px] w-[195px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/react.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">React</span>
            </div>

            <div className="flex h-[146px] w-[195px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white xl:h-[146px] xl:w-[215px] 2xl:h-[156px] 2xl:w-[225px]">
              <Image
                src="/services/mongodb.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">
                MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Talent Section */}
      <div className="relative flex items-center justify-center px-[70px] py-[160px]">
        <div className="absolute inset-0 left-0 top-0 z-50">
          <CallToActionBackground />
        </div>
        <div
          className="relative h-[209px] overflow-hidden rounded-[32px] bg-cover bg-no-repeat lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px]"
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
