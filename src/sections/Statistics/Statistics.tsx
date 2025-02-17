import Image from "next/image";

export default function Statistics() {
  return (
    <section
      className="bg-black bg-cover bg-center bg-no-repeat py-[18.229px] lg:py-[70px]"
      style={{ backgroundImage: "url(/statistics/bg.png)" }}
    >
      <div className="flex items-start gap-[10px] self-stretch">
        {/* Added w-full so the parent’s justify-between works correctly */}
        <div className="flex h-[464px] w-full flex-col items-center gap-[20px] lg:h-[541px] lg:flex-row lg:justify-between">
          {/* Child #1 (large block)  */}
          <div className="flex flex-shrink-0 flex-col items-end justify-center gap-[2.604px] py-[12.5px] pl-[12.5px] pr-[70px] lg:w-[432px] lg:gap-[10px] lg:p-[0px] xl:w-[532px] 2xl:w-[572px]">
            <div className="flex h-[127px] w-[418px] flex-shrink-0 flex-col items-center justify-center gap-[2.604px] rounded-br-[39.063px] rounded-tr-[39.063px] bg-[linear-gradient(to_right,#4935FF,#020F12)] p-[48px] shadow-shadowCustom lg:h-[490px] lg:w-full lg:gap-[10px] lg:rounded-br-[150px] lg:rounded-tr-[150px]">
              {/* Content inside the box */}
              <div className="flex w-[128.385px] flex-col items-center gap-[2.604px] lg:w-[493px] lg:gap-[10px]">
                <h1 className="flex w-[24px] flex-col justify-center bg-gradient-to-b from-[#9B81F0] to-[#738DC2] bg-clip-text text-center text-[12.522px] font-bold text-transparent lg:w-[69px] lg:text-[36px]">
                  CO₂
                </h1>
                <div className="text-[31.25px] font-semibold lg:text-[90px] xl:text-[100px] 2xl:text-[120px]">
                  32.5MT
                </div>
                <div className="text-center text-[12px] font-normal opacity-70 lg:text-[26px]">
                  Emissions Reduced
                </div>
              </div>
            </div>
          </div>

          {/* Content 375 pixels */}
          <div className="flex items-center gap-[15px] px-[16px] lg:hidden">
            {/* First box */}
            <div className="flex flex-col items-start gap-[20px]">
              <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-shadowCustom">
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

              <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-shadowCustom">
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
                <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-shadowCustom">
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

                <div className="flex w-[169px] flex-col items-center justify-center gap-[12px] rounded-[52.083px] border-[0.26px] border-borderCustom bg-bg px-[8.333px] py-[20px] shadow-shadowCustom">
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

          {/* Child #2 (first set of two circles) – Added flex-none 1024 pixels */}
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
