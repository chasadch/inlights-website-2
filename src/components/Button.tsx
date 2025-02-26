"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient" | "outline";
  children: React.ReactNode;
  icon?: boolean;
  className?: string;
  href?: string;
}

export default function Button({
  variant,
  children,
  icon = true,
  onClick,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const router = useRouter();

  const baseClasses =
    "flex items-center justify-center gap-[10.36px] text-size-7 font-medium lg:text-size-6 transition duration-300";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      router.push(href);
    }
    if (onClick) {
      onClick(e);
    }
  };

  if (variant === "gradient") {
    return (
      <button
        onClick={handleClick}
        className={`${baseClasses} group relative h-[42px] rounded-[10px] bg-gradient-to-b from-[#552DDA] to-[#1D3E80] px-[20px] py-[14px] text-white shadow-[0px_0px_35.7px_0px_rgba(81,68,220,0.97)] before:absolute before:inset-0 before:rounded-[10px] before:border-[3px] before:border-transparent before:transition-all before:duration-300 before:content-[''] hover:bg-none hover:before:border-[#552DDA] lg:h-[50px] ${className}`}
        {...rest}
      >
        <span>{children}</span>
        {icon && (
          <div className="relative h-[15px] w-[15px]">
            <Image
              src="/hero/up_arrow.png"
              alt="Arrow"
              fill
              className="object-cover"
            />
          </div>
        )}
      </button>
    );
  } else {
    // Outline variant
    return (
      <div
        className={`group relative box-border inline-block h-[36px] rounded-[10px] p-[3px] lg:h-[52px] ${className}`}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-b from-[#552DDA] to-[#1D3E80] transition-opacity duration-300 group-hover:opacity-0" />
        <button
          onClick={handleClick}
          className={`${baseClasses} relative h-full w-full rounded-[7px] bg-black px-[20px] py-[14px] text-white hover:bg-[#5144DCF7]`}
          {...rest}
        >
          <span>{children}</span>
          {icon && (
            <div className="relative h-[15px] w-[15px]">
              <Image
                src="/hero/up_arrow.png"
                alt="Arrow"
                fill
                className="object-cover"
              />
            </div>
          )}
        </button>
      </div>
    );
  }
}
