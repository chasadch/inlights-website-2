"use client";

import Contact from "@/sections/Contact/Contact";
import Hero from "@/sections/Hero/Hero";
import Products from "@/sections/Products/Products";
import Services from "@/sections/Services/Services";
import Statistics from "@/sections/Statistics/Statistics";
import SuccessStories from "@/sections/SuccessStories/SuccessStories";
import Testimonials from "@/sections/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <div>
      {/* <Hero /> */}
      {/* <Statistics /> */}
      <Products />
      <Services />
      <SuccessStories />
      {/* <Testimonials /> */}
      {/* <Contact /> */}
    </div>
  );
}
