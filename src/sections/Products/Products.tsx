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
    <section className="flex w-full flex-col items-center gap-[10px] bg-black px-[70px] py-[130px]">
      {/* Wrap content in a container that is full-width on smaller screens and fixed on larger ones */}
      <div className="flex w-full max-w-[1299px] flex-col items-center gap-[64px]">
        <div className="flex w-full flex-col items-start gap-[8px]">
          <h1 className="text-center text-size-2 font-medium">Our Products</h1>
        </div>

        {/* On small screens, stack cards vertically; on large screens, use a row */}
        <div className="flex w-full flex-col items-center gap-[24px] lg:flex-row">
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
