"use client";

import { useLoading } from "@/LoadingContext";
import Contact from "@/sections/Contact/Contact";
import Hero from "@/sections/Hero/Hero";
import Products from "@/sections/Products/Products";
import Services from "@/sections/Services/Services";
import Statistics from "@/sections/Statistics/Statistics";
import SuccessStories from "@/sections/SuccessStories/SuccessStories";
import Testimonials from "@/sections/Testimonials/Testimonials";

export default function HomePage() {
  const { isLoading } = useLoading();

  return (
    <div>
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          {/* Use fixed positioning */}
          <span className="loader"></span>
        </div>
      )}
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
