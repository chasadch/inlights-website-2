import { ChevronDown, MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Products() {
  return (
    <section className="flex flex-col items-start gap-[10px] self-stretch bg-black px-[70px] py-[130px]">
      <div className="flex flex-col items-center gap-[64px] self-stretch">
        <div className="flex flex-col items-start gap-[8px]">
          <h1 className="text-center text-size-2 font-medium">Our Products</h1>
        </div>

        <div className="flex w-[1299px] items-center gap-[24px]">
          <div className="flex-grow-1 relative flex h-[591px] flex-col items-start gap-[64px] overflow-hidden rounded-[32px] border-[1px] border-[rgba(45,160,184,0.15)] bg-[#050919] p-[34px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)]">
            <div className="flex flex-col items-start justify-center gap-[24px] self-stretch">
              <div className="flex flex-col items-start gap-[34px] self-stretch">
                <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
                  <h1 className="text-size-7 font-normal text-[#414C5C]">
                    Traffic Management
                  </h1>
                </div>
                {/* Subheading */}
                <p className="w-[467px] text-[34px] font-medium">
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
              <div className="border-opacity-44 h-[308px] w-[461px] flex-shrink-0 rounded-[12px] border-[6px] border-white bg-white">
                1
              </div>
            </div>
          </div>

          <div className="flex-grow-1 relative flex h-[591px] flex-col items-start gap-[64px] overflow-hidden rounded-[32px] border-[1px] border-[rgba(45,160,184,0.15)] bg-[#050919] p-[34px] shadow-[0_0_30px_0_rgba(26,54,163,0.80)]">
            <div className="flex flex-col items-start justify-center gap-[24px] self-stretch">
              <div className="flex flex-col items-start gap-[34px] self-stretch">
                <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
                  <h1 className="text-size-7 font-normal text-[#414C5C]">
                    Traffic Management
                  </h1>
                </div>
                {/* Subheading */}
                <p className="w-[467px] text-[34px] font-medium">
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
              <div className="border-opacity-44 h-[308px] w-[461px] flex-shrink-0 rounded-[12px] border-[6px] border-white bg-white">
                1
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
