import Image from "next/image";
import Button from "../../components/Button";

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

        {/* Contact Info */}
        <div className="flex flex-col items-start gap-[20px]">
          {/* Email */}
          <div className="flex items-center gap-[26px]">
            <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
              <Image
                src="/contact/email.png"
                width={25}
                height={20}
                alt="Email"
                className="absolute left-[12px] top-[15px]"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-size-3 font-bold">Our email</h1>
              <a
                href="mailto:admin@inlights.com.pk"
                className="text-size-5 font-normal opacity-70"
              >
                admin@inlights.com.pk
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-[26px]">
            <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
              <Image
                src="/contact/call.png"
                width={25}
                height={20}
                alt="Call"
                className="absolute left-[12px] top-[15px]"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-size-3 font-bold">Call us</h1>
              <a
                href="tel:+923235353143"
                className="text-size-5 font-normal opacity-70"
              >
                +92 3235353143
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-[26px]">
            <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
              <Image
                src="/contact/map.png"
                width={25}
                height={20}
                alt="Location"
                className="absolute left-[12px] top-[15px]"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-size-3 font-bold">Find us</h1>
              <a
                href="https://maps.app.goo.gl/Kvzisj4UWjLZyRFC8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-size-5 font-normal opacity-70"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-[401px] bg-white opacity-20"></div>

        {/* Social Icons */}
        <div className="flex items-start gap-[40px] opacity-70">
          <Image
            src="/contact/facebook.png"
            alt="Facebook"
            width={12}
            height={22}
          />
          <Image
            src="/contact/instagram.png"
            alt="Facebook"
            width={23}
            height={23}
          />
          <Image
            src="/contact/linkedin.png"
            alt="Facebook"
            width={23}
            height={23}
          />
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex w-[695px] flex-col items-center justify-center gap-[30px] rounded-[20px] bg-[#050919] p-[36px] shadow-shadowCustom">
        <form className="flex w-full flex-col gap-[50px]">
          <div className="flex gap-[63px]">
            {/* First Name Input */}
            <div className="flex w-1/2 flex-col gap-[40px]">
              <label htmlFor="first-name" className="text-size-6 font-normal">
                First Name
              </label>
              <input
                id="first-name"
                type="text"
                className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              />
            </div>

            {/* Last Name Input */}
            <div className="flex w-1/2 flex-col gap-[40px]">
              <label htmlFor="last-name" className="text-size-6 font-normal">
                Last Name
              </label>
              <input
                id="last-name"
                type="text"
                className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <div className="flex gap-[63px]">
            {/* Email Input */}
            <div className="flex w-1/2 flex-col gap-[40px]">
              <label htmlFor="email" className="text-size-6 font-normal">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              />
            </div>

            {/* Phone Input */}
            <div className="flex w-1/2 flex-col gap-[40px]">
              <label htmlFor="phone" className="text-size-6 font-normal">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-size-6 font-normal">
              Message
            </label>
            <textarea
              id="message"
              className="resize-none border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <div>
            <Button variant="gradient">Let&apos;s Talk</Button>
          </div>
        </form>
      </div>
    </section>
  );
}
