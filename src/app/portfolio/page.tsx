import Image from "next/image";
import Button from "../../components/Button";

export default function PortfolioPage() {
  const projects = [
    {
      title: "YouTube Video Analyst Bot",
      description:
        "An AI-powered tool that transforms YouTube video content into insights by automatically extracting, summarizing, and generating multi-format scripts with advanced natural language processing technologies.",
      image: "/portfolio/youtube_video_analyst_bot.png",
      type: "AI",
    },
    {
      title: "Smart Gate Security System",
      description:
        "Advanced security system that integrates vehicle identification, personnel verification, and time tracking to create a comprehensive gate security solution.",
      image: "/portfolio/smart_gate_security_system.png",
      type: "AI",
    },
    {
      title: "RetroFam",
      description:
        "A high-performance e-commerce platform for vintage and retro-inspired products, featuring advanced frontend, seamless integrations, and robust backend systems.",
      image: "/portfolio/retrofarm.png",
      type: "Video",
    },
    {
      title: "Apocryphal Writings",
      description:
        "A comprehensive MERN stack platform revolutionizing Bible study with immersive tools, personalized annotations, and robust content management.",
      image: "/portfolio/apocryphal_writings.png",
      type: "AI",
    },
    {
      title: "GeoHealth",
      description:
        "An AI-powered exercise monitoring platform using YOLOv8 for real-time pose detection, form correction, and personalized fitness analytics, deployed on Vercel.",
      image: "/portfolio/geohealth.png",
      type: "AI",
    },
    {
      title: "BrandSocial.ai",
      description:
        "An AI-powered social media management platform integrating intelligent automation, content generation, and analytics for streamlined campaign management.",
      image: "/portfolio/brandsocialai.png",
      type: "AI",
    },
    {
      title: "Zian.ai",
      description:
        "An advanced content generation platform leveraging AI, React, and TypeScript to automate high-quality article creation with seamless multi-platform integration.",
      image: "/portfolio/zianai.png",
      type: "AI",
    },
    {
      title: "SmartTraffic",
      description:
        "An AI-powered system using YOLOv8 and machine learning to optimize traffic signal timings in real-time, reducing congestion and enhancing urban mobility.",
      image: "/portfolio/smarttraffic.png",
      type: "AI",
    },
  ];

  return (
    <section className="flex flex-col gap-[44px] bg-black px-[70px] py-[140px] text-white">
      {/* Services Header */}
      <div className="flex flex-col items-start gap-[64px]">
        <h1 className="text-size-2 font-normal">Our Portfolio</h1>
      </div>

      {/* Projects Grid Container: 2 cards per row */}
      <div className="grid grid-cols-2 gap-[32px] self-stretch">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-grow items-start gap-[24px] rounded-[32px] border-borderCustom bg-bg p-[20px] shadow-shadowCustom"
          >
            {/* Image Container */}
            <div
              className="flex w-[285px] flex-grow flex-col items-start gap-[10px] rounded-[18px]"
              style={{ boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)" }}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={285}
                height={200}
                className="rounded-[20px]"
              />
            </div>

            {/* Content Container */}
            <div className="flex h-[189px] min-w-0 flex-grow flex-col items-start justify-between">
              <div className="flex flex-col items-start gap-[14px] self-stretch">
                <div className="flex items-center justify-between gap-[10px] self-stretch">
                  <h1 className="w-[261px] text-size-3 font-semibold">
                    {project.title}
                  </h1>
                  <div className="flex h-[24px] w-[24px] items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-[24px] w-[24px] flex-shrink-0"
                    >
                      <path
                        d="M17 7L7 17"
                        stroke="white"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8 7H17V16"
                        stroke="white"
                        stroke-width="1.125"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <p className="w-[285px] self-stretch text-size-6 font-normal opacity-70">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center justify-between self-stretch">
                <div className="flex items-center justify-end gap-[20px]">
                  <Image
                    src="/portfolio/nodejs.png"
                    alt="Nodejs"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/portfolio/mongodb.png"
                    alt="Nodejs"
                    width={32}
                    height={32}
                  />
                  <Image
                    src="/portfolio/react.png"
                    alt="Nodejs"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="w-[29px] text-size-6 font-normal opacity-90">
                  {project.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Talent Section */}
      <div className="flex items-center justify-center pt-[240px]">
        <div
          className="relative h-[209px] w-full max-w-[1301px] overflow-hidden rounded-[32px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/portfolio/portfolio_call_to_action.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-[24px] text-center">
            {/* Text */}
            <p
              className="text-[45px] font-bold text-[#FBFBFB]"
              style={{ fontFamily: "Roboto Serif" }}
            >
              Enough talk, let&apos;s get to work
            </p>
            {/* Button */}
            <Button variant="gradient">Let&apos;s Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
