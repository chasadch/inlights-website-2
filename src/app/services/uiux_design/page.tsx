import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function UIUXDesignPage() {
  return (
    <div className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="flex h-[685px] items-center justify-between gap-[16px] bg-cover bg-center pl-[70px] pr-[140px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/about/about_hero.png) lightgray -0.05px 0px / 100.006% 102.599% no-repeat",
        }}
      >
        <div className="flex w-[565px] flex-col items-start gap-[18px]">
          <h1 className="text-size-2 font-medium">UI/UX Design</h1>
          <p className="text-size-4 font-normal opacity-70">
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

        <div className="relative h-[380px] w-[474px] flex-shrink-0">
          {/* Make the border shape absolutely positioned */}
          <div className="absolute left-0 top-0 h-[373px] w-[465px] flex-shrink-0 rounded-[71.152px] border-[32.84px] border-gradientDark"></div>

          <Image
            src={"/services/uiux-design/alexix.png"}
            alt=""
            width={380}
            height={449}
            className="absolute right-[15rem] top-[2.5rem] z-20 flex-shrink-0"
          />
          <Image
            src={"/services/uiux-design/alexix2.png"}
            alt=""
            width={383}
            height={503}
            className="absolute right-[3rem] top-0 z-10 flex-shrink-0"
          />
          <Image
            src={"/services/uiux-design/alexix3.png"}
            alt=""
            width={379}
            height={522}
            className="absolute -right-[5.5rem] -top-[1rem] flex-shrink-0"
          />
        </div>
      </div>

      {/* Tech section */}
      <div className="flex w-full flex-col items-start gap-[10px] self-stretch py-[70px]">
        <div className="mx-auto inline-flex flex-col items-start gap-[48px]">
          <h1 className="text-[44px] font-normal">
            Process that moves things forward
          </h1>

          <div className="flex h-[202px] items-center gap-6">
            <div className="h-[202px] w-[272px] flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={"/services/uiux-design/process_line.png"}
                  alt=""
                  width={230}
                  height={200}
                  className="flex-shrink-0"
                />
                <ChevronRight
                  width={26}
                  height={26}
                  className="absolute right-[1.9rem] top-[4.57rem] flex-shrink-0"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span className="text-center text-[24px] font-medium">
                    Ideate
                  </span>
                </div>

                <div className="absolute -top-[1rem] left-[2rem] h-[184px] w-[171px] flex-shrink-0">
                  <div className="inline-flex h-[184px] flex-shrink-0 flex-col items-center justify-end pb-[35px] pt-[94px]">
                    <div className="flex flex-col items-start gap-[9px]">
                      <p
                        className="h-[82px] w-[150px] text-size-7 font-normal leading-none opacity-70"
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

            <div className="h-[202px] w-[272px] flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={"/services/uiux-design/process_line.png"}
                  alt=""
                  width={230}
                  height={200}
                  className="flex-shrink-0"
                />
                <ChevronRight
                  width={26}
                  height={26}
                  className="absolute right-[1.9rem] top-[4.57rem] flex-shrink-0"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span className="text-center text-[24px] font-medium">
                    Reserach
                  </span>
                </div>

                <div className="absolute -top-[1rem] left-[2rem] h-[184px] w-[171px] flex-shrink-0">
                  <div className="inline-flex h-[184px] flex-shrink-0 flex-col items-center justify-end pb-[35px] pt-[94px]">
                    <div className="flex flex-col items-start gap-[9px]">
                      <p
                        className="h-[82px] w-[150px] text-size-7 font-normal leading-none opacity-70"
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

            <div className="h-[202px] w-[272px] flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={"/services/uiux-design/process_line.png"}
                  alt=""
                  width={230}
                  height={200}
                  className="flex-shrink-0"
                />
                <ChevronRight
                  width={26}
                  height={26}
                  className="absolute right-[1.9rem] top-[4.57rem] flex-shrink-0"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span className="text-center text-[24px] font-medium">
                    Create
                  </span>
                </div>

                <div className="absolute -top-[1rem] left-[2rem] h-[184px] w-[171px] flex-shrink-0">
                  <div className="inline-flex h-[184px] flex-shrink-0 flex-col items-center justify-end pb-[35px] pt-[94px]">
                    <div className="flex flex-col items-start gap-[9px]">
                      <p
                        className="h-[82px] w-[150px] text-size-7 font-normal leading-none opacity-70"
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

            <div className="h-[201px] w-[271px] flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={"/services/uiux-design/process_line.png"}
                  alt=""
                  width={230}
                  height={170}
                  className="flex-shrink-0"
                />
                <ChevronRight
                  width={26}
                  height={26}
                  className="absolute right-[1.9rem] top-[4.57rem] flex-shrink-0"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span className="text-center text-[24px] font-medium">
                    User Testing
                  </span>
                </div>

                <div className="absolute -top-[1rem] left-[2rem] h-[184px] w-[171px] flex-shrink-0">
                  <div className="inline-flex h-[184px] flex-shrink-0 flex-col items-center justify-end pb-[35px] pt-[94px]">
                    <div className="flex flex-col items-start gap-[9px]">
                      <p
                        className="h-[82px] w-[150px] text-size-7 font-normal leading-none opacity-70"
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
