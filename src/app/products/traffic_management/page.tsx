"use client";

import Button from "@/components/Button";
import ContactBackground from "@/sections/Contact/ContactBackground";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TrafficManagement() {
  const router = useRouter();

  return (
    <div className="relative self-stretch bg-black">
      {/* Hero Section */}
      <div
        className="relative flex h-[961px] flex-col px-[70px] pl-[268.19px] pr-[267.81px] pt-[161.09px]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/info/manage_city_traffic.png) ",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content container with higher z-index */}
        <div className="z-10 inline-flex flex-col items-center gap-[50px]">
          <div className="flex w-[949px] flex-col items-center gap-[18px]">
            <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
              <button
                className="text-size-6 font-normal text-[#414C5C]"
                style={{ fontFamily: "Manrope" }}
              >
                Traffic Management
              </button>
            </div>
            <h1 className="text-size-1 font-medium">
              Manage City Traffic with
            </h1>
            <Image
              src="/premisesSecurity/artificial_intelligence.png"
              width={801.667}
              height={83.16}
              alt="Premise Security"
            />
          </div>
          <Button onClick={() => router.push("/contact")} variant="gradient">
            Let&apos;s Talk
          </Button>
        </div>

        {/* Image */}
        <div className="h-[495px] w-[1003px] flex-shrink-0">
          <Image
            src={"/info/manage_city_traffic_2.png"}
            alt="hero"
            width={1003}
            height={495}
            className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2"
          />
        </div>
      </div>

      {/* Topic Customization Engine */}
      <div className="bg-[url('/geohealth/bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-[585px] flex-shrink-0 items-center justify-between p-[70px]">
          <div className="flex flex-col items-start gap-[24px] lg:w-[399px] xl:w-[499px] 2xl:w-[599px]">
            <div className="flex flex-col items-start gap-[24px] lg:w-[399px] xl:w-[499px] 2xl:w-[599px]">
              <div className="flex flex-col items-start gap-[12px] self-stretch">
                <h1 className="self-stretch text-[52px] font-medium leading-[66px]">
                  1. Easy to use
                </h1>
              </div>
              <p className="self-stretch text-size-4 font-medium opacity-80">
                Easy to use easy to use Easy to use easy to use Easy to use easy
                to use Easy to use easy to use vEasy to use easy to use
              </p>
            </div>
          </div>

          <div className="relative flex-shrink-0 lg:w-[439px] xl:h-[439px] xl:w-[555px] 2xl:h-[489px] 2xl:w-[655px]">
            <Image
              src="/geohealth/topic_customization.png"
              alt="Geohealth"
              width={655}
              height={489}
              className="flex-shrink-0 rounded-[11.84px] p-[12px] lg:w-[439px] xl:h-[439px] xl:w-[555px] 2xl:h-[489px] 2xl:w-[655px]"
            />

            <span className="absolute -translate-y-1/2 font-semibold lg:left-[110px] lg:top-[50%] lg:text-[17px] xl:left-[135px] xl:top-[50%] xl:text-[22px] 2xl:left-[150px] 2xl:top-[50%] 2xl:text-[28px]">
              Image Placeholder
            </span>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section className="relative flex flex-col items-center justify-between overflow-hidden bg-black px-[16px] py-[140px] sm:flex-row sm:items-start lg:px-[70px]">
        {/* Background SVG wrapped in an absolutely positioned container */}
        <div className="absolute inset-0 left-0 top-0 z-10">
          <ContactBackground />
        </div>

        {/* Contact Info */}
        <div className="relative z-50 flex w-full flex-col items-start gap-[32px] sm:w-[401px] lg:w-[301px] xl:w-[401px]">
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
          <form className="flex w-full flex-col gap-[40px]">
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
              <Button onClick={() => {}} variant="gradient">
                Let&apos;s Talk
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
