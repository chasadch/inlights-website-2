"use client";

import Button from "@/components/Button";
import CallToActionBackground from "@/sections/CallToAction/CallToActionBackground";
import Contact from "@/sections/Contact/Contact";
import Testimonials from "@/sections/Testimonials/Testimonials";
import Image from "next/image";

export default function GeoHealth() {
  const topicCustomization = [
    {
      title: "Accurate Data",
      description: "90%+ Accuracy in Pose Detection",
      image: "/geohealth/accurate-data.svg",
    },
    {
      title: "Versatile Workout Modes",
      description: "4+ Exercise Variations Covered",
      image: "/geohealth/versatile-workout-modes.svg",
    },
    {
      title: "Instant Performance Insights",
      description: "Real-Time Feedback in Under 1 Second",
      image: "/geohealth/instant-performance-insights.svg",
    },
  ];

  // Define your stacks data
  const stacks = [
    {
      title: "Frontend Architecture",
      items: [
        { src: "/geohealth/nextjs.svg", alt: "Nextjs", techName: "Next js" },
        { src: "/geohealth/html5.svg", alt: "HTML5", techName: "HTML5" },
        { src: "/geohealth/html5.svg", alt: "HTML5", techName: "HTML5" },
        { src: "/geohealth/html5.svg", alt: "HTML5", techName: "HTML5" },
      ],
    },
    {
      title: "Development Workflow",
      items: [
        { src: "/geohealth/vercel.svg", alt: "Vercel", techName: "Vercel" },
        {
          src: "/geohealth/ci-cd-pipeline.svg",
          alt: "CI/CD Pipeline",
          techName: "CI/CD Pipeline",
        },
        {
          src: "/geohealth/serverless-arch.svg",
          alt: "Serverless Arch",
          techName: "Serverless Arch",
        },
        {
          src: "/geohealth/ssl-tls-encrypt.svg",
          alt: "SSL/TLS Encrypt",
          techName: "SSL/TLS Encrypt",
        },
      ],
    },
  ];

  return (
    <div className="relative self-stretch">
      {/* Hero Section */}
      <div className="relative h-[810px] w-full overflow-hidden lg:h-screen">
        {/* Responsive background images */}
        <div className="absolute inset-0 bg-[url('/geohealth/geohealth_hero_sm.png')] bg-cover bg-center bg-no-repeat lg:bg-[url('/geohealth/geohealth_hero_lg.png')]" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(9,17,33,0.32),rgba(9,17,33,0.32))]" />
        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1440px] flex-col px-[16px] pt-[116px] lg:flex-row lg:px-[70px] lg:pb-[160px] lg:pt-[176px]">
          {/* Left Column */}
          <div className="flex flex-col items-start gap-[49.73px]">
            <div className="flex flex-col items-start gap-[17.612px] xl:w-[746px]">
              {/* Pill Badge */}
              <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
                <button className="text-size-7 font-normal text-[#414C5C] lg:text-size-6">
                  GeoHealth
                </button>
              </div>
              <h1 className="block text-[24px] font-bold leading-[32px] lg:hidden lg:w-[373px] lg:text-size-2 lg:leading-[94px] xl:w-[746px] xl:text-[65.58px]">
                Lorem Ipsum Nate decgade ibum
              </h1>
              <h1 className="hidden text-[24px] font-bold leading-[32px] lg:block lg:w-[373px] lg:text-size-2 lg:leading-[94px] xl:w-[746px] xl:text-[65.58px]">
                GeoHealth
              </h1>
              <p className="block text-size-7 font-normal opacity-70 lg:hidden lg:w-[438px] lg:text-size-4 xl:w-[638px]">
                A sophisticated automated content generation platform that
                revolutionizes how businesses create and manage their content.
              </p>
              <p className="hidden text-size-7 font-normal opacity-70 lg:block lg:w-[438px] lg:text-size-4 lg:leading-[24px] xl:w-[638px]">
                An AI-powered advanced exercise monitoring system that helps
                users maintain proper form during workouts through advanced
                computer vision and machine learning techniques.
              </p>
            </div>
            <Button variant="gradient">Let&apos;s Talk</Button>
          </div>
          {/* Image */}
          <div className="mx-auto w-[292.211px] flex-shrink-0 pt-[131.48px] lg:pt-0 xl:h-[380.48px] xl:w-[411px] 2xl:h-[480.48px] 2xl:w-[511px]">
            <div className="relative h-[199.559px] w-[292.211px] flex-shrink-0 rounded-[12.67px] bg-[#33A0F1] lg:h-[249px] lg:w-[411px] lg:rounded-[22px] 2xl:h-[349px] 2xl:w-[511px]">
              <div className="absolute bottom-0 left-1/2 h-[144.918px] w-[244.697px] flex-shrink-0 -translate-x-1/2 lg:h-[153px] lg:w-[318px] xl:h-[163px] xl:w-[328px] 2xl:h-[253px] 2xl:w-[428px]">
                <Image
                  src={"/geohealth/geohealth_image1.png"}
                  alt="Geohealth"
                  fill
                  className="object-cover"
                  style={{ borderRadius: "11.079px 11.079px 0px 0px" }}
                />
              </div>
              <div className="absolute right-[40px] top-[10px] h-[38.011px] w-[38.011px] flex-shrink-0 lg:right-[70px] lg:h-[56px] lg:w-[56px] 2xl:h-[66px] 2xl:w-[66px]">
                <Image
                  src={"/geohealth/star.png"}
                  alt="Star"
                  fill
                  className="object-cover"
                  style={{ borderRadius: "11.079px 11.079px 0px 0px" }}
                />
              </div>
              <div className="absolute -left-[20px] -top-[30px] h-[90px] w-[165px] flex-shrink-0">
                <div className="relative h-[51.631px] w-[94.322px] flex-shrink-0 rounded-[4.465px] bg-[#F1F371] lg:h-[70px] lg:w-[135px] lg:rounded-[8px] xl:h-[70px] xl:w-[135px] 2xl:h-[90px] 2xl:w-[165px]">
                  <div className="absolute left-1/2 top-1/2 h-[13.954px] w-[50.228px] flex-shrink-0 -translate-x-1/2 -translate-y-1/2 lg:h-[24px] lg:w-[78px] xl:h-[24px] xl:w-[78px] 2xl:h-[24px] 2xl:w-[88px]">
                    <Image
                      src={"/geohealth/geohealth.png"}
                      alt="Geohealth"
                      fill
                      className="bg-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Customization Engine */}
      <div className="min-h-[300vh] bg-[url('/geohealth/bg.png')] bg-cover bg-center bg-no-repeat">
        {topicCustomization.map(({ title, description, image }, index) => (
          <div
            key={index}
            className="flex h-screen items-center justify-center"
          >
            <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between pb-[95px] pt-[95px] lg:flex-row lg:items-center lg:justify-center lg:pb-0 lg:pl-[70px] lg:pr-[70px] lg:pt-0">
              <div className="flex w-[343px] flex-col items-start gap-[24px] lg:w-[709px]">
                <div className="flex flex-col items-start gap-[12px] self-stretch">
                  {/* Title on mobile */}
                  <h1 className="block text-[24px] font-normal leading-[32px] lg:hidden">
                    1
                  </h1>
                  <h1 className="block self-stretch text-[24px] font-medium leading-[32px] lg:hidden lg:text-[52px] lg:leading-[66px]">
                    Topic Customization Engine
                  </h1>

                  {/* Title on desktop */}
                  <h1
                    className={`hidden ${index === 2 ? "xl:w-[715px]" : "w-[599px]"} self-stretch text-[24px] font-medium leading-[32px] lg:block lg:text-[42px] lg:leading-[56px] xl:text-[52px] xl:leading-[66px]`}
                  >
                    {title}
                  </h1>
                </div>

                {/* Description on mobile */}
                <p className="flex self-stretch text-size-6 font-medium leading-[24px] opacity-80 lg:hidden">
                  Developed a robust system allowing users to define and
                  customize their content topics post-registration
                </p>

                {/* Description on desktop */}
                <p className="hidden self-stretch text-size-4 opacity-80 lg:block">
                  {description}
                </p>
              </div>

              {/* Mobile Image */}
              <div className="relative flex w-[375px] flex-shrink-0 items-center justify-center lg:hidden lg:h-[401px] lg:w-[382px] 2xl:h-[501px] 2xl:w-[632px]">
                <Image
                  src="/geohealth/geohealth_image2.png"
                  alt="Geohealth"
                  width={655}
                  height={489}
                  className="flex-shrink-0 rounded-[11.84px] p-[16px]"
                />
              </div>

              {/* Desktop Image */}
              <div className="relative hidden flex-shrink-0 items-center justify-center lg:flex lg:h-[401px] lg:w-[382px] 2xl:h-[501px] 2xl:w-[632px]">
                <Image
                  src={image}
                  alt="Geohealth"
                  fill
                  className="flex-shrink-0 rounded-[11.84px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stacks section */}
      <div className="relative lg:h-screen">
        {/* Background SVG */}
        <div className="absolute inset-0 left-0 top-0 z-10 hidden lg:block">
          <CallToActionBackground />
        </div>

        <div className="relative z-40 mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-[26px] pb-[117px] pt-[100px] lg:top-1/2 lg:-translate-y-1/2 lg:gap-[40px] lg:px-[70px] lg:pb-0 lg:pt-0">
          <h1 className="w-full text-center text-[24px] font-medium leading-[32px] lg:text-size-2 lg:font-normal">
            Stacks Used
          </h1>
          <div className="flex w-full flex-col items-center justify-center gap-[128px] rounded-[28px] lg:flex-row">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="flex shrink-0 flex-col items-center gap-[20px] lg:w-[199px] lg:shrink lg:gap-[32px] xl:w-[407px]"
              >
                <h1 className="text-size-4 font-semibold lg:text-size-5 xl:text-size-3">
                  {stack.title}
                </h1>
                <div className="flex flex-col items-start gap-[30px] lg:grid lg:grid-cols-2 lg:gap-[30px]">
                  {stack.items.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex h-[112px] w-[112px] flex-col items-center justify-center gap-[2px] rounded-[20px] bg-white"
                    >
                      <div className="relative h-[44px] w-[44px] flex-shrink-0 lg:h-[56px] lg:w-[56px]">
                        <Image
                          src={tech.src}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-size-7 font-normal text-black">
                        {tech.techName}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <Testimonials newBackground={true} />

      {/* Contact section */}
      <Contact
        mobilePaddingTop="187px"
        mobilePaddingBottom="132px"
        desktopPaddingTop="140px"
        desktopPaddingBottom="140px"
      />
    </div>
  );
}
