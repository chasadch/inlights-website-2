import { ChevronDown, MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute left-0 top-0 z-50 flex h-[84px] w-full flex-shrink-0 items-center justify-between px-[120px] py-[16px] text-white">
      {/* Logo */}
      <Image
        src={"/header/logo.png"}
        alt="Logo"
        width={156}
        height={18}
        className="flex-shrink-0"
      />

      {/* Navigation */}
      <div className="flex items-center justify-center gap-[9px]">
        <div className="flex items-center justify-center gap-[4px] rounded-[8px] p-[12px]">
          <div className="text-size-4 font-semibold">Home</div>
        </div>
        <div className="flex items-center justify-center gap-[4px] rounded-[8px] p-[12px]">
          <div className="text-size-4 font-semibold">Services</div>
          <ChevronDown width={16} height={16} />
        </div>
        <div className="flex items-center justify-center gap-[4px] rounded-[8px] p-[12px]">
          <div className="text-size-4 font-semibold">Our Products</div>
          <ChevronDown width={16} height={16} />
        </div>
        <div className="flex items-center justify-center gap-[4px] rounded-[8px] p-[12px]">
          <div className="text-size-4 font-semibold">Company</div>
          <ChevronDown width={16} height={16} />
        </div>
      </div>

      {/* Join Us Button */}
      <div className="shadow-[0_0_35.7px_0_rgba(81, 68, 220, 0.97)] flex items-center justify-center gap-[12px] rounded-[10px] border-[3px] border-[#552DDA] px-[20px] py-[14px]">
        <span className="text-size-6 font-medium">Join Us</span>
        <MoveUpRight width={17} height={17} />
      </div>
    </header>
  );
}
