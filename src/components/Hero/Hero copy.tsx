import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A0B14] bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-6 text-center">
        <h1 className="mb-12 w-[1200px]">
          <div className="mb-4 text-4xl font-medium text-white md:text-6xl lg:text-7xl">
            Redefining Smart Cities using
          </div>
          <div className="bg-gradient-to-r from-[rgba(255,255,255,0.31)] via-[#552DDA] to-[rgba(255,255,255,0.31)] bg-clip-text text-4xl font-medium text-transparent md:text-6xl lg:text-7xl">
            Artificial Intelligence
          </div>
        </h1>

        {/* Button */}
        <button className="group relative mb-24">
          <div className="absolute -inset-[3px] rounded-lg bg-bg opacity-75 blur-md transition-opacity group-hover:opacity-100"></div>
          <div className="relative flex items-center rounded-lg bg-gradient-to-r from-gradientDark to-gradientLight px-6 py-3 text-white shadow-custom">
            Let&apos;s Talk
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </button>

        {/* Partners Section */}
        <div className="text-center">
          <div className="mb-8 text-sm text-gray-400">IN PARTNERSHIP WITH</div>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <img
              src={"/hero/ntdp.png"}
              alt="Partner 1"
              className="h-[53px] w-[53px] opacity-70"
            />
            <img
              src={"/hero/sdaia.png"}
              alt="Partner 2"
              className="h-[24px] w-[108px] opacity-70"
            />
            <img
              src={"/hero/nstp.png"}
              alt="Partner 3"
              className="h-[53px] w-[53px] opacity-70"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
