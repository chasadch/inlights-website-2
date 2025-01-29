import { Facebook, Instagram, Linkedin, MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex items-center justify-between bg-black px-[70px] py-[140px]">
      <div className="flex w-[401px] flex-col items-start gap-[32px]">
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-size-2 font-normal">Let&apos;s talk</h1>
          <p className="w-[376px] text-size-5 font-normal opacity-70">
            Like our story? Contact now and create greatness together with us.
          </p>
        </div>
        <div className="h-[1px] w-[401px] bg-white opacity-20"></div>
        <div className="flex flex-col items-start gap-[20px]">
          <div className="flex items-center justify-center gap-[26px]">
            <div className="flex items-start gap-[9px]">
              {/* Ellipse */}
              <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  className="h-[51px] w-[50px]"
                >
                  <circle
                    cx="25"
                    cy="25.5742"
                    r="25"
                    fill="url(#paint0_linear_2655_4743)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2655_4743"
                      x1="25"
                      y1="0.574219"
                      x2="25"
                      y2="50.5742"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#552DDA" />
                      <stop offset="1" stopColor="#1D3E80" />
                    </linearGradient>
                  </defs>
                </svg>
                <Image
                  src="/contact/email.png"
                  width={25}
                  height={20}
                  alt="Ellipse"
                  className="absolute left-[12px] top-[15px]"
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col items-start gap-[4px]">
              <h1 className="w-[98px] text-size-3 font-bold">Our Email</h1>
              <p className="text-size-5 font-normal opacity-70">
                admin@inlights.com.pk
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[26px]">
            <div className="flex items-start gap-[9px]">
              {/* Ellipse */}
              <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  className="h-[51px] w-[50px]"
                >
                  <circle
                    cx="25"
                    cy="25.5742"
                    r="25"
                    fill="url(#paint0_linear_2655_4743)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2655_4743"
                      x1="25"
                      y1="0.574219"
                      x2="25"
                      y2="50.5742"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#552DDA" />
                      <stop offset="1" stopColor="#1D3E80" />
                    </linearGradient>
                  </defs>
                </svg>
                <Image
                  src="/contact/call.png"
                  width={25}
                  height={20}
                  alt="Ellipse"
                  className="absolute left-[12px] top-[15px]"
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col items-start gap-[4px]">
              <h1 className="w-[98px] text-size-3 font-bold">Call us</h1>
              <p className="text-size-5 font-normal opacity-70">
                +92 3235353143
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-[26px]">
            <div className="flex items-start gap-[9px]">
              {/* Ellipse */}
              <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="51"
                  viewBox="0 0 50 51"
                  fill="none"
                  className="h-[51px] w-[50px]"
                >
                  <circle
                    cx="25"
                    cy="25.5742"
                    r="25"
                    fill="url(#paint0_linear_2655_4743)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2655_4743"
                      x1="25"
                      y1="0.574219"
                      x2="25"
                      y2="50.5742"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#552DDA" />
                      <stop offset="1" stopColor="#1D3E80" />
                    </linearGradient>
                  </defs>
                </svg>
                <Image
                  src="/contact/map.png"
                  width={25}
                  height={20}
                  alt="Ellipse"
                  className="absolute left-[12px] top-[15px]"
                />
              </div>
            </div>
            {/* Content */}
            <div className="flex flex-col items-start gap-[4px]">
              <h1 className="w-[98px] text-size-3 font-bold">Find us</h1>
              <p className="text-size-5 font-normal opacity-70">
                Open Google Maps
              </p>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-[401px] bg-white opacity-20"></div>

        <div className="flex items-start gap-[40px] opacity-70">
          <Facebook size={20} />
          <Instagram size={20} />
          <Linkedin size={20} />
        </div>
      </div>

      <div className="flex h-[522px] w-[695px] flex-col items-center justify-center gap-[194px] rounded-[20px] border-[1px] border-[#5144DCF7] bg-[#050919] p-[36px] shadow-[0_0_30px_0_#5144DCF7]">
        <div className="flex flex-col items-start gap-[52px]">
          <div className="flex items-start gap-[63px]">
            <div className="flex h-[76px] flex-col items-start gap-[50px]">
              <label className="text-size-6 font-normal">Email</label>
              <div className="h-[1px] w-[200px] bg-[#DFDFDF]"></div>
            </div>
            <div className="flex h-[76px] flex-col items-start gap-[50px]">
              <label className="text-size-6 font-normal">Phone</label>
              <div className="h-[1px] w-[200px] bg-[#DFDFDF]"></div>
            </div>
          </div>

          <div className="flex items-start gap-[63px]">
            <div className="flex h-[76px] flex-col items-start gap-[50px]">
              <label className="text-size-6 font-normal">First name</label>
              <div className="h-[1px] w-[200px] bg-[#DFDFDF]"></div>
            </div>
            <div className="flex h-[76px] flex-col items-start gap-[50px]">
              <label className="text-size-6 font-normal">Last name</label>
              <div className="h-[1px] w-[200px] bg-[#DFDFDF]"></div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[50px]">
            <label className="text-size-6 font-normal">Message</label>
            <div className="h-[1px] w-[623px] bg-[#DFDFDF]"></div>
          </div>

          <div className="flex items-center justify-center gap-[11px] rounded-[10px] bg-[#5144DC] px-[20px] py-[14px] shadow-[0_0_30px_0_#5144DCF7]">
            <span className="text-size-5 font-medium">Let&apos;s Talk</span>
            <MoveUpRight width={17} height={17} />
          </div>
        </div>
      </div>
    </section>
  );
}
