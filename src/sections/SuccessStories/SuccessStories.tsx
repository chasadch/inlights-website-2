"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import StoriesCard from "./StoriesCard";

export default function SuccessStories() {
  const router = useRouter();

  const stories = [
    {
      image: "/successStories/coverPhoto_1.png",
      category: "GeoHealth",
      title: "AI-Powered Physical Exercise Coach",
      description:
        "AI-powered exercise monitoring system for real-time pose detection, angle measurements, and form correction feedback.",
    },
    {
      image: "/successStories/coverPhoto_2.png",
      category: "Retrofarm",
      title: "Retro & Vintage E-commerce Store",
      description:
        "RetroFam offers a seamless shopping experience with advanced search, customization, and secure payment integration.",
    },
    {
      image: "/successStories/coverPhoto_3.png",
      category: "Smart TrafficLights",
      title: "Smart Traffic Lights System",
      description:
        "Healthcare providers are witnessing notable enhancements in service quality with our platform.",
    },
    {
      image: "/successStories/coverPhoto_1.png",
      category: "GeoHealth",
      title: "AI-Powered Physical Exercise Coach",
      description:
        "AI-powered exercise monitoring system for real-time pose detection, angle measurements, and form correction feedback.",
    },
    {
      image: "/successStories/coverPhoto_2.png",
      category: "Manufacturing",
      title: "Project 2",
      description:
        "Manufacturers are achieving remarkable gains in productivity with our preventive maintenance system.",
    },
    {
      image: "/successStories/coverPhoto_3.png",
      category: "Health Care",
      title: "Project 3",
      description:
        "Healthcare providers are witnessing notable enhancements in service quality with our platform.",
    },
    {
      image: "/successStories/coverPhoto_1.png",
      category: "GeoHealth",
      title: "AI-Powered Physical Exercise Coach",
      description:
        "AI-powered exercise monitoring system for real-time pose detection, angle measurements, and form correction feedback.",
    },
    {
      image: "/successStories/coverPhoto_2.png",
      category: "Manufacturing",
      title: "Project 2",
      description:
        "Manufacturers are achieving remarkable gains in productivity with our preventive maintenance system.",
    },
    {
      image: "/successStories/coverPhoto_3.png",
      category: "Health Care",
      title: "Project 3",
      description:
        "Healthcare providers are witnessing notable enhancements in service quality with our platform.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  // Instead of useState
  const visibleCards = 3; // Show 3 cards initially

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setMaxScroll(container.scrollWidth - container.clientWidth);
      const handleScrollEvent = () => {
        setScrollPos(container.scrollLeft);
      };
      container.addEventListener("scroll", handleScrollEvent);
      return () => container.removeEventListener("scroll", handleScrollEvent);
    }
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const cardWrapper = containerRef.current.firstElementChild as HTMLElement;
      if (cardWrapper) {
        const cardWidth = cardWrapper.offsetWidth;
        const gap = 24; // gap-[24px]
        const scrollDistancePerCard = cardWidth + gap;
        const scrollDistance = scrollDistancePerCard; // Scroll 1 card at a time
        containerRef.current.scrollBy({
          left: direction === "right" ? scrollDistance : -scrollDistance,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      data-aos="slide-left"
      id="success"
      className="mx-auto min-h-screen max-w-[1440px] px-[16px] pb-[126px] text-white lg:px-[70px] lg:py-[30px]"
    >
      {/* <div className="mx-auto max-w-[1440px] px-[16px] pb-[126px] text-white lg:px-[70px] lg:py-[140px]"> */}
      <div className="flex flex-col items-start gap-[24px] self-stretch lg:gap-[32px]">
        {/* Header Section */}
        <div className="flex items-center justify-center gap-[48px] self-stretch lg:justify-between">
          <h1
            onClick={() => router.push("success_stories")}
            className="cursor-pointer text-size-3 font-medium lg:text-size-2 lg:font-normal"
          >
            Our Success Stories
          </h1>

          {/* Navigation Buttons */}
          <div className="hidden gap-[10px] lg:flex">
            <button
              onClick={() => handleScroll("left")}
              disabled={scrollPos <= 0}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#B4BBC6] transition-all hover:scale-110 hover:bg-[#B4BBC6] hover:bg-opacity-20 disabled:opacity-50"
            >
              <div className="relative h-[24px] w-[24px]">
                <Image
                  src="/successStories/left.png"
                  alt="Arrow Left"
                  fill
                  className="object-cover"
                />
              </div>
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={scrollPos >= maxScroll - 1}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#B4BBC6] transition-all hover:scale-110 hover:bg-[#B4BBC6] hover:bg-opacity-20 disabled:opacity-50"
            >
              <div className="relative h-[24px] w-[24px]">
                <Image
                  src="/successStories/right.png"
                  alt="Arrow Left"
                  fill
                  className="object-cover"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Slider Section */}
        <div
          ref={containerRef}
          className="grid w-full grid-cols-1 items-center gap-[24px] self-stretch sm:grid-cols-2 lg:hidden"
        >
          {stories.map((story, index) => (
            <div key={index}>
              <StoriesCard
                image={story.image}
                category={story.category}
                title={story.title}
                description={story.description}
              />
            </div>
          ))}
        </div>

        {/* Desktop Slider Section */}
        <div
          ref={containerRef}
          className="hidden gap-[24px] self-stretch overflow-x-scroll scroll-smooth p-[18px] lg:flex"
          style={{
            scrollbarWidth: "none", // Hides scrollbar in Firefox
            msOverflowStyle: "none", // Hides scrollbar in IE/Edge
          }}
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `calc((100% - 40px) / ${visibleCards})` }} // Adjust width based on visible cards
            >
              <StoriesCard
                image={story.image}
                category={story.category}
                title={story.title}
                description={story.description}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
