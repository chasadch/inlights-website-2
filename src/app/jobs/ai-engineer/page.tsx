"use client";

import Button from "@/components/Button";
import supabase from "@/lib/supabase";
import Image from "next/image";
import React, { useRef } from "react";
import toast from "react-hot-toast";

export default function AiEnginnerPage() {
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
    <section className="flex flex-shrink-0 flex-col gap-[149px] bg-[#03030E] px-[70px] py-[149px]">
      <div className="flex flex-col items-start gap-[33px]">
        <div className="flex items-start justify-between self-stretch">
          <h1 className="flex-grow text-size-2 font-medium">AI Engineer</h1>
          <Button variant="gradient" icon={false}>
            Apply
          </Button>
        </div>

        <div className="flex items-start justify-between self-stretch">
          <div className="flex w-[838px] flex-col items-start gap-[20px]">
            <h1 className="self-stretch text-size-3 font-semibold">
              Description
            </h1>
            <div className="flex flex-col items-start gap-[20px] self-stretch">
              <p className="self-stretch text-size-6 font-normal text-white/80">
                Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
                La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
                gasiliaseIpsum thora Ista La Vista irtim gasiliaseLorem Ipsum
                thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista
                irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
                thora Ista La Vista irtim gasiliaseLorem Ipsum thora Ista La
                Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                Ista La Vista irtim gasiliase Lorem Ipsum thora Ista La Vista
                irtim gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum
                thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista
                irtim gasiliase Lorem Ipsum thora Ista La Vista irtim gasiliase
                Ipsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La
                Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliase
                Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista
                La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
                gasiliaseIpsum thora Ista La Vista irtim gasiliase Lorem Ipsum
                thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista
                irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
                thora Ista La Vista irtim gasiliase
              </p>
              <ul className="list-disc pl-5 text-size-6 font-normal text-white/80">
                <li>
                  Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora
                  Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseLorem Ipsum
                  thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista
                  irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum
                  thora Ista La Vista irtim gasiliaseLorem Ipsum thora Ista La
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
                <li>
                  Vista irtim gasiliase Ipsum thora Ista La Vista irtim
                  gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora
                  Ista La Vista irtim gasiliase Lorem Ipsum thora
                </li>
              </ul>
            </div>
          </div>

          <div className="flex w-[307px] items-start gap-[40px]">
            <div className="h-[590px] w-[1px] bg-white/50"></div>
            <div className="flex w-[152px] flex-shrink-0 flex-col items-start gap-[20px]">
              <h1 className="self-stretch text-size-3 font-semibold text-white">
                Job Info
              </h1>
              <div className="flex flex-col items-start gap-[16px] self-stretch">
                <div className="flex flex-col items-start gap-[6px] self-stretch">
                  <span className="text-size-6 font-normal">Department</span>
                  <span className="text-size-6 font-normal text-white/50">
                    Engineering
                  </span>
                </div>
                <div className="flex flex-col items-start gap-[6px] self-stretch">
                  <span className="text-size-6 font-normal">Experience</span>
                  <span className="text-size-6 font-normal text-white/50">
                    2-4 Years
                  </span>
                </div>
                <div className="flex flex-col items-start gap-[6px] self-stretch">
                  <span className="text-size-6 font-normal">City</span>
                  <span className="text-size-6 font-normal text-white/50">
                    Lahore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex items-center justify-center gap-[194px] rounded-[20px] bg-bg p-[36px] shadow-shadowCustom">
        <form ref={formRef} className="flex w-full flex-col gap-[52px]">
          <h1 className="text-[22px] font-medium">
            Enter your details to Apply
          </h1>
          <div className="flex items-start gap-[63px] self-stretch">
            <div className="flex w-1/2 flex-col gap-[24px]">
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

            <div className="flex w-1/2 flex-col gap-[24px]">
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

          <div className="flex items-start gap-[63px] self-stretch">
            <div className="flex w-1/2 flex-col gap-[24px]">
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

            <div className="flex w-1/2 flex-col gap-[24px]">
              <label htmlFor="phone" className="text-size-6 font-normal">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="number"
                className="border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-size-6 font-normal">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="resize-none border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              rows={3}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="linkedin-profile"
              className="text-size-6 font-normal"
            >
              Linkedin Profile
            </label>
            <textarea
              id="linkedin-profile"
              name="linkedinProfile"
              className="resize-none border-b border-[#DFDFDF] bg-transparent text-white outline-none"
              rows={3}
            />
          </div>

          <div className="flex flex-col items-start gap-[20px] self-stretch">
            <label htmlFor="resume" className="text-size-6 font-normal">
              Upload Resume
            </label>

            {/* Dashed upload area */}
            <label
              htmlFor="resume"
              className="flex flex-col items-center gap-[16px] self-stretch rounded-[8px] border-[1px] border-dashed border-[#283F9C] bg-[#080E27] px-[16px] py-[20px]"
            >
              <Image
                src="/jobs/upload.png"
                alt="Upload icon"
                width={32}
                height={32}
                className="h-[32px] w-[32px] cursor-pointer"
              />

              <div className="flex flex-col items-center gap-[8px]">
                <div className="flex items-center gap-2">
                  {/* “Click To Upload” (gradient text with colored underline) */}
                  <span
                    className="font-manrope /* Underline color */ cursor-pointer bg-gradient-to-b from-[#9F85F6] to-[#8FB2F7] bg-clip-text text-[16px] font-medium leading-[16px] text-transparent underline decoration-[#9F85F6] decoration-solid [text-decoration-skip-ink:none] [text-decoration-thickness:auto] [text-underline-offset:auto] [text-underline-position:from-font]"
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Click To Upload
                  </span>

                  {/* “or drag and Drop” (white/80, no underline) */}
                  <span className="font-manrope text-[16px] font-medium leading-[16px] text-white/80">
                    or drag and Drop
                  </span>
                </div>

                <p className="text-size-7 font-normal text-white/80">
                  Max. File size: 15MB
                </p>

                {/* Actual file input is hidden but clickable via the label */}
                <input
                  id="resume"
                  name="resume"
                  type="file"
                  className="hidden"
                />
              </div>
            </label>
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
