import Button from "@/components/Button";
import CallToAction from "@/sections/CallToAction/CallToAction";
import Contact from "@/sections/Contact/Contact";
import Image from "next/image";

export const metadata = {
  title: "Inlights | Products | Premise Security",
  description: "Redefining Smart Cities using AI",
};

const topicCustomization = [
  {
    title: "AI-Driven Security: Smarter, Safer Gates!",
    description:
      "Our cutting-edge Automated Number Plate Recognition (ANPR) system enhances security and access control with real-time vehicle and personnel verification. <br/> <br/> Powered by advanced computer vision and AI, our system prevents unauthorized access, tracks entry and exit times, and ensures seamless security at gates.",
    image: "/products/premisesSecurity/image_1.svg",
  },
  {
    title: "Key Features",
    description:
      "Real-Time ANPR: Detects and recognizes vehicle number plates with YOLOv8 AI technology. <br/> <br/> ID Verification: Scans and verifies national ID cards for authorized personnel access. <br/> <br/> Smart Alerts: Instantly notifies security teams of unregistered vehicles, unauthorized personnel, or driver mismatches. <br/> <br/> Automated Logging: Records all movements for enhanced tracking and reporting",
    image: "/products/premisesSecurity/image_2.svg",
  },
  {
    title: "Impact & Applications",
    description:
      "Enhanced Security - Reduces unauthorized access and theft risks.<br/> Faster Processing - Eliminates manual security checks with automated verification.<br/> Comprehensive Tracking - Maintains a digital trail of vehicle and personnel movements.<br/> Scalable Solution - Ideal for corporate campuses, residential complexes, industrial sites, and government institutions.",
    image: "/products/premisesSecurity/image_3.svg",
  },
];

export default function PremiseSecurity() {
  return (
    <div className="relative self-stretch">
      {/* Hero Section */}
      <div
        className="relative flex h-[500px] flex-col pt-[116px] lg:h-[961px] lg:pt-[161.09px]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(9, 17, 33, 0.32) 0%, rgba(9, 17, 33, 0.32) 100%), url(/info/manage_city_traffic.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content container 375 pixels with higher z-index */}
        <div className="flex flex-col items-center gap-[48px] lg:hidden">
          <div className="flex flex-col items-center gap-[16px] self-stretch">
            <div className="flex flex-col items-center gap-[8.82px] self-stretch">
              <h1 className="text-center text-[28px] font-medium leading-[36.378px]">
                Manage Premise Security with
              </h1>
              <Image
                src="/premisesSecurity/artificial_intelligence.png"
                width={258.951}
                height={26.862}
                alt="Traffic Management"
              />
            </div>
          </div>

          <Button href="/contact" variant="gradient">
            Let&apos;s Talk
          </Button>
        </div>

        <div className="relative mx-auto mt-auto h-[179.816px] w-[363.754px] flex-shrink-0 lg:hidden">
          <Image
            src="/products/manage_who_enters_your_premises.png"
            alt="hero"
            width={364} // matching the container's width (rounded)
            height={180} // matching the container's height (rounded)
            className="absolute bottom-0 left-1/2 z-0 -translate-x-1/2"
          />
        </div>

        {/* Content container with higher z-index */}
        <div className="z-10 hidden flex-col items-center gap-[50px] lg:flex">
          <div className="flex w-[949px] flex-col items-center gap-[18px]">
            <div className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px]">
              <button className="font-manrope text-size-6 font-normal text-[#414C5C]">
                Premise Security
              </button>
            </div>
            <h1 className="text-[67px] font-medium">
              Manage Premise Security with
            </h1>
            <Image
              src="/premisesSecurity/artificial_intelligence.png"
              width={801.667}
              height={83.16}
              alt="Premise Security"
            />
          </div>
          <Button href="/contact" variant="gradient">
            Let&apos;s Talk
          </Button>
        </div>

        {/* Image 1024 pixels and above */}
        <div className="relative mx-auto hidden h-[495px] w-[1003px] flex-shrink-0 lg:block">
          <Image
            src="/info/manage_city_traffic_2.png"
            alt="hero"
            quality={100}
            priority
            fill
            className="mt-2.5 object-contain"
          />
        </div>
      </div>

      {/* Topic Customization Engine */}
      <div>
        {topicCustomization.map((item, index) => (
          <div
            key={index}
            className="bg-[url('/geohealth/bg.png')] bg-cover bg-center bg-no-repeat"
          >
            <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between py-[120px] lg:px-[70px]">
              <div
                className={`flex w-full flex-col items-center gap-[48px] lg:flex-row lg:items-center lg:justify-between ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex w-[343px] flex-col items-start gap-[24px] lg:w-[499px] 2xl:w-[599px]">
                  <div className="flex flex-col items-start gap-[12px] self-stretch">
                    <h1 className="block text-[24px] font-normal leading-[32px] lg:hidden">
                      {index + 1}
                    </h1>
                    <h1 className="block self-stretch text-[24px] font-medium leading-[32px] lg:hidden lg:text-[52px] lg:leading-[66px]">
                      {item.title}
                    </h1>
                    <h1 className="hidden self-stretch text-[24px] font-medium leading-[32px] lg:block lg:text-[52px] lg:leading-[66px]">
                      {item.title}
                    </h1>
                  </div>
                  <p className="flex self-stretch text-size-6 font-medium leading-[24px] opacity-80 lg:hidden">
                    {item.description}
                  </p>
                  <p
                    className="hidden w-[343px] space-y-3 self-stretch text-size-4 opacity-80 lg:block lg:w-[499px] 2xl:w-[599px]"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>

                <div className="relative flex w-[375px] flex-shrink-0 items-center justify-center lg:hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={655}
                    height={489}
                    className="flex-shrink-0 rounded-[11.84px] p-[12px]"
                  />
                </div>
                <div className="relative hidden flex-shrink-0 items-center justify-center lg:flex lg:h-[401px] lg:w-[382px] 2xl:h-[489px] 2xl:w-[655px]">
                  <div className="relative h-[489px] w-[655px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={100}
                      priority
                      className="flex-shrink-0 rounded-[11.84px] object-cover p-[12px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="block lg:hidden">
        {/* Talent Section */}
        <CallToAction
          mobilePaddingTop="140px"
          mobilePaddingBottom="140px"
          desktopPaddingTop="100px"
          desktopPaddingBottom="100px"
        />
      </div>

      {/* Contact section */}
      <Contact
        mobilePaddingTop="0px"
        mobilePaddingBottom="241.27px"
        desktopPaddingTop="140px"
        desktopPaddingBottom="140px"
      />
    </div>
  );
}
