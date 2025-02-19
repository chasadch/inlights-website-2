import Button from "@/components/Button";
import CallToActionBackground from "@/sections/CallToAction/CallToActionBackground";
import Image from "next/image";

export default function UIUXDesignPage() {
  return (
    <div className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="flex h-[687px] w-full flex-col items-center gap-[16px] self-stretch bg-cover bg-center px-[70px] lg:h-[839.499px] lg:flex-row lg:justify-between"
        style={{
          background:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/about/about_hero.png) lightgray -0.05px 0px / 100.006% 102.599% no-repeat",
        }}
      >
        <div className="mx-auto flex w-[319px] flex-col items-center gap-[17.612px] pt-[115px] lg:w-[452px] lg:items-start lg:pt-[0px] xl:w-[552px] 2xl:w-[652px]">
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
          className="relative mx-auto mt-[50px] h-[197.426px] w-[246.173px] flex-shrink-0 lg:mt-0 lg:h-[330px] lg:w-[373.827px] xl:w-[423.827px] 2xl:h-[380px] 2xl:w-[473.827px]"
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

      {/* Tech section */}
      <div
        className="flex w-full flex-col items-start justify-center gap-[10px] self-stretch py-[90px] lg:h-[681px]"
        style={{ backgroundImage: "url(/statistics/bg.png)" }}
      >
        <div className="mx-auto flex flex-col items-center gap-[40px] lg:gap-[48px]">
          <h1 className="w-[70%] text-center text-[24px] font-medium leading-[32px] lg:w-full lg:text-start lg:text-[44px]">
            Process that moves things forward
          </h1>

          <Image
            src={"/services/uiux-design/process.png"}
            alt="Process"
            width={272}
            height={916}
            className="block flex-shrink-0 lg:hidden"
          />

          <Image
            src={"/services/uiux-design/process_lg.png"}
            alt="Process"
            width={1440}
            height={512}
            className="hidden flex-shrink-0 lg:block"
          />

          {/* <div className="mt-[2rem] flex flex-col items-center gap-[40px] lg:flex-row lg:gap-6">
            <div className="h-[202px] w-[222px] flex-shrink-0 xl:w-[272px]">
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
                  className="absolute -right-[0.75rem] top-[4.357rem] flex-shrink-0 xl:right-[1.9rem] xl:top-[4.57rem]"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span className="text-center text-[19px] font-medium xl:text-[24px]">
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

            <div className="h-[202px] w-[222px] flex-shrink-0 xl:w-[272px]">
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
                  className="absolute -right-[0.75rem] top-[4.357rem] flex-shrink-0 xl:right-[1.9rem] xl:top-[4.57rem]"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span className="text-center text-[19px] font-medium xl:text-[24px]">
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

            <div className="h-[202px] w-[222px] flex-shrink-0 xl:w-[272px]">
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
                  className="absolute -right-[0.75rem] top-[4.357rem] flex-shrink-0 xl:right-[1.9rem] xl:top-[4.57rem]"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span className="text-center text-[19px] font-medium xl:text-[24px]">
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

            <div className="h-[202px] w-[222px] flex-shrink-0 xl:w-[272px]">
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
                  className="absolute -right-[0.75rem] top-[4.357rem] flex-shrink-0 xl:right-[1.9rem] xl:top-[4.57rem]"
                />
                <div className="absolute -top-[1.7rem] left-[3.5rem] flex items-center justify-center gap-2">
                  <Image
                    src={"/services/uiux-design/bulb.png"}
                    alt="Bulb"
                    width={64}
                    height={64}
                    className=""
                  />
                  <span className="text-center text-[19px] font-medium xl:text-[24px]">
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
          </div> */}
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
          className="relative z-20 h-[209px] overflow-hidden rounded-[32px] bg-cover bg-no-repeat lg:w-[1000px] xl:w-[1100px] 2xl:w-[1400px]"
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
