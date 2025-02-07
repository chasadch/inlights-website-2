import Image from "next/image";
import Button from "../../components/Button";
import supabase from "@/lib/supabase";
import toast from "react-hot-toast";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleLetsTalkClick = async (
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const firstName = formData.get("firstname") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    try {
      const { error } = await supabase
        .from("contacts")
        .insert([{ firstName, lastName, email, phone, message }]);

      if (error) {
        throw new Error("Error inserting contact: " + error.message);
      }

      toast.success(
        "Thank you for reaching out! Your message has been sent successfully, and we'll be in touch soon.",
      );
    } catch (error) {
      if (error instanceof Error) {
        toast.error("Error sending message: " + error.message);
      }
    }
  };

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
          >
            <path
              d="M6.76 23.1742H7.24C8.13994 23.1742 8.5899 23.1742 8.90534 22.945C9.00722 22.871 9.09681 22.7814 9.17082 22.6796C9.4 22.3641 9.4 21.9142 9.4 21.0142V14.1742H10.9C11.7427 14.1742 12.164 14.1742 12.4667 13.972C12.5977 13.8844 12.7102 13.7719 12.7978 13.6409C13 13.3382 13 12.9169 13 12.0742C13 11.2315 13 10.8102 12.7978 10.5075C12.7102 10.3765 12.5977 10.264 12.4667 10.1765C12.164 9.97422 11.7427 9.97422 10.9 9.97422H9.4V7.57422C9.4 7.01509 9.4 6.73552 9.49134 6.515C9.61314 6.22097 9.84675 5.98736 10.1408 5.86556C10.3613 5.77422 10.6409 5.77422 11.2 5.77422C11.7591 5.77422 12.0387 5.77422 12.2592 5.68287C12.5533 5.56108 12.7869 5.32747 12.9087 5.03344C13 4.81291 13 4.53335 13 3.97422V3.44089C13 2.81909 13 2.50819 12.8876 2.26708C12.7683 2.01139 12.5628 1.80588 12.3071 1.68665C12.066 1.57422 11.7551 1.57422 11.1333 1.57422C8.95703 1.57422 7.86888 1.57422 7.02501 1.96773C6.13009 2.38503 5.41081 3.10431 4.99351 3.99922C4.6 4.8431 4.6 5.93125 4.6 8.10755V9.97422H3.1C2.25732 9.97422 1.83598 9.97422 1.53332 10.1765C1.40229 10.264 1.28979 10.3765 1.20224 10.5075C1 10.8102 1 11.2315 1 12.0742C1 12.9169 1 13.3382 1.20224 13.6409C1.28979 13.7719 1.40229 13.8844 1.53332 13.972C1.83598 14.1742 2.25732 14.1742 3.1 14.1742H4.6V21.0142C4.6 21.9142 4.6 22.3641 4.82918 22.6796C4.9032 22.7814 4.99278 22.871 5.09466 22.945C5.4101 23.1742 5.86006 23.1742 6.76 23.1742Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
          >
            <path
              d="M19.9264 6.01554C19.9264 6.30242 19.6938 6.53498 19.407 6.53498C19.1201 6.53498 18.8875 6.30242 18.8875 6.01554C18.8875 5.72866 19.1201 5.49609 19.407 5.49609C19.6938 5.49609 19.9264 5.72866 19.9264 6.01554Z"
              fill="white"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M1 10.7142C1 6.90616 1 5.00213 1.96977 3.66735C2.28296 3.23628 2.66206 2.85718 3.09313 2.54399C4.42791 1.57422 6.33194 1.57422 10.14 1.57422H14.71C18.5181 1.57422 20.4221 1.57422 21.7569 2.54399C22.1879 2.85718 22.567 3.23628 22.8802 3.66735C23.85 5.00213 23.85 6.90616 23.85 10.7142V15.2842C23.85 19.0923 23.85 20.9963 22.8802 22.3311C22.567 22.7622 22.1879 23.1413 21.7569 23.4544C20.4221 24.4242 18.5181 24.4242 14.71 24.4242H10.14C6.33194 24.4242 4.42791 24.4242 3.09313 23.4544C2.66206 23.1413 2.28296 22.7622 1.96977 22.3311C1 20.9963 1 19.0923 1 15.2842V10.7142Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M17.5028 12.9992C17.5028 15.8036 15.2294 18.077 12.425 18.077C9.62062 18.077 7.34722 15.8036 7.34722 12.9992C7.34722 10.1948 9.62062 7.92144 12.425 7.92144C15.2294 7.92144 17.5028 10.1948 17.5028 12.9992Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
          >
            <path
              d="M11.0056 11.0938V18.7104V15.4575C11.0056 13.0475 12.9593 11.0938 15.3693 11.0938V11.0938C16.8153 11.0938 17.9875 12.266 17.9875 13.712V18.7104M6.5625 11.0938V18.7104"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.83216 7.28507C7.83216 7.98616 7.26381 8.55451 6.56272 8.55451C5.86162 8.55451 5.29327 7.98616 5.29327 7.28507C5.29327 6.58397 5.86162 6.01562 6.56272 6.01562C7.26381 6.01562 7.83216 6.58397 7.83216 7.28507Z"
              fill="white"
            />
            <path
              d="M0.849976 8.17423C0.849976 5.42442 0.849976 4.04951 1.55025 3.08567C1.77641 2.77439 2.05015 2.50065 2.36143 2.27449C3.32527 1.57422 4.70017 1.57422 7.44998 1.57422H17.1C19.8498 1.57422 21.2247 1.57422 22.1885 2.27449C22.4998 2.50065 22.7735 2.77439 22.9997 3.08567C23.7 4.04951 23.7 5.42441 23.7 8.17422V17.8242C23.7 20.574 23.7 21.9489 22.9997 22.9128C22.7735 23.224 22.4998 23.4978 22.1885 23.7239C21.2247 24.4242 19.8498 24.4242 17.1 24.4242H7.44998C4.70017 24.4242 3.32527 24.4242 2.36143 23.7239C2.05015 23.4978 1.77641 23.224 1.55025 22.9128C0.849976 21.9489 0.849976 20.574 0.849976 17.8242V8.17423Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex h-[522px] w-[695px] flex-col items-center justify-center gap-[30px] rounded-[20px] bg-[#050919] p-[36px] shadow-shadowCustom">
        <form ref={formRef} className="flex w-full flex-col gap-[50px]">
          <div className="flex gap-[63px]">
            {/* First Name Input */}
            <div className="flex w-1/2 flex-col gap-[40px]">
              <label htmlFor="first-name" className="text-size-6 font-normal">
                First Name
              </label>
              <input
                id="first-name"
                name="firstname"
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
                name="lastname"
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
                name="email"
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
                name="phone"
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
              name="message"
              className="resize-none border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <div>
            <Button onClick={handleLetsTalkClick} variant="gradient">
              Let&apos;s Talk
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
