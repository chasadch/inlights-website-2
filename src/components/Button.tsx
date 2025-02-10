import React from "react";
import { MoveUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient" | "outline";
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
}

export default function Button({
  variant,
  children,
  icon = true,
  onClick,
  className,
  ...rest
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-[10.36px] lg:gap-[12px] rounded-[10px] px-[20px] py-[14px] text-size-6 font-medium transition duration-300 box-border";

  const isGradient = variant === "gradient";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${className} group relative h-[52px] ${
        isGradient
          ? `bg-gradient-to-b from-[#552DDA] to-[#1D3E80] text-white shadow-shadowCustom before:absolute before:inset-0 before:rounded-[10px] before:border-[3px] before:border-transparent before:transition-all before:duration-300 before:content-[''] hover:bg-none hover:before:border-[#552DDA]`
          : `border-[3px] border-[#552DDA] bg-transparent text-white shadow-[0px_0px_35.7px_rgba(81,68,220,0.97)] hover:bg-[#5144DCF7]`
      }`}
      {...rest}
    >
      <span>{children}</span>
      {icon && <MoveUpRight width={17} height={17} />}
    </button>
  );
}
