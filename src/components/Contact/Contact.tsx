import { Facebook, Instagram, Linkedin, MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="flex flex-col items-center justify-between gap-[40px] bg-black px-[20px] py-[80px] md:flex-row md:px-[70px] md:py-[140px]">
      {/* Left Section */}
      <div className="flex w-full max-w-[401px] flex-col items-start gap-[32px]">
        <div className="flex flex-col items-start gap-[20px]">
          <h1 className="text-size-2 font-normal">Let&apos;s talk</h1>
          <p className="w-full text-size-5 font-normal opacity-70 md:w-[376px]">
            Like our story? Contact now and create greatness together with us.
          </p>
        </div>
        <div className="h-[1px] w-full bg-white opacity-20 md:w-[401px]"></div>

        {/* Contact Info */}
        <div className="flex flex-col items-start gap-[20px]">
          {/* Email */}
          <div className="flex items-center gap-[26px]">
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
            <div className="flex flex-col items-start gap-[4px]">
              <h1 className="text-size-3 font-bold">Our Email</h1>
              <p className="text-size-5 font-normal opacity-70">
                admin@inlights.com.pk
              </p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-center gap-[26px]">
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
            <div className="flex flex-col items-start gap-[4px]">
              <h1 className="text-size-3 font-bold">Call us</h1>
              <p className="text-size-5 font-normal opacity-70">
                +92 3235353143
              </p>
            </div>
          </div>

          {/* Find Us */}
          <div className="flex items-center gap-[26px]">
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
            <div className="flex flex-col items-start gap-[4px]">
              <h1 className="text-size-3 font-bold">Find us</h1>
              <p className="text-size-5 font-normal opacity-70">
                Open Google Maps
              </p>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white opacity-20 md:w-[401px]"></div>

        {/* Social Icons */}
        <div className="flex items-start gap-[40px] opacity-70">
          <Facebook size={20} />
          <Instagram size={20} />
          <Linkedin size={20} />
        </div>
      </div>

      {/* Right Section - Form */}
      <div className="flex h-auto w-full max-w-[695px] flex-col items-center justify-center gap-[40px] rounded-[20px] border-[1px] border-[#5144DCF7] bg-[#050919] p-[20px] shadow-[0_0_30px_0_#5144DCF7] md:h-[522px] md:gap-[52px] md:p-[36px]">
        <div className="flex w-full flex-col items-start gap-[40px] md:gap-[52px]">
          {/* Email and Phone */}
          <div className="flex w-full flex-col items-start gap-[20px] md:flex-row md:gap-[63px]">
            <div className="flex w-full flex-col items-start gap-[10px] md:w-auto">
              <label className="text-size-6 font-normal">Email</label>
              <input
                type="email"
                className="h-[40px] w-full bg-transparent focus:outline-none md:w-[200px]"
                style={{ borderBottom: "1px solid #DFDFDF" }}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-[10px] md:w-auto">
              <label className="text-size-6 font-normal">Phone</label>
              <input
                type="tel"
                className="h-[40px] w-full bg-transparent focus:outline-none md:w-[200px]"
                style={{ borderBottom: "1px solid #DFDFDF" }}
              />
            </div>
          </div>

          {/* First Name and Last Name */}
          <div className="flex w-full flex-col items-start gap-[20px] md:flex-row md:gap-[63px]">
            <div className="flex w-full flex-col items-start gap-[10px] md:w-auto">
              <label className="text-size-6 font-normal">First name</label>
              <input
                type="text"
                className="h-[40px] w-full bg-transparent focus:outline-none md:w-[200px]"
                style={{ borderBottom: "1px solid #DFDFDF" }}
              />
            </div>
            <div className="flex w-full flex-col items-start gap-[10px] md:w-auto">
              <label className="text-size-6 font-normal">Last name</label>
              <input
                type="text"
                className="h-[40px] w-full bg-transparent focus:outline-none md:w-[200px]"
                style={{ borderBottom: "1px solid #DFDFDF" }}
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex w-full flex-col items-start gap-[10px]">
            <label className="text-size-6 font-normal">Message</label>
            <textarea
              className="h-[80px] w-full bg-transparent focus:outline-none"
              style={{ borderBottom: "1px solid #DFDFDF" }}
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center gap-[11px] rounded-[10px] bg-[#5144DC] px-[20px] py-[14px] shadow-[0_0_30px_0_#5144DCF7]">
            <span className="text-size-5 font-medium">Let&apos;s Talk</span>
            <MoveUpRight width={17} height={17} />
          </div>
        </div>
      </div>
    </section>
  );
}
