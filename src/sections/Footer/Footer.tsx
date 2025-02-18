import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      {/* Footer (375 pixels) */}
      <section className="flex flex-col items-center gap-[32px] border-t border-white/20 bg-bg lg:hidden">
        {/* First container */}
        <div className="flex flex-col items-start gap-[60px] self-stretch px-[43px] pb-[30px] pt-[75px]">
          <div className="flex flex-col items-start gap-[16px]">
            <Image
              src={"/footer/inlights.png"}
              alt="Logo"
              width={155.885}
              height={18.197}
            />
            <div className="flex flex-col items-start gap-[8px]">
              {/* <div className="self-stretch text-size-6 font-normal text-[#B5B5B5]">
                INLIGHTS
              </div> */}
              <div
                className="self-stretch text-size-6 font-normal text-[#B5B5B5]"
                style={{ fontFamily: "Lato" }}
              >
                HQ - The Garage Riyadh, Saudi Arabia
              </div>
              <div
                className="self-stretch text-size-6 font-normal text-[#B5B5B5]"
                style={{ fontFamily: "Lato" }}
              >
                NSTP, NUST, H-12 Islamabad, ICT 24090 Pakistan
              </div>
              <div
                className="self-stretch text-size-6 font-normal text-[#B5B5B5]"
                style={{ fontFamily: "Lato" }}
              >
                National Incubation Center for Aerospace Technologies - NICAT
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
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-size-5 font-medium">Solutions</h1>
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

          <div className="flex flex-col items-start gap-[16px]">
            <div className="flex flex-col items-start gap-[8px]">
              <h1 className="text-size-5 font-medium">Lets Talk</h1>
              <p className="w-[242px] text-size-6 font-normal text-[#B5B5B5]">
                Enter Email and our representatives will reach out to you.
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
            <a href="mailto:admin@inlights.com.pk" className="block">
              <div className="relative flex w-[35px] items-start justify-between">
                <div className="h-[35px] w-[35px] rounded-full border-[1.5px] border-white opacity-25"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <path
                    d="M12 2.09375C12.4378 2.09375 12.8712 2.17997 13.2756 2.34748C13.6801 2.515 14.0475 2.76053 14.357 3.07006C14.6666 3.37959 14.9121 3.74705 15.0796 4.15147C15.2471 4.55589 15.3334 4.98934 15.3334 5.42708V10.7604C15.3334 11.1982 15.2471 11.6316 15.0796 12.036C14.9121 12.4404 14.6666 12.8079 14.357 13.1174C14.0475 13.427 13.6801 13.6725 13.2756 13.84C12.8712 14.0075 12.4378 14.0938 12 14.0938H4.00002C3.56228 14.0938 3.12883 14.0075 2.72441 13.84C2.31999 13.6725 1.95253 13.427 1.643 13.1174C1.01788 12.4923 0.666687 11.6445 0.666687 10.7604V5.42708C0.666687 4.54303 1.01788 3.69518 1.643 3.07006C2.26812 2.44494 3.11597 2.09375 4.00002 2.09375H12ZM6.00002 6.09375V10.0938C6.00011 10.2116 6.03147 10.3274 6.09089 10.4292C6.15032 10.5311 6.23568 10.6153 6.33828 10.6734C6.44088 10.7315 6.55705 10.7613 6.67494 10.7598C6.79283 10.7584 6.90822 10.7257 7.00935 10.6651L10.3427 8.66508C10.4413 8.60581 10.5228 8.52205 10.5794 8.42194C10.6361 8.32182 10.6658 8.20877 10.6658 8.09375C10.6658 7.97873 10.6361 7.86568 10.5794 7.76556C10.5228 7.66545 10.4413 7.58169 10.3427 7.52242L7.00935 5.52242C6.90822 5.46182 6.79283 5.42912 6.67494 5.42766C6.55705 5.4262 6.44088 5.45603 6.33828 5.51411C6.23568 5.57219 6.15032 5.65643 6.09089 5.75826C6.03147 5.86009 6.00011 5.97585 6.00002 6.09375Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/company/inlightsai/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative flex w-[35px] items-start justify-between">
                <div className="h-[35px] w-[35px] rounded-full border-[1.5px] border-white opacity-25"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <path
                    d="M2.09714 3.16241C2.83244 3.16241 3.42853 2.4982 3.42853 1.67886C3.42853 0.85952 2.83244 0.195312 2.09714 0.195312C1.36183 0.195312 0.765747 0.85952 0.765747 1.67886C0.765747 2.4982 1.36183 3.16241 2.09714 3.16241Z"
                    fill="white"
                  />
                  <path
                    d="M3.20651 4.15234H0.987523C0.865035 4.15234 0.765625 4.26312 0.765625 4.3996V11.8174C0.765625 11.9538 0.865035 12.0646 0.987523 12.0646H3.20651C3.329 12.0646 3.42841 11.9538 3.42841 11.8174V4.3996C3.42841 4.26312 3.329 4.15234 3.20651 4.15234Z"
                    fill="white"
                  />
                  <path
                    d="M9.81425 3.73976C8.86586 3.37778 7.67959 3.69575 6.96818 4.26593C6.94377 4.15961 6.85679 4.08048 6.75338 4.08048H4.5344C4.41191 4.08048 4.3125 4.19125 4.3125 4.32774V11.7455C4.3125 11.882 4.41191 11.9927 4.5344 11.9927H6.75338C6.87587 11.9927 6.97528 11.882 6.97528 11.7455V6.4146C7.33387 6.07042 7.79586 5.96063 8.17398 6.13965C8.54055 6.31224 8.75047 6.73356 8.75047 7.29484V11.7455C8.75047 11.882 8.84988 11.9927 8.97237 11.9927H11.1914C11.3138 11.9927 11.4133 11.882 11.4133 11.7455V6.79686C11.388 4.76489 10.5301 4.01273 9.81425 3.73976Z"
                    fill="white"
                  />
                </svg>
              </div>
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/inlights.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="relative flex w-[35px] items-start justify-between">
                <div className="h-[35px] w-[35px] rounded-full border-[1.5px] border-white opacity-25"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <path
                    d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z"
                    fill="white"
                  />
                  <path
                    d="M12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6z"
                    fill="white"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="white" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Second container */}
        <div className="flex flex-col items-start gap-[23px] self-stretch px-[16px]">
          <div className="h-[1px] self-stretch bg-[#8C8C8C] opacity-50"></div>
          <div className="flex items-start justify-between self-stretch">
            <span className="text-size-7 font-normal">
              support@inlights.com
            </span>
            <div className="flex items-start gap-[4px]">
              <span className="text-size-7 font-normal">
                © 2024 Inlights. All rights reserved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (1024 pixels) */}
      <section className="hidden flex-col items-center gap-[32px] border-t border-white/20 bg-[#0D0D1D] px-[16px] pb-[30px] pt-[80px] lg:flex lg:px-[70px]">
        {/* First container */}
        <div className="+ order-2 flex items-start gap-[60px] self-stretch md:order-1">
          <div className="flex flex-col items-start gap-[16px] self-stretch">
            <div className="flex flex-col items-start gap-[16px]">
              <Image
                src={"/footer/inlights.png"}
                alt="Logo"
                width={155.885}
                height={18.197}
              />
              <div className="flex flex-col items-start gap-[8px] lg:gap-[4px]">
                <div className="self-stretch text-size-6 font-normal text-[#B5B5B5]">
                  INLIGHTS
                </div>
                <div className="self-stretch text-size-6 font-normal text-[#B5B5B5]">
                  HQ - The Garage, KACST, Riyadh, Saudi Arabia
                </div>
                <div className="self-stretch text-size-6 font-normal text-[#B5B5B5]">
                  NSTP, NUST, H-12, Islamabad, Pakistan
                </div>
                <div className="self-stretch text-size-6 font-normal text-[#B5B5B5]">
                  NASTP, Nur Khan Airbase, Rawalpindi, Pakistan
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[16px]">
              <div className="flex flex-col items-start gap-[8px]">
                <h1 className="text-size-5 font-medium">Let&apos;s Talk</h1>
                <p className="w-[242px] text-size-6 font-normal text-[#B5B5B5]">
                  Enter your e-mail and our representatives will reach out to
                  you.
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
              <a href="mailto:admin@inlights.com.pk" className="block">
                <div className="relative flex w-[35px] items-start justify-between">
                  <div className="h-[35px] w-[35px] rounded-full border-[1.5px] border-white opacity-25"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <path
                      d="M12 2.09375C12.4378 2.09375 12.8712 2.17997 13.2756 2.34748C13.6801 2.515 14.0475 2.76053 14.357 3.07006C14.6666 3.37959 14.9121 3.74705 15.0796 4.15147C15.2471 4.55589 15.3334 4.98934 15.3334 5.42708V10.7604C15.3334 11.1982 15.2471 11.6316 15.0796 12.036C14.9121 12.4404 14.6666 12.8079 14.357 13.1174C14.0475 13.427 13.6801 13.6725 13.2756 13.84C12.8712 14.0075 12.4378 14.0938 12 14.0938H4.00002C3.56228 14.0938 3.12883 14.0075 2.72441 13.84C2.31999 13.6725 1.95253 13.427 1.643 13.1174C1.01788 12.4923 0.666687 11.6445 0.666687 10.7604V5.42708C0.666687 4.54303 1.01788 3.69518 1.643 3.07006C2.26812 2.44494 3.11597 2.09375 4.00002 2.09375H12ZM6.00002 6.09375V10.0938C6.00011 10.2116 6.03147 10.3274 6.09089 10.4292C6.15032 10.5311 6.23568 10.6153 6.33828 10.6734C6.44088 10.7315 6.55705 10.7613 6.67494 10.7598C6.79283 10.7584 6.90822 10.7257 7.00935 10.6651L10.3427 8.66508C10.4413 8.60581 10.5228 8.52205 10.5794 8.42194C10.6361 8.32182 10.6658 8.20877 10.6658 8.09375C10.6658 7.97873 10.6361 7.86568 10.5794 7.76556C10.5228 7.66545 10.4413 7.58169 10.3427 7.52242L7.00935 5.52242C6.90822 5.46182 6.79283 5.42912 6.67494 5.42766C6.55705 5.4262 6.44088 5.45603 6.33828 5.51411C6.23568 5.57219 6.15032 5.65643 6.09089 5.75826C6.03147 5.86009 6.00011 5.97585 6.00002 6.09375Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/company/inlightsai/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative flex w-[35px] items-start justify-between">
                  <div className="h-[35px] w-[35px] rounded-full border-[1.5px] border-white opacity-25"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <path
                      d="M2.09714 3.16241C2.83244 3.16241 3.42853 2.4982 3.42853 1.67886C3.42853 0.85952 2.83244 0.195312 2.09714 0.195312C1.36183 0.195312 0.765747 0.85952 0.765747 1.67886C0.765747 2.4982 1.36183 3.16241 2.09714 3.16241Z"
                      fill="white"
                    />
                    <path
                      d="M3.20651 4.15234H0.987523C0.865035 4.15234 0.765625 4.26312 0.765625 4.3996V11.8174C0.765625 11.9538 0.865035 12.0646 0.987523 12.0646H3.20651C3.329 12.0646 3.42841 11.9538 3.42841 11.8174V4.3996C3.42841 4.26312 3.329 4.15234 3.20651 4.15234Z"
                      fill="white"
                    />
                    <path
                      d="M9.81425 3.73976C8.86586 3.37778 7.67959 3.69575 6.96818 4.26593C6.94377 4.15961 6.85679 4.08048 6.75338 4.08048H4.5344C4.41191 4.08048 4.3125 4.19125 4.3125 4.32774V11.7455C4.3125 11.882 4.41191 11.9927 4.5344 11.9927H6.75338C6.87587 11.9927 6.97528 11.882 6.97528 11.7455V6.4146C7.33387 6.07042 7.79586 5.96063 8.17398 6.13965C8.54055 6.31224 8.75047 6.73356 8.75047 7.29484V11.7455C8.75047 11.882 8.84988 11.9927 8.97237 11.9927H11.1914C11.3138 11.9927 11.4133 11.882 11.4133 11.7455V6.79686C11.388 4.76489 10.5301 4.01273 9.81425 3.73976Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>

              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/inlights.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative flex w-[35px] items-start justify-between">
                  <div className="h-[35px] w-[35px] rounded-full border-[1.5px] border-white opacity-25"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <path
                      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z"
                      fill="white"
                    />
                    <path
                      d="M12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6z"
                      fill="white"
                    />
                    <circle cx="17.5" cy="6.5" r="1" fill="white" />
                  </svg>
                </div>
              </a>
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
            <div className="flex flex-col items-start gap-[20px]">
              <h1 className="text-size-5 font-medium">Solutions</h1>
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
        <div className="+ order-1 flex flex-col items-start gap-[23px] self-stretch md:order-2">
          <div className="h-[1px] self-stretch bg-[#8C8C8C] opacity-50"></div>
          <div className="flex items-start justify-between self-stretch">
            <span className="text-size-6 font-normal">
              admin@inlights.com.pk
            </span>
            <div className="flex items-start gap-[4px]">
              <span className="text-size-6 font-normal">
                &copy; InLights. All rights reserved
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
