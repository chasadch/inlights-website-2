"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "InLights Solutions has transformed our campus management. With real-time tracking and automated scheduling, our facilities are always in top condition, allowing us to focus on educating our students.",
      name: "Cameron Williamson",
      role: "CEO",
      image: "/testimonials/ellipse.png",
    },
    {
      text: "Our productivity increased significantly after implementing InLights Solutions. The automation features are a game-changer for our workflow efficiency.",
      name: "Leslie Alexander",
      role: "CTO",
      image: "/testimonials/ellipse.png",
    },
    {
      text: "The best investment we made this year! InLights Solutions optimized our operations beyond expectations. Highly recommended!",
      name: "Michael Johnson",
      role: "Founder",
      image: "/testimonials/ellipse.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const previousTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section className="bg-black px-[16px] py-[32px] lg:px-[70px] lg:py-[160px]">
      <div className="flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center gap-[8px]">
          <h1 className="mb-[64px] hidden w-[864px] text-center text-size-2 font-normal lg:block">
            Don&apos;t take our word, see what customers say about us
          </h1>

          {/* Testimonial Card */}
          <div className="flex w-full max-w-[1300px] flex-col items-center justify-center gap-[24px] rounded-[32px] border-[1px] border-borderCustom bg-bg p-[24px] shadow-shadowCustom sm:p-[32px] lg:gap-[40px] lg:p-[48px]">
            <div className="flex w-full items-center justify-between self-stretch">
              {/* Left Arrow */}
              <button
                onClick={previousTestimonial}
                disabled={currentIndex === 0}
                className={`hidden items-center gap-[10px] rounded-[50px] bg-[rgba(255,255,255,0.12)] p-[10px] transition-opacity sm:flex ${
                  currentIndex === 0
                    ? "cursor-not-allowed opacity-50"
                    : "hover:opacity-80"
                }`}
              >
                <ArrowLeft width={24} height={24} stroke="currentColor" />
              </button>

              {/* Testimonial Slider */}
              <div className="relative w-full max-w-[800px] overflow-hidden">
                <div
                  ref={sliderRef}
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex min-w-full flex-col items-center justify-center gap-[24px] px-[10px] text-center sm:gap-[32px]"
                    >
                      <p className="text-size-7 font-light opacity-80 sm:text-[18px] lg:text-[23.2px]">
                        {testimonial.text}
                      </p>
                      <div className="flex flex-col items-center justify-center gap-[16px]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={42}
                          height={42}
                          className="h-[32px] w-[32px] rounded-full sm:h-[36px] sm:w-[36px] lg:h-[42px] lg:w-[42px]"
                        />
                        <div className="flex flex-col items-center gap-[4px]">
                          <div className="text-size-6 font-medium sm:text-[16px] lg:text-size-5">
                            {testimonial.name}
                          </div>
                          <div className="text-size-7 font-normal text-[#CCD1D8] sm:text-[14px]">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextTestimonial}
                disabled={currentIndex === testimonials.length - 1}
                className={`hidden items-center gap-[10px] rounded-[50px] bg-[rgba(255,255,255,0.12)] p-[10px] transition-opacity sm:flex ${
                  currentIndex === testimonials.length - 1
                    ? "cursor-not-allowed opacity-50"
                    : "hover:opacity-80"
                }`}
              >
                <ArrowRight width={24} height={24} stroke="currentColor" />
              </button>
            </div>

            {/* Mobile Arrows */}
            <div className="flex gap-[16px] sm:hidden">
              <button
                onClick={previousTestimonial}
                disabled={currentIndex === 0}
                className={`items-center gap-[10px] rounded-[50px] bg-[rgba(255,255,255,0.12)] p-[10px] transition-opacity ${
                  currentIndex === 0
                    ? "cursor-not-allowed opacity-50"
                    : "hover:opacity-80"
                }`}
              >
                <ArrowLeft width={24} height={24} stroke="currentColor" />
              </button>

              <button
                onClick={nextTestimonial}
                disabled={currentIndex === testimonials.length - 1}
                className={`items-center gap-[10px] rounded-[50px] bg-[rgba(255,255,255,0.12)] p-[10px] transition-opacity ${
                  currentIndex === testimonials.length - 1
                    ? "cursor-not-allowed opacity-50"
                    : "hover:opacity-80"
                }`}
              >
                <ArrowRight width={24} height={24} stroke="currentColor" />
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex -rotate-[90deg] flex-col items-start gap-[6px]">
              <div className="flex rotate-[90deg] flex-row items-center gap-[6px]">
                {testimonials.map((_, i) => (
                  <div
                    key={i}
                    className={`h-[6px] rounded-[97px] transition-all duration-300 ${
                      i === currentIndex
                        ? "w-[18px] bg-white"
                        : "w-[6px] bg-[#929CAB]"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
