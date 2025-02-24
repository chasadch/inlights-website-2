import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";

export default function Products() {
  const router = useRouter();
  const handleCardClick = (cardName: string) => {
    if (cardName === "Traffic Management")
      router.push("/products/traffic_management");

    if (cardName === "Premises Security")
      router.push("/products/premises_security");
  };

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-start self-stretch px-[16px] py-[90px] lg:gap-[10px] lg:px-[70px] lg:py-[130px]">
      <div className="flex flex-col items-center gap-[20px] self-stretch lg:gap-[64px]">
        <div className="flex flex-col items-start gap-[4px] lg:gap-[8px]">
          <h1 className="text-center text-size-3 font-semibold lg:text-size-2 lg:font-medium">
            Our Products
          </h1>
        </div>

        {/* Products grid (375 pixels) */}
        <div className="grid grid-cols-1 gap-[34px] md:grid-cols-2 lg:hidden lg:gap-[24px]">
          <ProductCard
            title="Traffic Management"
            subtitle="Manage City Traffic with AI"
            description="InLights revolutionizes your planning with advanced forecasting tools. Anticipate needs, schedule proactively, and optimize resources to keep operations running smoothly."
            imageSrc="/products/management_city_traffic_with_ai.png"
            onClick={handleCardClick}
          />

          <ProductCard
            title="Premises Security"
            subtitle="Manage who Enters your Premises"
            description="InLights revolutionizes gate security with a cutting-edge solution that fuses AI-driven vehicle identification, CNIC scanning, and real-time tracking for unmatched access control and theft prevention."
            imageSrc="/products/manage_who_enters_your_premises.png"
            onClick={handleCardClick}
          />
        </div>

        {/* Products grid (1024 pixels) */}
        <div className="hidden h-[610px] grid-cols-1 gap-[34px] md:grid-cols-2 lg:grid lg:gap-[24px]">
          <ProductCard
            title="Traffic Management"
            subtitle="Manage City Traffic with AI"
            description="InLights revolutionizes your planning with advanced forecasting tools. Anticipate needs, schedule proactively, and optimize resources to keep operations running smoothly."
            imageSrc="/products/management_city_traffic_with_ai.png"
            onClick={handleCardClick}
          />

          <ProductCard
            title="Premises Security"
            subtitle="Manage who Enters your Premises"
            description="InLights revolutionizes gate security with a cutting-edge solution that fuses AI-driven vehicle identification, CNIC scanning, and real-time tracking for unmatched access control and theft prevention."
            imageSrc="/products/manage_who_enters_your_premises.png"
            onClick={handleCardClick}
          />
        </div>
      </div>
    </section>
  );
}
