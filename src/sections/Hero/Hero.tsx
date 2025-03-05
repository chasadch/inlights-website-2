import Image from "next/image";
import Button from "../../components/Button";

export default function Hero() {
  return (
    <section
      // className="relative h-[585px] self-stretch overflow-hidden lg:h-screen"
      className="relative h-screen self-stretch overflow-hidden"
      style={{
        background:
          "linear-gradient(0deg, rgba(9, 17, 33, 0.80) 0%, rgba(9, 17, 33, 0.80) 100%)",
      }}
    >
      {/* <section
      className="relative h-[585px] self-stretch overflow-hidden lg:h-[810px]"
      style={{
        background:
          "linear-gradient(0deg, rgba(9, 17, 33, 0.80) 0%, rgba(9, 17, 33, 0.80) 100%)",
      }}
    > */}
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-fill"
        src="/hero/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Top Overlay */}
      <div
        className="absolute inset-0 z-10 bg-opacity-80"
        style={{ background: "rgba(9, 17, 33, 0.8)" }}
      ></div>

      {/* Centered Content Container */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[49.73px] pb-[155.41px] pt-[116px] text-center lg:gap-[50px] lg:pl-[120.19px] lg:pr-[120.81px] lg:pt-[161.09px]">
        {/* Main Heading */}
        <div className="flex flex-col items-center gap-[8px] self-stretch lg:gap-[18px]">
          {/* First heading */}
          <h1 className="text-[28px] font-medium lg:text-[34px] xl:text-[44px] 2xl:text-size-1">
            Redefining Smart Cities using
          </h1>
          {/* Second heading */}
          <div className="relative h-[26.862px] w-[881.667px] lg:h-[34px] xl:h-[44px] 2xl:h-[83.16px]">
            <Image
              src={"/hero/artificial_intelligence.png"}
              alt="Hero Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Let's talk button */}
        <Button href="/contact" variant="gradient">
          Lets Talk
        </Button>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-[100.5px] left-1/2 z-20 inline-flex w-[523.724px] -translate-x-1/2 flex-col items-start justify-center gap-[64px] lg:bottom-[87px]">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex flex-col items-center gap-[16px]">
            {/* Paragraph */}
            <p className="text-size-7 font-normal opacity-90 lg:text-size-6 xl:text-size-5">
              IN PARTNERSHIP WITH
            </p>
            {/* Image container */}
            <div className="flex items-center justify-center gap-[40px] lg:gap-[62px]">
              {/* Image 1 */}
              <div className="relative -mt-[8.5px] h-[54px] w-[77px]">
                <Image
                  src={"/hero/nust.svg"}
                  alt="Sdaia image"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Image 2 */}
              <div className="relative h-[40.5px] w-[39.636px] lg:h-[54px] lg:w-[102.847px]">
                <Image
                  src={"/hero/ntdp.png"}
                  alt="Ntdp image"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Image 3 */}
              <div className="relative h-[40.5px] w-[40.5px] lg:h-[54px] lg:w-[54px]">
                <Image
                  src={"/hero/nstp.png"}
                  alt="Nstp image"
                  fill
                  className="-mt-[10px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
