"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

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

  // State for animation control
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Effect to handle seamless looping
  useEffect(() => {
    if (currentIndex === testimonials.length) {
      setTimeout(() => {
        setCurrentIndex(0);
        if (sliderRef.current) {
          sliderRef.current.style.transition = "none"; // Instantly reset
          sliderRef.current.style.transform = `translateX(0%)`;
        }
      }, 500); // Match animation duration
    }
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="bg-black px-[70px] py-[160px]">
      <div className="flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center gap-[8px]">
          <h1 className="mb-[64px] w-[864px] text-center text-size-2 font-normal">
            Don&apos;t take our word, see what customers say about us
          </h1>

          {/* Testimonial Card */}
          <div className="border-borderCustom flex w-[1300px] flex-col items-center justify-center gap-[40px] rounded-[32px] border bg-bg p-[48px] shadow-custom">
            <div className="flex items-center gap-[128px]">
              {/* Left Arrow (Disabled for one-way movement) */}
              <button
                className="flex cursor-not-allowed items-center gap-[10px] rounded-[50px] bg-[rgba(255,255,255,0.12)] p-[10px] opacity-50 transition-opacity"
                disabled
              >
                <ArrowLeft width={24} height={24} stroke="currentColor" />
              </button>

              {/* Testimonial Wrapper */}
              <div className="relative w-[800px] overflow-hidden">
                <div
                  ref={sliderRef}
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transition:
                      currentIndex === testimonials.length
                        ? "none"
                        : "transform 0.5s ease-in-out",
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="flex min-w-full flex-col items-center justify-center gap-[32px]"
                    >
                      <p className="self-stretch text-center text-[24px] font-normal opacity-80">
                        {testimonial.text}
                      </p>
                      <div className="flex flex-col items-center justify-center gap-[16px]">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={42}
                          height={42}
                          className="rounded-[42px]"
                        />
                        <div className="flex flex-col items-center gap-[4px]">
                          <div className="text-size-5 font-medium">
                            {testimonial.name}
                          </div>
                          <div className="text-size-7 font-normal">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Cloned First Testimonial for Seamless Loop */}
                  <div className="flex min-w-full flex-col items-center justify-center gap-[32px]">
                    <p className="self-stretch text-center text-[24px] font-normal opacity-80">
                      {testimonials[0].text}
                    </p>
                    <div className="flex flex-col items-center justify-center gap-[16px]">
                      <Image
                        src={testimonials[0].image}
                        alt={testimonials[0].name}
                        width={42}
                        height={42}
                        className="rounded-[42px]"
                      />
                      <div className="flex flex-col items-center gap-[4px]">
                        <div className="text-size-5 font-medium">
                          {testimonials[0].name}
                        </div>
                        <div className="text-size-7 font-normal">
                          {testimonials[0].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={nextTestimonial}
                className="flex items-center gap-[10px] rounded-[50px] bg-[rgba(255,255,255,0.12)] p-[10px] transition-opacity hover:opacity-80"
              >
                <ArrowRight width={24} height={24} stroke="currentColor" />
              </button>
            </div>

            {/* Pagination Dots (Fixed) */}
            <div className="flex -rotate-[90deg] flex-col items-start gap-[6px]">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`h-[6px] w-[6px] rounded-[97px] transition-all duration-300 ${
                    i === currentIndex % testimonials.length
                      ? "h-[18px] bg-white"
                      : "bg-[#929CAB]"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
