import Image from "next/image";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  linkText?: string;
  onClick: () => void;
}

export default function ServiceCard({
  image,
  title,
  description,
  linkText = "Discover Insights",
  onClick,
}: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="border-[rgba(45, 160, 184, 0.15)] group flex flex-grow cursor-pointer flex-col items-start gap-[16px] rounded-[32px] border border-borderCustom bg-bg px-[16px] py-[20px] shadow-shadowCustom transition-transform duration-300 hover:scale-105 lg:p-[24px]"
    >
      <div className="relative h-[72px] w-[72px]">
        {/* Service Icon */}
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Service Info */}
      <div className="flex flex-col items-start gap-[14px] self-stretch">
        <h1 className="text-size-3 font-semibold">{title}</h1>
        <p
          className="self-stretch overflow-hidden text-size-7 font-normal leading-[20px] opacity-70 lg:text-size-6"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {description}
        </p>

        {/* Link */}
        <div className="flex items-start gap-[9px] self-stretch py-[8px]">
          <span className="relative text-size-7 font-normal leading-[20px]">
            {linkText}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
          </span>
          <div className="relative flex h-[15px] w-[15px] items-center justify-center">
            <Image
              src="/services/up_arrow.png"
              alt="Arrow Right"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
