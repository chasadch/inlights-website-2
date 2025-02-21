"use client";

import CallToAction from "@/sections/CallToAction/CallToAction";
import Contact from "@/sections/Contact/Contact";
import Hero from "@/sections/Hero/Hero";
import Products from "@/sections/Products/Products";
import Services from "@/sections/Services/Services";
import Statistics from "@/sections/Statistics/Statistics";
import SuccessStories from "@/sections/SuccessStories/SuccessStories";
import Testimonials from "@/sections/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Statistics />
      <Products />
      <Services />
      <CallToAction
        mobilePaddingTop="182px"
        mobilePaddingBottom="167px"
        desktopPaddingTop="100px"
        desktopPaddingBottom="100px"
      />

      <SuccessStories />
      <Testimonials />
      <Contact
        mobilePaddingTop="220px"
        mobilePaddingBottom="133.27px"
        desktopPaddingTop="140px"
        desktopPaddingBottom="140px"
      />
    </>
  );
}
