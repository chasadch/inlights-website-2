import { Linkedin, MoveUpRight, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="flex flex-col items-center gap-[32px] border-t border-white/20 bg-[#0D0D1D] px-[70px] pb-[30px] pt-[80px]">
      <div className="flex items-start gap-[60px] self-stretch">
        <div className="flex flex-col items-start gap-[40px]">
          <div className="flex flex-col items-start gap-[16px]">
            <Image
              src={"/footer/inlights.png"}
              alt="Logo"
              width={156}
              height={18}
            />
            <div className="flex flex-col items-start gap-[4px]">
              <div className="text-size-6 font-normal text-[#B5B5B5]">
                INLIGHTS
              </div>
              <div className="text-size-6 font-normal text-[#B5B5B5]">
                HQ - The Garage, KACST, Riyadh, Saudi Arabia
              </div>
              <div className="text-size-6 font-normal text-[#B5B5B5]">
                NSTP, NUST, H-12, Islamabad, Pakistan
              </div>
              <div className="text-size-6 font-normal text-[#B5B5B5]">
                NASTP, Nur Khan Airbase, Rawalpindi, Pakistan
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[16px]">
            <div className="flex flex-col items-start gap-[8px]">
              <h1 className="text-size-5 font-medium">Let&apos;s Talk</h1>
              <p className="w-[242px] text-size-6 font-normal text-[#B5B5B5]">
                Enter your e-mail and our representatives will reach out to you.
              </p>
            </div>
            <div className="flex items-start gap-[8px]">
              <input
                type="email"
                placeholder="Email"
                className="flex h-[40px] w-[250px] items-center gap-[8px] rounded-[8px] border border-white/50 bg-white/5 px-[16px] py-[8px] text-[#B5B5B5]"
              />
              <button className="flex h-[40px] w-[40px] items-center justify-center gap-[8px] rounded-[12px] bg-white">
                <div className="flex h-[20px] w-[20px] items-center justify-center">
                  <MoveUpRight width={20} height={20} color="#000" />
                </div>
              </button>
            </div>
          </div>

          <div className="flex items-start gap-[12px]">
            <div className="relative flex w-[35px] items-start justify-between">
              <div className="h-[35px] w-[35px] rounded-full border-[1.5px] border-white opacity-25"></div>
              <Youtube
                width={16}
                height={16}
                color="#fff"
                className="absolute bottom-[9px] right-[9px]"
              />
            </div>

            <div className="relative flex w-[35px] items-start justify-between">
              <div className="h-[35px] w-[35px] rounded-full border-[1.5px] border-white opacity-25"></div>
              <Linkedin
                width={16}
                height={16}
                color="#fff"
                className="absolute bottom-[9px] right-[9px]"
              />
            </div>
          </div>
        </div>

        {/* Second container */}
        <div className="flex flex-grow items-start justify-end gap-[60px]">
          <div className="flex flex-col items-start gap-[20px]">
            <h1 className="text-size-5 font-medium">Quick Links</h1>
            <div className="flex flex-col items-start gap-[16px]">
              <span className="text-size-6 font-normal text-[#B5B5B5]">
                About us
              </span>
              <span className="text-size-6 font-normal text-[#B5B5B5]">
                InLights Security
              </span>
              <span className="text-size-6 font-normal text-[#B5B5B5]">
                InLights Traffic
              </span>
              <span className="text-size-6 font-normal text-[#B5B5B5]">
                Careers
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[24px]">
            <h1 className="text-size-5 font-medium">Quick Links</h1>
            <div className="flex flex-col items-start gap-[16px]">
              <span className="text-size-6 font-normal text-[#B5B5B5]">
                Web Development
              </span>
              <span className="text-size-6 font-normal text-[#B5B5B5]">
                Product Design
              </span>
              <span className="text-size-6 font-normal text-[#B5B5B5]">
                AI Automation
              </span>
              <span className="text-size-6 font-normal text-[#B5B5B5]">
                Computer Vision
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Second container */}
      <div className="flex flex-col items-start gap-[23px] self-stretch">
        <div className="h-[1px] self-stretch bg-[#8C8C8C] opacity-50"></div>
        <div className="flex items-start justify-between self-stretch">
          <span className="text-size-6 font-normal">admin@inlights.com.pk</span>
          <div className="flex items-start gap-[4px]">
            <span className="text-size-6 font-normal">
              &copy; InLights. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
