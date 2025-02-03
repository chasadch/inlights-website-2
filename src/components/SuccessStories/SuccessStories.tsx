"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import StoriesCard from "../ui/StoriesCard";

export default function SuccessStories() {
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
      image: "/successStories/coverPhoto_2.png",
      category: "Manufacturing",
      title: "Project 2",
      description:
        "Manufacturers are achieving remarkable gains in productivity with our preventive maintenance system.",
    },
    {
      image: "/successStories/coverPhoto_1.png",
      category: "GeoHealth",
      title: "AI-Powered Physical Exercise Coach",
      description:
        "AI-powered exercise monitoring system for real-time pose detection, angle measurements, and form correction feedback.",
    },
  ];

  // Ref for the horizontal scroll container.
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsPerPage = 3; // Number of items visible (and scrolled per click)

  // Track current scroll position and maximum scroll.
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      // Set maximum scrollable distance.
      setMaxScroll(container.scrollWidth - container.clientWidth);
      const handleScrollEvent = () => {
        setScrollPos(container.scrollLeft);
      };
      container.addEventListener("scroll", handleScrollEvent);
      return () => container.removeEventListener("scroll", handleScrollEvent);
    }
  }, []);

  // Compute and perform smooth scrolling by the width of three card wrappers.
  const handleScroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const cardWrapper = containerRef.current.firstElementChild as HTMLElement;
      if (cardWrapper) {
        const cardWidth = cardWrapper.offsetWidth;
        const gap = 24; // gap-[24px] in pixels
        const scrollDistancePerCard = cardWidth + gap;
        const scrollDistance = scrollDistancePerCard * itemsPerPage;
        containerRef.current.scrollBy({
          left: direction === "right" ? scrollDistance : -scrollDistance,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="bg-black px-[70px] py-[140px] text-white">
      <div className="flex flex-col items-start gap-[64px] self-stretch">
        {/* Header Section */}
        <div className="flex items-center justify-between gap-[48px] self-stretch">
          <h1 className="text-size-2 font-normal">Our Success Stories</h1>

          {/* Navigation Buttons */}
          <div className="flex gap-[10px]">
            <button
              onClick={() => handleScroll("left")}
              disabled={scrollPos <= 0}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#B4BBC6] transition-all hover:scale-110 hover:bg-[#B4BBC6] hover:bg-opacity-20 disabled:opacity-50"
            >
              <Image
                src="/successStories/left.png"
                alt="Arrow Left"
                width={24}
                height={24}
              />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={scrollPos >= maxScroll - 1}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#B4BBC6] transition-all hover:scale-110 hover:bg-[#B4BBC6] hover:bg-opacity-20 disabled:opacity-50"
            >
              <Image
                src="/successStories/right.png"
                alt="Arrow Right"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        {/* Success Stories Grid Section */}
        <div
          ref={containerRef}
          className="flex gap-[24px] overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: "none" }} // for Firefox
        >
          {stories.map((story, index) => (
            // Wrap each card to force it to take up one-third of the available width.
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: "calc((100% - 48px) / 3)" }}
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
      {/* Hide scrollbar for WebKit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
