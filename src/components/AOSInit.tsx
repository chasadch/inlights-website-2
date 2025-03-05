"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function AOSInit() {
  useEffect(() => {
    AOS.init({
      offset: 400,
      duration: 600, // animation duration in ms
      easing: "ease-in-sine", // easing function
      once: true,
    });
  }, []);

  return null; // This component doesn't render anything visible.
}
