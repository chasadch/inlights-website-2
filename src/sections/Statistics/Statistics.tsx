import Image from "next/image";

export default function Statistics() {
  return (
    <section
      className="bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/statistics/bg.png)" }}
    >
      {/* Outer container */}
      <div className="flex w-full flex-col items-start gap-4 py-4 pr-4 sm:py-6 sm:pr-6 lg:flex-row lg:gap-10 lg:py-[70px] lg:pr-[120px]">
        {/* Main content container */}
        <div className="bg-lightgray flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-10">
          {/* Child #1 (Large Block) */}
          <div className="flex h-96 w-full flex-none flex-col items-end justify-center gap-2 p-4 md:h-[400px] lg:h-[490px] lg:w-[632px] lg:p-[48px]">
            <div className="flex h-full w-full flex-none flex-col items-end justify-center gap-2 rounded-br-[75px] rounded-tr-[75px] bg-[linear-gradient(to_right,#4935FF,#020F12)] p-4 shadow-[0_4px_50px_20px_rgba(26,54,163,0.90)] md:rounded-br-[100px] md:rounded-tr-[100px] lg:w-[776px] lg:rounded-br-[150px] lg:rounded-tr-[150px] lg:p-[48px]">
              <div className="flex w-full flex-none flex-col items-center gap-2 md:w-full md:gap-2 lg:w-[493px] lg:gap-[10px]">
                <div className="flex w-12 flex-col justify-center bg-gradient-to-b from-[#9B81F0] to-[#738DC2] bg-clip-text text-center text-[28px] font-bold text-transparent lg:w-[69px] lg:text-[36px]">
                  CO₂
                </div>
                <div className="text-[80px] font-semibold lg:text-[120px]">
                  32.5MT
                </div>
                <div className="text-center text-[18px] font-normal opacity-70 lg:text-[26px]">
                  Emissions Reduced
                </div>
              </div>
            </div>
          </div>

          {/* Child #2 (First Set of Two Circles) */}
          <div className="flex flex-none flex-col items-center gap-4 lg:gap-[85px]">
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-2 rounded-full border border-[rgba(45,160,184,0.15)] bg-[#050919] p-4 shadow-[0_0_30px_0_rgba(26,54,163,0.80)] md:h-[240px] md:w-[240px] lg:p-[32px]">
              <Image
                src="/statistics/query_stats.png"
                alt="Statistics 1"
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-size-2 font-semibold">03+</div>
              <div className="text-center text-size-6 font-normal">
                Years of Growth
              </div>
            </div>
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-2 rounded-full border border-[rgba(45,160,184,0.15)] bg-[#050919] p-4 shadow-[0_0_30px_0_rgba(26,54,163,0.80)] md:h-[240px] md:w-[240px] lg:p-[32px]">
              <Image
                src="/statistics/home_work.png"
                alt="Statistics 2"
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-size-2 font-semibold">03</div>
              <div className="text-center text-size-6 font-normal">
                Global Office
              </div>
            </div>
          </div>

          {/* Child #3 (Second Set of Two Circles) */}
          <div className="flex flex-none flex-col items-center gap-4 lg:gap-[85px]">
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-2 rounded-full border border-[rgba(45,160,184,0.15)] bg-[#050919] p-4 shadow-[0_0_30px_0_rgba(26,54,163,0.80)] md:h-[240px] md:w-[240px] lg:p-[32px]">
              <Image
                src="/statistics/emoji_objects.png"
                alt="Statistics 3"
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-size-2 font-semibold">6</div>
              <div className="text-center text-size-6 font-normal">
                Products Cultivated
              </div>
            </div>
            <div className="flex h-[200px] w-[200px] flex-col items-center justify-center gap-2 rounded-full border border-[rgba(45,160,184,0.15)] bg-[#050919] p-4 shadow-[0_0_30px_0_rgba(26,54,163,0.80)] md:h-[240px] md:w-[240px] lg:p-[32px]">
              <Image
                src="/statistics/emoji_objects.png"
                alt="Statistics 4"
                width={36}
                height={36}
                className="opacity-70"
              />
              <div className="text-center text-size-2 font-semibold">6</div>
              <div className="text-center text-size-6 font-normal">
                Products Cultivated
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
