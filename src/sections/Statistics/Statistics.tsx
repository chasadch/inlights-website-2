import Image from "next/image";

export default function Statistics() {
  return (
    <section
      className="overflow-x-hidden bg-black bg-cover bg-center bg-no-repeat py-[10.229px] lg:py-[70px]"
      style={{ backgroundImage: "url(/statistics/bg.png)" }}
    >
      <div className="flex items-start gap-[10px] self-stretch">
        {/* Added w-full so the parent’s justify-between works correctly */}
        <div className="flex h-[444px] w-full flex-col items-center gap-[20px] lg:h-[541px] lg:flex-row lg:justify-between">
          {/* Child #1 (large block)  */}

          <Image
            src="/statistics/child1_sm.png"
            alt="Statistics"
            width={1255}
            height={512}
            className="block flex-shrink-0 lg:hidden"
          />

          <Image
            src="/statistics/child1_lg.png"
            alt="Statistics"
            width={538}
            height={512}
            className="hidden flex-shrink-0 lg:block"
          />

          {/* Content 375 pixels */}
          <div className="flex items-center gap-[15px] px-[16px] sm:gap-[25px] md:gap-[35px] lg:hidden">
            {/* First box */}
            <div className="flex flex-col items-start gap-[20px]">
              <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-[0px_0px_7.812px_0px_rgba(26,54,163,0.8)]">
                <Image
                  src={"/statistics/query_stats.png"}
                  alt={"Statistics 1"}
                  width={14}
                  height={14}
                  className="flex-shrink-0 opacity-70"
                />
                <div className="text-center text-[15px] font-semibold">03+</div>
                <div className="text-center text-size-7 font-normal leading-[5.208px]">
                  Years of Growth
                </div>
              </div>

              <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-[0px_0px_7.812px_0px_rgba(26,54,163,0.8)]">
                <Image
                  src={"/statistics/home_work.png"}
                  alt={"Statistics 2"}
                  width={14}
                  height={14}
                  className="flex-shrink-0 opacity-70"
                />
                <div className="text-center text-[15px] font-semibold">03</div>
                <div className="text-center text-size-7 font-normal leading-[5.208px]">
                  Global Offices
                </div>
              </div>
            </div>

            {/* Second box */}
            <div className="flex flex-col items-start gap-[20px]">
              <div className="flex flex-col items-start gap-[20px]">
                <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-[0px_0px_7.812px_0px_rgba(26,54,163,0.8)]">
                  <Image
                    src={"/statistics/emoji_objects.png"}
                    alt={"Statistics 1"}
                    width={14}
                    height={14}
                    className="flex-shrink-0 opacity-70"
                  />
                  <div className="text-center text-[15px] font-semibold">6</div>
                  <div className="text-center text-size-7 font-normal leading-[5.208px]">
                    Products Cultivated
                  </div>
                </div>

                <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-[0px_0px_7.812px_0px_rgba(26,54,163,0.8)]">
                  <Image
                    src={"/statistics/emoji_objects.png"}
                    alt={"Statistics 2"}
                    width={14}
                    height={14}
                    className="flex-shrink-0 opacity-70"
                  />
                  <div className="text-center text-[15px] font-semibold">6</div>
                  <div className="text-center text-size-7 font-normal leading-[5.208px]">
                    Products Cultivated
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content 1024 pixels */}
          <div className="hidden flex-col items-center gap-[15px] lg:flex lg:gap-[85px]">
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px] 2xl:h-[240px] 2xl:w-[240px]">
              <Image
                src={"/statistics/query_stats.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="h-[14px] w-[14px] flex-shrink-0 opacity-70 lg:h-[36px] lg:w-[36px]"
              />
              <div className="text-center text-[30px] font-semibold 2xl:text-size-2">
                03+
              </div>
              <div className="text-center text-size-7 font-normal lg:text-size-6">
                Years of Growth
              </div>
            </div>
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px] 2xl:h-[240px] 2xl:w-[240px]">
              <Image
                src={"/statistics/home_work.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-[30px] font-semibold 2xl:text-size-2">
                03
              </div>
              <div className="text-center text-size-7 font-normal lg:text-size-6">
                Global Office
              </div>
            </div>
          </div>

          {/* Child #3 (second set of two circles) – Added flex-none 1024 pixels */}
          <div className="mr-[70px] hidden flex-col items-center gap-[15px] lg:flex lg:gap-[85px] xl:mr-[140px]">
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px] 2xl:h-[240px] 2xl:w-[240px]">
              <Image
                src={"/statistics/emoji_objects.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-[30px] font-semibold 2xl:text-size-2">
                6
              </div>
              <div className="text-center text-size-7 font-normal lg:text-size-6">
                Products Cultivated
              </div>
            </div>
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-[#050919] px-[8.333px] py-[20px] shadow-shadowCustom lg:gap-[10px] lg:rounded-[200px] lg:border-[1px] lg:p-[32px] 2xl:h-[240px] 2xl:w-[240px]">
              <Image
                src={"/statistics/emoji_objects.png"}
                alt={"Statistics 1"}
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-[30px] font-semibold 2xl:text-size-2">
                6
              </div>
              <div className="text-center text-size-7 font-normal lg:text-size-6">
                Products Cultivated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
