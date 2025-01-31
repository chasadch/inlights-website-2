import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";

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
      <Button
        background="bg-transparent"
        borderColor="border-gradientDark"
        hover="hover:bg-gradient-to-r hover:from-gradientLight hover:to-gradientDark hover:border-none hover:ring-0"
      >
        Join Us
      </Button>
    </header>
  );
}
