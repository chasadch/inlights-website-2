import Contact from "@/sections/Contact/Contact";

export const metadata = {
  title: "Inlights | Contact",
  description: "Redefining Smart Cities using AI",
};

export default function ContactPage() {
  return (
    <div className="relative z-[10]">
      <Contact
        mobilePaddingTop="92px"
        mobilePaddingBottom="139px"
        desktopPaddingTop="140px"
        desktopPaddingBottom="140px"
      />
    </div>
  );
}
