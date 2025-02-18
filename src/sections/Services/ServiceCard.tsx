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
      className="border-[rgba(45, 160, 184, 0.15)] flex flex-grow cursor-pointer flex-col items-start gap-[16px] rounded-[32px] border border-borderCustom bg-bg px-[16px] py-[20px] shadow-shadowCustom transition-transform duration-300 hover:scale-105 lg:p-[24px]"
    >
      {/* Service Icon */}
      <Image
        src={image}
        alt={title}
        width={72}
        height={72}
        className="flex-shrink-0"
      />

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
          <span className="text-size-7 font-normal leading-[20px]">
            {linkText}
          </span>
          <div className="flex h-[15px] w-[15px] items-center justify-center">
            <Image
              src="/services/up_arrow.png"
              alt="Arrow Right"
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
