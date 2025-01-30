import React from "react";
import { Code, Palette, Eye, Scissors, ArrowRight } from "lucide-react";
import Image from "next/image";
export default function Services() {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-[#8B9AFF]" />,
      title: "Web Development",
      description:
        "Crafting dynamic, user-centric websites with cutting-edge design and seamless functionality to elevate yo",
    },
    {
      icon: <Palette className="h-10 w-10 text-[#8B9AFF]" />,
      title: "Product Design",
      description:
        "Transforming raw ideas into innovative, user-focused products with seamless design and unmatched functionality.",
    },
    {
      icon: <Eye className="h-10 w-10 text-[#8B9AFF]" />,
      title: "Computer Vision",
      description:
        "Empowering businesses with advanced computer vision solutions that unlock insights and automate processes with",
    },
    {
      icon: <Scissors className="h-10 w-10 text-[#8B9AFF]" />,
      title: "AI Automation",
      description:
        "Revolutionizing workflows with AI-driven automation, delivering efficiency, accuracy, and smarter decision-making.",
    },
  ];
  return (
    <main className="min-h-screen w-full bg-black p-8 text-white">
      <div className="container mx-auto mb-20">
        <h1 className="mb-16 text-center text-5xl font-medium">Our Services</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-borderCustom group relative cursor-pointer rounded-lg border bg-bg p-1 shadow-custom transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="bg- absolute -inset-[1px] rounded-lg opacity-50 blur-sm transition-opacity group-hover:opacity-70" />
              <div className="relative rounded-lg p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-xl font-medium">{service.title}</h3>
                <p className="mb-4 w-[257px] text-sm text-gray-400">
                  {service.description}
                </p>
                <div className="flex items-center text-sm">
                  Discover Insights
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33333M12.6667 8L8.00001 12.6667"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-8 h-[255px] overflow-hidden rounded-[32px]">
        {" "}
        {/* Fixed height and rounded corners */}
        {/* Image */}
        <Image
          src={"/services/this_is_engineering.png"}
          alt="Background"
          fill
          className="object-cover"
        />
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          {" "}
          {/* Center content */}
          <div className="container mx-auto flex items-center justify-between px-6 md:px-12">
            <h1 className="max-w-6xl text-4xl font-medium text-white md:text-6xl">
              We Are Looking for Exceptional Talent
            </h1>
            <button className="hidden items-center rounded-full bg-gradient-to-r from-gradientDark to-gradientLight px-6 py-3 text-white transition-opacity hover:opacity-90 md:flex">
              Join Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
