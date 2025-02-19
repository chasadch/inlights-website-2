"use client";
import Image from "next/image";
import React from "react";

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
    "flex items-center justify-center gap-[10.36px] text-size-7 font-medium lg:text-size-6 transition duration-300";

  if (variant === "gradient") {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} group relative h-[36px] rounded-[10px] bg-gradient-to-b from-[#552DDA] to-[#1D3E80] px-[20px] py-[14px] text-white shadow-[0px_0px_35.7px_0px_rgba(81,68,220,0.97)] before:absolute before:inset-0 before:rounded-[10px] before:border-[3px] before:border-transparent before:transition-all before:duration-300 before:content-[''] hover:bg-none hover:before:border-[#552DDA] lg:h-[52px] ${className}`}
        {...rest}
      >
        <span>{children}</span>
        {icon && (
          <Image src="/hero/up_arrow.png" alt="Arrow" width={15} height={15} />
        )}
      </button>
    );
  } else {
    // Outline variant: show gradient border normally but hide it on hover.
    return (
      <div
        className={`group relative box-border inline-block h-[36px] rounded-[10px] p-[3px] lg:h-[52px] ${className}`}
      >
        {/* Gradient border overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-b from-[#552DDA] to-[#1D3E80] transition-opacity duration-300 group-hover:opacity-0" />
        <button
          onClick={onClick}
          className={`${baseClasses} relative h-full w-full rounded-[7px] bg-black px-[20px] py-[14px] text-white hover:bg-[#5144DCF7]`}
          {...rest}
        >
          <span>{children}</span>
          {icon && (
            <Image
              src="/hero/up_arrow.png"
              alt="Arrow"
              width={15}
              height={15}
            />
          )}
        </button>
      </div>
    );
  }
}
