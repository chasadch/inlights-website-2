import Button from "@/components/Button";
import React from "react";

export default function AiEnginnerPage() {
  return (
    <section className="bg-[#03030E]">
      <div className="flex flex-col items-start gap-[33px] px-[70px] py-[148px]">
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
    </section>
  );
}
