import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Services() {
  return (
    <section className="bg-black px-[70px] py-[140px]">
      {/* Services */}
      <div className="flex flex-col items-center gap-[64px] self-stretch">
        <div className="flex flex-col items-start gap-[8px]">
          <h1 className="text-center text-size-2 font-normal">Our Services</h1>
        </div>

        <div className="flex h-[298px] items-center gap-[24px] self-stretch">
          <div className="flex-grow-1 border-[rgba(45, 160, 184, 0.15)] border-borderCustom flex flex-col items-start gap-[16px] rounded-[32px] border-[1px] bg-bg p-[24px] shadow-custom">
            <Image
              src={"/services/ph_code-bold.png"}
              alt="Service 1"
              width={72}
              height={72}
            />
            <div className="flex flex-col items-start gap-[14px] self-stretch">
              <h1 className="text-size-3 font-bold">Web Development</h1>
              <p className="text-size-5 font-normal opacity-70">
                Crafting dynamic, user-centric websites with cutting-edge design
                and seamless functionality to elevate yo
              </p>
              <div className="flex items-center gap-[9px] self-stretch py-[8px]">
                <span className="text-size-7 font-normal">
                  Discover InLights
                </span>
                <div className="flex h-[15px] w-[15px] items-center justify-center">
                  <MoveUpRight width={15} height={15} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow-1 border-[rgba(45, 160, 184, 0.15)] border-borderCustom flex flex-col items-start gap-[16px] rounded-[32px] border-[1px] bg-bg p-[24px] shadow-custom">
            <Image
              src={"/services/product_design.png"}
              alt="Service 1"
              width={72}
              height={72}
            />
            <div className="flex flex-col items-start gap-[14px] self-stretch">
              <h1 className="text-size-3 font-bold">Product Design</h1>
              <p className="text-size-5 font-normal opacity-70">
                Transforming raw ideas into innovative, user-focused products
                with seamless design and unmatched functionality.
              </p>
              <div className="flex items-center gap-[9px] self-stretch py-[8px]">
                <span className="text-size-7 font-normal">
                  Discover InLights
                </span>
                <div className="flex h-[15px] w-[15px] items-center justify-center">
                  <MoveUpRight width={15} height={15} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow-1 border-[rgba(45, 160, 184, 0.15)] border-borderCustom flex flex-col items-start gap-[16px] rounded-[32px] border-[1px] bg-bg p-[24px] shadow-custom">
            <Image
              src={"/services/computer_vision.png"}
              alt="Service 1"
              width={72}
              height={72}
            />
            <div className="flex flex-col items-start gap-[14px] self-stretch">
              <h1 className="text-size-3 font-bold">Computer Vision</h1>
              <p className="text-size-5 font-normal opacity-70">
                Empowering businesses with advanced computer vision solutions
                that unlock insights and automate processes with
              </p>
              <div className="flex items-center gap-[9px] self-stretch py-[8px]">
                <span className="text-size-7 font-normal">
                  Discover InLights
                </span>
                <div className="flex h-[15px] w-[15px] items-center justify-center">
                  <MoveUpRight width={15} height={15} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow-1 border-[rgba(45, 160, 184, 0.15)] border-borderCustom flex flex-col items-start gap-[16px] rounded-[32px] border-[1px] bg-bg p-[24px] shadow-custom">
            <Image
              src={"/services/ai_automation.png"}
              alt="Service 1"
              width={72}
              height={72}
            />
            <div className="flex flex-col items-start gap-[14px] self-stretch">
              <h1 className="text-size-3 font-bold">AI Automation</h1>
              <p className="text-size-5 font-normal opacity-70">
                Revolutionizing workflows with AI-driven automation, delivering
                efficiency, accuracy, and smarter decision-making.
              </p>
              <div className="flex items-center gap-[9px] self-stretch py-[8px]">
                <span className="text-size-7 font-normal">
                  Discover InLights
                </span>
                <div className="flex h-[15px] w-[15px] items-center justify-center">
                  <MoveUpRight width={15} height={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Talent */}
      <div className="flex items-center justify-center pt-[240px]">
        <div
          className="relative h-[255px] w-[1301px] overflow-hidden rounded-[32px]"
          style={{
            backgroundImage: "url('/services/this_is_engineering.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-between px-[130px]">
            {/* Text */}
            <p className="text-size-2 font-normal text-white">
              We Are Looking for Exceptional Talent
            </p>
            {/* Button */}
            <div
              className="flex cursor-pointer items-center justify-center gap-[11px] rounded-[9px] px-[21px] py-[15px] shadow-[0_0_36px_0_#5144DCF7]"
              style={{
                background:
                  "var(--Gradient, linear-gradient(180deg, #552DDA 0%, #1D3E80 100%))",
              }}
            >
              <p className="text-size-5 font-bold text-white">Join Us</p>
              <MoveUpRight width={17} height={17} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
