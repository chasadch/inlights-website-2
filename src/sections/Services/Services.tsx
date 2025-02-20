"use client";

import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import ServiceBackground from "./ServiceBackground";
import ServiceCard from "./ServiceCard";
import CallToAction from "../CallToAction/CallToAction";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      image: "/services/ph_code-bold.png",
      title: "Web Development",
      description:
        "Crafting dynamic, user-centric websites with cutting-edge design and seamless functionality to elevate your standards.",
    },
    {
      image: "/services/product_design.png",
      title: "Product Design",
      description:
        "Transforming raw ideas into innovative, user-focused products with seamless design and unmatched functionality.",
    },
    {
      image: "/services/computer_vision.png",
      title: "Computer Vision",
      description:
        "Empowering businesses with advanced computer vision solutions that unlock insights and automate processes.",
    },
    {
      image: "/services/ai_automation.png",
      title: "AI Automation",
      description:
        "Revolutionizing workflows with AI-driven automation, delivering efficiency, accuracy, and smarter decision-making.",
    },
  ];

  const handleServiceClick = (title: string) => {
    if (title === "Web Development") router.push("/services/web_development");
    if (title === "Product Design") router.push("/services/uiux_design");
  };

  return (
    <section className="relative w-full overflow-hidden text-white">
      {/* Background SVG wrapped in an absolutely positioned container */}
      <div className="absolute inset-0 left-0 top-0 z-10">
        <ServiceBackground />
      </div>

      {/* Services Header */}
      <div className="relative z-50 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[24px] px-[16px] py-[30px] sm:px-[40px] md:py-[140px] lg:gap-[64px] lg:px-[70px]">
        <h1 className="text-center text-[24px] font-medium lg:text-size-2">
          Our Services
        </h1>

        {/* Service Cards - Responsive Grid */}
        <div className="grid w-full grid-cols-1 gap-[16px] md:grid-cols-2 lg:grid-cols-3 lg:gap-[24px] xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
              onClick={() => handleServiceClick(service.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
