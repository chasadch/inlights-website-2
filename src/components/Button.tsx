"use client";
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
  className = "",
  ...rest
}: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center gap-[10.36px] lg:gap-[12px] text-size-6 font-medium transition duration-300";

  if (variant === "gradient") {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} group relative h-[52px] rounded-[10px] bg-gradient-to-b from-[#552DDA] to-[#1D3E80] px-[20px] py-[14px] text-white shadow-shadowCustom before:absolute before:inset-0 before:rounded-[10px] before:border-[3px] before:border-transparent before:transition-all before:duration-300 before:content-[''] hover:bg-none hover:before:border-[#552DDA] ${className}`}
        {...rest}
      >
        <span>{children}</span>
        {icon && <MoveUpRight width={17} height={17} />}
      </button>
    );
  } else {
    // Outline variant: the gradient appears only on the border.
    // We force the outer container to have a fixed height (52px) using box-border
    // so that its padding is included in the overall height.
    return (
      <div
        className={`relative box-border inline-block h-[52px] rounded-[10px] bg-gradient-to-b from-[#552DDA] to-[#1D3E80] p-[3px] ${className}`}
      >
        <button
          onClick={onClick}
          className={`${baseClasses} relative h-full w-full rounded-[7px] bg-black px-[20px] py-[14px] text-white hover:bg-[#5144DCF7]`}
          {...rest}
        >
          <span>{children}</span>
          {icon && <MoveUpRight width={17} height={17} />}
        </button>
      </div>
    );
  }
}
