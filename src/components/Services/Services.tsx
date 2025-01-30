import React from "react";
import { Code, Palette, Eye, Scissors } from "lucide-react";
export default function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-[#8B9AFF]" />,
      title: "Web Development",
      description:
        "Crafting dynamic, user-centric websites with cutting-edge design and seamless functionality to elevate yo",
    },
    {
      icon: <Palette className="h-8 w-8 text-[#8B9AFF]" />,
      title: "Product Design",
      description:
        "Transforming raw ideas into innovative, user-focused products with seamless design and unmatched functionality.",
    },
    {
      icon: <Eye className="h-8 w-8 text-[#8B9AFF]" />,
      title: "Computer Vision",
      description:
        "Empowering businesses with advanced computer vision solutions that unlock insights and automate processes with",
    },
    {
      icon: <Scissors className="h-8 w-8 text-[#8B9AFF]" />,
      title: "AI Automation",
      description:
        "Revolutionizing workflows with AI-driven automation, delivering efficiency, accuracy, and smarter decision-making.",
    },
  ];
  return (
    <main className="min-h-screen w-full bg-black p-8 text-white">
      <div className="container mx-auto max-w-7xl">
        <h1 className="mb-16 text-center text-5xl font-medium">Our Services</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative cursor-pointer rounded-lg bg-[#0A0B14] p-6 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute -inset-[1px] rounded-lg bg-[#4154F6] opacity-50 blur-sm transition-opacity group-hover:opacity-70" />
              <div className="relative rounded-lg bg-[#0A0B14] p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="mb-3 text-xl font-medium">{service.title}</h3>
                <p className="mb-4 text-sm text-gray-400">
                  {service.description}
                </p>
                <div className="flex items-center text-sm text-[#8B9AFF]">
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
    </main>
  );
}
