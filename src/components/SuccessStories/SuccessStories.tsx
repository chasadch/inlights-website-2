"use client";

import Image from "next/image";
import { useState } from "react";
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

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleScrollLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (startIndex + itemsPerPage < stories.length) {
      setStartIndex(startIndex + 1);
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
              onClick={handleScrollLeft}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#B4BBC6] transition-all hover:scale-110 hover:bg-[#B4BBC6] hover:bg-opacity-20 disabled:opacity-50"
              disabled={startIndex === 0}
            >
              <Image
                src="/successStories/left.png"
                alt="Arrow Left"
                width={24}
                height={24}
              />
            </button>
            <button
              onClick={handleScrollRight}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#B4BBC6] transition-all hover:scale-110 hover:bg-[#B4BBC6] hover:bg-opacity-20 disabled:opacity-50"
              disabled={startIndex + itemsPerPage >= stories.length}
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
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-3">
          {stories
            .slice(startIndex, startIndex + itemsPerPage)
            .map((story, index) => (
              <StoriesCard
                key={index}
                image={story.image}
                category={story.category}
                title={story.title}
                description={story.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
