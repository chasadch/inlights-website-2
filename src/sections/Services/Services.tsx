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
    <section className="bg-black text-white">
      {/* Services Header */}
      <div className="flex flex-col items-center gap-[64px] px-[70px] py-[140px]">
        <h1 className="text-center text-size-2 font-normal">Our Services</h1>

        {/* Service Cards - Responsive Grid */}
        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 lg:grid-cols-4">
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
      <div className="flex items-center justify-center py-[100px]">
        <div
          className="relative h-[255px] w-[1301px] overflow-hidden rounded-[32px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/services/this_is_engineering.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-between px-[60px]">
            {/* Text */}
            <p className="text-size-2 font-normal text-white">
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
