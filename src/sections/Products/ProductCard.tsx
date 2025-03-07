import Underline from "@/components/Underline";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  onClick: (title: string) => void;
  imagePosition?: "first" | "second";
}

export default function ProductCard({
  title,
  subtitle,
  description,
  imageSrc,
  onClick,
  imagePosition = "first",
}: ProductCardProps) {
  return (
    <motiondiv className="relative flex h-[426px] w-full flex-col items-start gap-[64px] overflow-hidden rounded-[32px] border-[1px] border-borderCustom bg-bg px-[16px] py-[20px] shadow-shadowCustom transition-transform duration-300 xl:h-[591px] xl:p-[34px]">
      <div className="flex flex-col items-start justify-center gap-[20px] self-stretch xl:gap-[24px]">
        <div className="flex flex-col items-start gap-[20px] self-stretch lg:gap-[34px]">
          <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
            <h1
              onClick={() => onClick(title)}
              className="text-size-7 font-normal text-[#414C5C]"
            >
              {title}
            </h1>
          </div>
          {/* Subheading */}
          <p className="w-full text-[20px] font-medium xl:text-[34px] xl:leading-none">
            {subtitle}
          </p>
          <p className="self-stretch text-size-7 font-normal leading-[20px] opacity-70 xl:text-size-5">
            {description}
          </p>
          <div
            onClick={() => onClick(title)}
            className="flex w-fit cursor-pointer items-start gap-[9px] self-stretch"
          >
            <span className="group relative text-size-7 font-normal">
              Discover Insights
              <Underline />
            </span>
            <div className="flex h-[15px] w-[15px] items-center justify-center">
              <div className="relative h-[15px] w-[15px]">
                <Image
                  src={"/products/up_arrow.png"}
                  alt="arrow"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[120px] w-[326px] lg:h-[206px] lg:w-[580px]">
        <div className="border-opacity-44 relative h-[206px] w-[580px] flex-shrink-0 rounded-[12px]">
          <div
            className={`absolute h-[120px] w-[326px] object-cover lg:bottom-0 lg:h-[206px] lg:w-[580px] ${
              imagePosition === "second"
                ? "left-[16px] lg:left-[5%]"
                : "left-[8px] lg:left-[2%]"
            }`}
          >
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>
    </motiondiv>
  );
}
