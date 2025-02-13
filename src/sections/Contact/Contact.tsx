import Image from "next/image";
import Button from "../../components/Button";
import supabase from "@/lib/supabase";
import toast from "react-hot-toast";
import { useRef } from "react";
import ContactBackground from "./ContactBackground";

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
    <section className="relative flex flex-col items-center justify-between bg-black px-[16px] py-[140px] sm:flex-row sm:items-start lg:px-[70px]">
      {/* Background SVG wrapped in an absolutely positioned container */}
      <div className="absolute inset-0 left-0 top-0 z-50">
        <ContactBackground />
      </div>

      {/* Contact Info */}
      <div className="flex w-full flex-col items-start gap-[32px] sm:w-[401px] lg:w-[301px] xl:w-[401px]">
        <div className="flex flex-col items-start gap-[20px] self-stretch">
          <h1 className="text-size-3 font-normal lg:text-size-2">
            Let&apos;s talk
          </h1>
          <p className="w-full max-w-[376px] text-size-7 font-normal opacity-70 lg:text-size-5">
            Like our story? Contact now and create greatness together with us.
          </p>
        </div>
        <div className="h-[1px] w-full max-w-[401px] bg-white opacity-20"></div>

        {/* Contact Details */}
        <div className="flex flex-col items-start gap-[20px]">
          {[
            {
              icon: "/contact/email.png",
              label: "Our email",
              value: "admin@inlights.com.pk",
              href: "mailto:admin@inlights.com.pk",
            },
            {
              icon: "/contact/call.png",
              label: "Call us",
              value: "+92 3235353143",
              href: "tel:+923235353143",
            },
            {
              icon: "/contact/map.png",
              label: "Find us",
              value: "Open Google Maps",
              href: "https://maps.app.goo.gl/Kvzisj4UWjLZyRFC8",
            },
          ].map((contact, index) => (
            <div key={index} className="flex items-center gap-[26px]">
              <div className="relative h-[50px] w-[50px] rounded-full bg-gradient-to-t from-[#552DDA] to-[#1D3E80]">
                <Image
                  src={contact.icon}
                  width={25}
                  height={20}
                  alt={contact.label}
                  className="absolute left-[12px] top-[15px]"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-size-6 font-bold lg:text-size-3">
                  {contact.label}
                </h1>
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-size-6 font-normal opacity-70 lg:text-size-5"
                >
                  {contact.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="h-[1px] w-full max-w-[401px] bg-white opacity-20"></div>
      </div>

      {/* Contact Form */}
      <div className="flex w-full flex-col items-center justify-center gap-[30px] rounded-[20px] bg-[#050919] px-[16px] py-[20px] shadow-shadowCustom sm:mt-0 lg:w-[495px] lg:p-[36px] xl:w-[695px]">
        <form ref={formRef} className="flex w-full flex-col gap-[40px]">
          <div className="flex flex-col gap-[40px] sm:flex-row">
            <div className="flex w-full flex-col gap-[24px] sm:w-1/2">
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

            <div className="flex w-full flex-col gap-[24px] sm:w-1/2">
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

          <div className="flex flex-col gap-[40px] sm:flex-row">
            <div className="flex w-full flex-col gap-[24px] sm:w-1/2">
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

            <div className="flex w-full flex-col gap-[24px] sm:w-1/2">
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
