import Underline from "@/components/Underline";
import Image from "next/image";

interface StoriesCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

export default function StoriesCard({
  title,
  category,
  description,
  image,
}: StoriesCardProps) {
  return (
    <div className="relative flex w-full flex-col items-start gap-[34px] rounded-[32px] border-[1px] border-borderCustom bg-bg shadow-shadowCustom transition-all duration-300">
      {/* Image with overlay */}
      <div
        className="relative flex h-[174px] flex-shrink-0 flex-col items-center justify-center gap-[10px] self-stretch overflow-hidden rounded-[18px] bg-cover bg-center lg:rounded-[20px]"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* 🔥 Fixed overlay: Now it covers the entire image */}
        <div className="absolute inset-0 bg-[rgba(18,19,22,0.46)] backdrop-blur-[1px]"></div>

        <span className="relative z-10 text-size-4 font-normal">
          {category}
        </span>
      </div>

      {/* Text content */}
      <div className="flex flex-col items-start gap-[14px] self-stretch px-[24px] pb-[24px]">
        <h1 className="line-clamp-1 self-stretch text-size-4 font-bold lg:text-size-3">
          {title}
        </h1>
        <p className="line-clamp-2 overflow-hidden text-size-7 font-normal leading-[20px] text-white opacity-70 lg:text-size-6">
          {description}
        </p>
        <div className="group flex w-fit cursor-pointer items-center gap-[9px] self-stretch py-[8px]">
          <span className="relative text-size-7 font-normal">
            Read More
            <Underline />
          </span>

          <div className="relative flex h-[15px] w-[15px] items-center justify-center">
            <Image
              src="/successStories/up_arrow.png"
              fill
              alt="arrow right"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
