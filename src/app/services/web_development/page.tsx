import Button from "@/components/Button";
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
        <div className="flex w-[652px] flex-col items-start gap-[17.612px]">
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
          className="relative h-[380px] w-[473.827px] flex-shrink-0"
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
            className="absolute left-[20px] top-[35px] z-10 flex-shrink-0"
          />
          <Image
            src={"/services/tablet.png"}
            alt=""
            width={256.461}
            height={256.461}
            className="absolute -right-[20px] -top-[20px] flex-shrink-0"
          />
        </div>
      </div>

      {/* Tech section */}
      <div className="flex w-full flex-col items-start gap-[10px] self-stretch py-[70px]">
        <div className="mx-auto inline-flex flex-col items-center gap-[40px]">
          <h1 className="text-[44px] font-normal">Our Tech Stack</h1>
          <div className="flex items-start gap-[64px]">
            <div className="flex h-[156px] w-[225px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white">
              <Image
                src="/services/nodejs.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">NodeJS</span>
            </div>

            <div className="flex h-[156px] w-[225px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white">
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

            <div className="flex h-[156px] w-[225px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white">
              <Image
                src="/services/react.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">React</span>
            </div>

            <div className="flex h-[156px] w-[225px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white">
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

          <div className="flex items-start gap-[64px]">
            <div className="flex h-[156px] w-[225px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white">
              <Image
                src="/services/nodejs.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">NodeJS</span>
            </div>

            <div className="flex h-[156px] w-[225px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white">
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

            <div className="flex h-[156px] w-[225px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white">
              <Image
                src="/services/react.png"
                alt=""
                width={56}
                height={56}
                className="flex-shrink-0"
              />
              <span className="text-size-3 font-normal text-black">React</span>
            </div>

            <div className="flex h-[156px] w-[225px] flex-col items-center justify-center gap-[16px] rounded-[20px] bg-white">
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
      <div className="flex items-center justify-center py-[160px]">
        <div
          className="relative h-[209px] w-full max-w-[1301px] overflow-hidden rounded-[32px] bg-cover bg-no-repeat"
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
