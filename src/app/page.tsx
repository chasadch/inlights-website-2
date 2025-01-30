import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Services from "@/components/Services/Services";
import Statistics from "@/components/Statistics/Statistics";
// import Statistics from "@/components/Statistics/Statistics";
import SuccessStories from "@/components/SuccessStories/SuccessStories";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Statistics />
      <Products />
      <Services />
      <SuccessStories />
      <Testimonials />
      <Contact />
    </div>
  );
}
