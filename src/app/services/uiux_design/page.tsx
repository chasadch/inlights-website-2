"use client";

import CallToAction from "@/sections/CallToAction/CallToAction";
import CallToAction2 from "@/sections/CallToAction/CallToAction2";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function UIUXDesignPage() {
  return (
    <div className="relative self-stretch bg-[#050919]">
      <div className="h-[687px] bg-[linear-gradient(0deg,rgba(9,17,33,0.12)_0%,rgba(9,17,33,0.12)_100%),url('/services/this_is_engineering_sm.png')] bg-cover bg-center bg-no-repeat sm:bg-[linear-gradient(0deg,rgba(9,17,33,0.32)_0%,rgba(9,17,33,0.32)_100%),url('/about/about_hero.png')] lg:h-[685px]">
        {/* Hero Section */}
        <div className="mx-auto flex h-[685px] w-full max-w-[1440px] flex-col gap-[16px] self-stretch pt-[100px] lg:h-[839.499px] lg:flex-row lg:justify-between lg:pr-[71.17px] lg:pt-[198px]">
          <div className="mx-auto flex w-[319px] flex-col items-center gap-[17.612px] lg:w-[452px] lg:items-start xl:w-[552px] 2xl:w-[565px]">
            <h1 className="text-size-3 font-semibold lg:text-size-2 lg:font-medium">
              UI/UX Design
            </h1>
            <p className="text-center text-size-6 font-normal opacity-70 lg:text-start lg:text-size-4">
              Our product design services cover the entire cycle from
              conceptualization to the development of successful products,
              including strategic development, technical engineering, and
              aesthetic performance. We can assist you at every step of the
              product development process through our comprehensive UI/UX design
              services and integrated approach. Our ability to design innovative
              mobile and web user experiences ensures that your product will
              appeal to its intended audience.
            </p>
          </div>

          <div
            className="relative mx-auto mt-[72.39px] h-[197.426px] w-[246.173px] flex-shrink-0 lg:mt-0 lg:h-[330px] lg:w-[373.827px] xl:w-[423.827px] 2xl:h-[380px] 2xl:w-[473.827px]"
            style={{
              backgroundImage: "url(/services/web_development/rectangle.png)",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              src={"/services/uiux-design/alexix.png"}
              alt=""
              width={380}
              height={449}
              className="absolute right-[7.25rem] top-[1.75rem] z-20 h-[234px] w-[203px] flex-shrink-0 lg:right-[12rem] lg:top-[2.5rem] lg:h-[349px] lg:w-[280px] xl:right-[13rem] xl:h-[399px] xl:w-[330px] 2xl:right-[14rem] 2xl:h-[449px] 2xl:w-[380px]"
            />
            <Image
              src={"/services/uiux-design/alexix2.png"}
              alt=""
              width={383}
              height={503}
              className="absolute right-[2.5rem] top-0 z-10 h-[261px] w-[203px] flex-shrink-0 lg:h-[403px] lg:w-[283px] xl:h-[453px] xl:w-[333px] 2xl:h-[503px] 2xl:w-[383px]"
            />
            <Image
              src={"/services/uiux-design/alexix3.png"}
              alt=""
              width={379}
              height={522}
              className="absolute -right-[3.5rem] -top-[1.5rem] h-[283px] w-[193px] flex-shrink-0 lg:h-[422px] lg:w-[279px] xl:h-[472px] xl:w-[329px] 2xl:h-[522px] 2xl:w-[379px]"
            />
          </div>
        </div>
      </div>

      {/* Tech section */}
      <div className="flex w-full flex-col items-start justify-center gap-[10px] self-stretch bg-[url('/statistics/bg.png')] py-[90px] lg:h-[681px] lg:bg-cover lg:bg-no-repeat">
        <div className="mx-auto flex flex-col items-center gap-[40px] lg:items-start lg:gap-[48px]">
          <h1 className="text-center text-[24px] font-medium leading-[32px] lg:w-full lg:text-start lg:text-[44px] lg:leading-[55px]">
            Process that moves things forward
          </h1>

          <div className="mx-auto grid gap-[26px] lg:grid-cols-2 xl:grid-cols-4">
            <div className="h-[201.964px] flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={"/services/uiux-design/process_line.png"}
                  alt=""
                  width={267.348}
                  height={169.568}
                  className="flex-shrink-0"
                />
                <ChevronRight
                  width={26}
                  height={26}
                  className="absolute -right-[0.75rem] top-[5.35rem] flex-shrink-0 lg:-right-[0.65rem] lg:top-[5.45rem] 2xl:-right-[0.65rem] 2xl:top-[5.45rem]"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                  />
                  <span
                    className="ml-[10px] text-center text-[19px] font-medium xl:text-[24px]"
                    style={{ fontFamily: "Lato" }}
                  >
                    Ideate
                  </span>
                </div>

                <div className="absolute -top-[1rem] left-[2rem] h-[184px] w-[171px] flex-shrink-0">
                  <div className="inline-flex h-[184px] flex-shrink-0 flex-col items-center justify-end pb-[52px] pt-[93.82px]">
                    <div className="flex flex-col items-start gap-[9px]">
                      <p
                        className="h-[52px] w-[153.744px] text-size-7 font-normal leading-none tracking-[0.36px] opacity-70"
                        style={{ fontFamily: "Lato" }}
                      >
                        The ideation process is a crucial phase in the design
                        process where creative thinking and brainstorming
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[202px] flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={"/services/uiux-design/process_line.png"}
                  alt=""
                  width={267.348}
                  height={169.568}
                  className="flex-shrink-0"
                />
                <ChevronRight
                  width={26}
                  height={26}
                  className="absolute -right-[0.75rem] top-[5.35rem] flex-shrink-0 lg:-right-[0.65rem] lg:top-[5.45rem] 2xl:-right-[0.65rem] 2xl:top-[5.45rem]"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span
                    className="ml-[10px] text-center text-[19px] font-medium xl:text-[24px]"
                    style={{ fontFamily: "Lato" }}
                  >
                    Reserach
                  </span>
                </div>

                <div className="absolute -top-[1rem] left-[2rem] h-[184px] w-[171px] flex-shrink-0">
                  <div className="inline-flex h-[184px] flex-shrink-0 flex-col items-center justify-end pb-[52px] pt-[93.82px]">
                    <div className="flex flex-col items-start gap-[9px]">
                      <p
                        className="h-[52px] w-[153.744px] text-size-7 font-normal leading-none tracking-[0.36px] opacity-70"
                        style={{ fontFamily: "Lato" }}
                      >
                        Research is a critical component of the design process,
                        helping designers understand the problem
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[202px] flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={"/services/uiux-design/process_line.png"}
                  alt=""
                  width={267.348}
                  height={169.568}
                  className="flex-shrink-0"
                />
                <ChevronRight
                  width={26}
                  height={26}
                  className="absolute -right-[0.75rem] top-[5.35rem] flex-shrink-0 lg:-right-[0.65rem] lg:top-[5.45rem] 2xl:-right-[0.65rem] 2xl:top-[5.45rem]"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span
                    className="ml-[10px] text-center text-[19px] font-medium xl:text-[24px]"
                    style={{ fontFamily: "Lato" }}
                  >
                    Create
                  </span>
                </div>

                <div className="absolute -top-[1rem] left-[2rem] h-[184px] w-[171px] flex-shrink-0">
                  <div className="inline-flex h-[184px] flex-shrink-0 flex-col items-center justify-end pb-[52px] pt-[93.82px]">
                    <div className="flex flex-col items-start gap-[9px]">
                      <p
                        className="h-[52px] w-[153.744px] text-size-7 font-normal leading-none tracking-[0.36px] opacity-70"
                        style={{ fontFamily: "Lato" }}
                      >
                        Designing a process involves several key steps to ensure
                        clarity, efficiency, successful implementation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[202px] flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={"/services/uiux-design/process_line.png"}
                  alt=""
                  width={267.348}
                  height={169.568}
                  className="flex-shrink-0"
                />
                <ChevronRight
                  width={26}
                  height={26}
                  className="absolute -right-[0.75rem] top-[5.35rem] flex-shrink-0 lg:-right-[0.65rem] lg:top-[5.45rem] 2xl:-right-[0.65rem] 2xl:top-[5.45rem]"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span
                    className="ml-[4px] text-start text-[19px] font-medium xl:text-[24px]"
                    style={{ fontFamily: "Lato" }}
                  >
                    User Testing
                  </span>
                </div>

                <div className="absolute -top-[1rem] left-[2rem] h-[184px] w-[171px] flex-shrink-0">
                  <div className="inline-flex h-[184px] flex-shrink-0 flex-col items-center justify-end pb-[52px] pt-[93.82px]">
                    <div className="flex flex-col items-start gap-[9px]">
                      <p
                        className="h-[52px] w-[153.744px] text-size-7 font-normal leading-none tracking-[0.36px] opacity-70"
                        style={{ fontFamily: "Lato" }}
                      >
                        Testing is a crucial phase in the design process to
                        ensure that the product or system meets the specified
                        requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talent Section 375 pixels with higher z-index */}
      <CallToAction2
        mobilePaddingTop="74px"
        mobilePaddingBottom="75px"
        desktopPaddingTop="160px"
        desktopPaddingBottom="160px"
        isBackground={true}
      />
    </div>
  );
}
