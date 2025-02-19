"use client";

import Button from "@/components/Button";
import Contact from "@/sections/Contact/Contact";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PremiseSecurity() {
  const router = useRouter();

  return (
    <div className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="relative flex h-[500px] flex-col pt-[116px] lg:h-[961px] lg:pt-[161.09px]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/info/manage_city_traffic.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content container 375 pixels with higher z-index */}
        <div className="flex flex-col items-center gap-[48px] lg:hidden">
          <div className="flex flex-col items-center gap-[16px] self-stretch">
            <div className="flex flex-col items-center gap-[8.82px] self-stretch">
              <h1 className="text-center text-[28px] font-medium leading-[36.378px]">
                Manage Premise Security with
              </h1>
              <Image
                src="/premisesSecurity/artificial_intelligence.png"
                width={258.951}
                height={26.862}
                alt="Traffic Management"
              />
            </div>
          </div>

          <Button onClick={() => router.push("/contact")} variant="gradient">
            Let&apos;s Talk
          </Button>
        </div>

        <div className="relative mx-auto mt-auto h-[179.816px] w-[363.754px] flex-shrink-0 lg:hidden">
          <Image
            src="/products/manage_who_enters_your_premises.png"
            alt="hero"
            width={364} // matching the container's width (rounded)
            height={180} // matching the container's height (rounded)
            className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2"
          />
        </div>

        {/* Content container with higher z-index */}
        <div className="z-10 hidden flex-col items-center gap-[50px] lg:flex">
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

        {/* Image 1024 pixels and above */}
        <div className="hidden h-[495px] w-[1003px] flex-shrink-0 lg:block">
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
      <div
        className="bg-[url('/geohealth/bg.png')] bg-cover bg-center bg-no-repeat"
        // style={{ backgroundColor: "lightgray" }}
      >
        <div className="mx-auto flex max-w-[1440px] flex-shrink-0 flex-col items-center justify-between py-[120px] lg:flex-row lg:p-[70px]">
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
              className="flex-shrink-0 rounded-[11.84px] p-[12px]"
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

      <div className="flex items-center justify-center px-[16px] pt-[160px] lg:hidden lg:px-[70px] lg:py-[160px]">
        <div
          className="relative h-[209px] w-full overflow-hidden rounded-[32px] bg-cover bg-no-repeat lg:h-[209px] lg:w-[1000px] xl:w-[1100px] 2xl:w-[1200px]"
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

      {/* Contact section */}
      <Contact />
    </div>
  );
}
