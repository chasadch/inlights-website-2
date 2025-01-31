import { MoveUpRight } from "lucide-react";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  background?: string;
  borderColor?: string;
  hover?: string;
}

export default function Button({
  children,
  background = "",
  borderColor = "",
  hover = "",
}: ButtonProps) {
  return (
    <button
      className={`relative flex items-center justify-center gap-3 rounded-lg border-2 px-5 py-3 transition-all ${background} ${borderColor} ${hover} shadow-shadowCustom focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gradientDark`}
    >
      <span className="text-base font-medium">{children}</span>
      <MoveUpRight width={17} height={17} />
    </button>
  );
}
