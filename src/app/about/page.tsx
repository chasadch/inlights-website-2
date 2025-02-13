import Button from "@/components/Button";
import CallToActionBackground from "@/sections/CallToAction/CallToActionBackground";
import Image from "next/image";

export default function About() {
  return (
    <section className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="relative flex h-[685px] w-full flex-col items-center justify-center gap-[16px] self-stretch bg-cover bg-center"
        style={{
          background:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/about/about_hero.png) lightgray -0.05px 0px / 100.006% 102.599% no-repeat",
        }}
      >
        <div className="absolute left-1/2 top-1/2 flex w-[903px] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-[18px]">
          <h1 className="text-size-2 font-medium">About the Company</h1>
          <p className="text-center text-size-4 font-normal opacity-70">
            Founded in 2021, Inlights is a forward-thinking digital solutions
            company that specializes in web development, product design, and AI
            automation services. We are committed to transforming ideas into
            innovative digital experiences, helping businesses thrive in an
            ever-evolving digital landscape. Our team of experts blends
            creativity with cutting-edge technology to deliver customized
            solutions that are efficient, user-friendly, and scalable and
            streamline processes, enhance user experiences, and drive growth. At
            Inlights, we illuminate the path to success, empowering our clients
            with the tools they need to stand out and excel in today’s
            competitive market.
          </p>
        </div>
      </div>

      {/* Brief History Section */}
      <div className="flex flex-col items-start gap-[10px] self-stretch py-[70px]">
        <div className="relative h-[541px] w-full">
          {/* Background container placed absolutely behind the content */}
          <div className="absolute left-0 top-0 z-0 h-[541px] w-full">
            <div
              className="h-full"
              style={{ backgroundImage: "url(/statistics/bg.png)" }}
            ></div>
          </div>

          {/* Content container above the background */}
          <div className="relative z-10 flex h-full flex-col items-center gap-[48px]">
            <h1 className="mt-[24px] text-center text-[40px] font-medium">
              A Brief History
            </h1>

            {/* Timeline container, centered horizontally */}
            <div className="relative mx-auto flex h-[270px] items-center lg:w-[943px] xl:w-[1043px] 2xl:w-[1143px]">
              <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-center">
                <div className="h-[1px] w-[1060px] bg-gradient-to-b from-gradientDark to-gradientLight"></div>
              </div>

              <div className="z-10 flex w-full flex-row items-center justify-between">
                {/* -- 2019 -- */}
                <div className="relative flex w-[151px] flex-col items-center justify-center gap-[40px]">
                  <h1 className="mt-24 self-stretch text-center text-size-3 font-bold">
                    2019
                  </h1>
                  <Image
                    src={"/about/point.png"}
                    alt="Point"
                    width={24}
                    height={24}
                    className="absolute left-[63px] top-1/2 -translate-y-1/2"
                  />
                  <div className="flex flex-col items-center gap-[12px] self-stretch">
                    <Image
                      src={"/about/line1.png"}
                      alt="Line"
                      width={7}
                      height={52}
                      className="rotate-0 stroke-[#DCDCDC] stroke-[1px]"
                    />
                    <span className="flex h-[48px] flex-col justify-end self-stretch text-center text-size-6 font-normal opacity-70">
                      New Beginnings
                    </span>
                  </div>
                </div>

                {/* -- 2020 -- */}
                <div className="relative flex w-[151px] flex-col items-center justify-center gap-[40px]">
                  <div className="flex flex-col items-center gap-[12px] self-stretch">
                    <span className="flex h-[48px] flex-col justify-end self-stretch text-center text-size-6 font-normal opacity-70">
                      1st Office opened in Islamabad
                    </span>
                    <Image
                      src={"/about/line2.png"}
                      alt="Line"
                      width={7}
                      height={52}
                      className="rotate-0 stroke-[#DCDCDC] stroke-[1px]"
                    />
                  </div>
                  <h1 className="mb-24 self-stretch text-center text-size-3 font-bold">
                    2020
                  </h1>
                  <Image
                    src={"/about/point.png"}
                    alt="Point"
                    width={24}
                    height={24}
                    className="absolute left-[63px] top-1/2 -translate-y-1/2"
                  />
                </div>

                {/* -- 2021 -- */}
                <div className="relative flex w-[151px] flex-col items-center justify-center gap-[40px]">
                  <h1 className="mt-24 self-stretch text-center text-size-3 font-bold">
                    2021
                  </h1>
                  <Image
                    src={"/about/point.png"}
                    alt="Point"
                    width={24}
                    height={24}
                    className="absolute left-[63px] top-1/2 -translate-y-1/2"
                  />
                  <div className="flex flex-col items-center gap-[12px] self-stretch">
                    <Image
                      src={"/about/line1.png"}
                      alt="Line"
                      width={7}
                      height={52}
                      className="rotate-0 stroke-[#DCDCDC] stroke-[1px]"
                    />
                    <span className="flex h-[48px] flex-col justify-end self-stretch text-center text-size-6 font-normal opacity-70">
                      2nd Office opened in Islamabad
                    </span>
                  </div>
                </div>

                {/* -- 2022 -- */}
                <div className="relative flex w-[151px] flex-col items-center justify-center gap-[40px]">
                  <div className="flex flex-col items-center gap-[12px] self-stretch">
                    <span className="flex h-[48px] flex-col justify-end self-stretch text-center text-size-6 font-normal opacity-70">
                      3rd Office opened in Riyadh
                    </span>
                    <Image
                      src={"/about/line2.png"}
                      alt="Line"
                      width={7}
                      height={52}
                      className="rotate-0 stroke-[#DCDCDC] stroke-[1px]"
                    />
                  </div>
                  <h1 className="mb-24 self-stretch text-center text-size-3 font-bold">
                    2022
                  </h1>
                  <Image
                    src={"/about/point.png"}
                    alt="Point"
                    width={24}
                    height={24}
                    className="absolute left-[63px] top-1/2 -translate-y-1/2"
                  />
                </div>

                {/* -- 2023 -- */}
                <div className="relative flex w-[151px] flex-col items-center justify-center gap-[40px]">
                  <h1 className="mt-24 self-stretch text-center text-size-3 font-bold">
                    2023
                  </h1>
                  <Image
                    src={"/about/point.png"}
                    alt="Point"
                    width={24}
                    height={24}
                    className="absolute left-[63px] top-1/2 -translate-y-1/2"
                  />
                  <div className="flex flex-col items-center gap-[12px] self-stretch">
                    <Image
                      src={"/about/line1.png"}
                      alt="Line"
                      width={7}
                      height={52}
                      className="rotate-0 stroke-[#DCDCDC] stroke-[1px]"
                    />
                    <span className="flex h-[48px] flex-col justify-end self-stretch text-center text-size-6 font-normal opacity-70">
                      Traffic Management System Adopted across Islamabad
                    </span>
                  </div>
                </div>
              </div>
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
    </section>
  );
}
