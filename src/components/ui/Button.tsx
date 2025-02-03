import { MoveUpRight } from "lucide-react";
import React from "react";

interface ButtonProps {
  variant?: "gradient" | "outline";
  children: React.ReactNode;
}

export default function Button({ variant, children }: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-[12px] rounded-[10px] px-[20px] py-[14px] text-size-6 font-medium";

  const isGradient = variant === "gradient";

  return (
    <button
      className={`${baseClasses} ${
        isGradient
          ? "border-transparent bg-gradient-to-b from-[#552DDA] to-[#1D3E80] text-white shadow-shadowCustom hover:bg-transparent"
          : "border-[3px] border-[#552DDA] bg-transparent text-white shadow-[0px_0px_35.7px_rgba(81,68,220,0.97)] hover:bg-[#5144DCF7]"
      }`}
    >
      <span>{children}</span>
      <MoveUpRight width={17} height={17} />
    </button>
  );
}
