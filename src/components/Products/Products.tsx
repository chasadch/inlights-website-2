import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Products() {
  return (
    <section className="flex flex-col items-start gap-[10px] self-stretch bg-black px-[70px] py-[130px]">
      <div className="flex flex-col items-center gap-[64px] self-stretch">
        <div className="flex flex-col items-start gap-[8px]">
          <h1 className="text-center text-size-2 font-medium">Our Products</h1>
        </div>

        <div className="flex w-full flex-col items-center gap-[24px] md:flex-row">
          {/* First Product Card */}
          <div className="relative flex h-[591px] w-full flex-col items-start gap-[64px] overflow-hidden rounded-[32px] border-[1px] border-[rgba(45,160,184,0.15)] bg-[#050919] p-[34px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)] md:w-1/2">
            <div className="flex flex-col items-start justify-center gap-[24px] self-stretch">
              <div className="flex flex-col items-start gap-[34px] self-stretch">
                <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
                  <h1 className="text-size-7 font-normal text-[#414C5C]">
                    Traffic Management
                  </h1>
                </div>
                {/* Subheading */}
                <p className="w-full text-[34px] font-medium md:w-[467px]">
                  Manage City Traffic with AI
                </p>
                <p className="self-stretch text-size-5 font-normal opacity-70">
                  InLights revolutionizes your planning with advanced
                  forecasting tools. Anticipate needs, schedule proactively, and
                  optimize resources to keep operations running smoothly.
                </p>
                <div className="flex items-center gap-[9px] self-stretch py-[8px]">
                  <span className="text-size-7 font-normal">
                    Discover InLights
                  </span>
                  <div className="flex h-[15px] w-[15px] items-center justify-center">
                    <MoveUpRight width={15} height={15} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-[107px] left-[16px] h-[307px] w-[567px]">
              <div className="border-opacity-44 h-[308px] w-[461px] flex-shrink-0 rounded-[12px]">
                <Image
                  src={"/products/management_city_traffic_with_ai.png"}
                  alt={"Traffic"}
                  width={566}
                  height={307}
                  className="absolute left-[16px]"
                />
              </div>
            </div>
          </div>

          {/* Second Product Card */}
          <div className="relative flex h-[591px] w-full flex-col items-start gap-[64px] overflow-hidden rounded-[32px] border-[1px] border-[rgba(45,160,184,0.15)] bg-[#050919] p-[34px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)] md:w-1/2">
            <div className="flex flex-col items-start justify-center gap-[24px] self-stretch">
              <div className="flex flex-col items-start gap-[34px] self-stretch">
                <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
                  <h1 className="text-size-7 font-normal text-[#414C5C]">
                    Traffic Management
                  </h1>
                </div>
                {/* Subheading */}
                <p className="w-full text-[34px] font-medium md:w-[467px]">
                  Manage who Enters your Premises
                </p>
                <p className="self-stretch text-size-5 font-normal opacity-70">
                  InLights revolutionizes gate security with a cutting-edge
                  solution that fuses AI-driven vehicle identification, CNIC
                  scanning, and real-time tracking for unmatched access control
                  and theft prevention.
                </p>
                <div className="flex items-center gap-[9px] self-stretch py-[8px]">
                  <span className="text-size-7 font-normal">
                    Discover InLights
                  </span>
                  <div className="flex h-[15px] w-[15px] items-center justify-center">
                    <MoveUpRight width={15} height={15} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-[107px] left-[16px] h-[307px] w-[567px]">
              <div className="border-opacity-44 h-[308px] w-[461px] flex-shrink-0 rounded-[12px]">
                <Image
                  src={"/products/manage_who_enters_your_premises.png"}
                  alt={"Traffic"}
                  width={566}
                  height={307}
                  className="absolute left-[16px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
