"use client";

import { useRouter } from "next/navigation";
import Button from "../../components/Button";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      image: "/services/ph_code-bold.png",
      title: "Web Development",
      description:
        "Crafting dynamic, user-centric websites with cutting-edge design and seamless functionality to elevate your brand.",
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
    if (title === "Web Development") router.push("/services/web-development");
    if (title === "Product Design") router.push("/services/uiux-design");
  };

  return (
    <section className="w-full bg-black text-white">
      {/* Services Header */}
      <div className="mx-auto flex w-full flex-col items-center gap-[24px] px-[16px] py-[100px] sm:px-[40px] md:py-[140px] lg:gap-[64px] lg:px-[70px]">
        <h1 className="text-center text-[24px] font-normal lg:text-size-2">
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

      {/* Talent Section */}
      <div className="flex w-full items-center justify-center px-[16px] py-[80px] sm:px-[40px] md:py-[100px] lg:px-[70px]">
        <div
          className="relative h-[182px] w-full max-w-screen-xl overflow-hidden rounded-[32px] bg-cover bg-no-repeat lg:h-[255px]"
          style={{
            backgroundImage: "url('/services/this_is_engineering.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[24px] px-[20px] sm:flex-row sm:justify-between sm:px-[40px] md:px-[60px]">
            {/* Text */}
            <p
              className="text-center text-size-6 font-normal text-white lg:text-size-2"
              style={{ fontFamily: "Roboto Serif" }}
            >
              We Are Looking for Exceptional Talent
            </p>
            {/* Button */}
            <Button onClick={() => router.push("/jobs")} variant="gradient">
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
