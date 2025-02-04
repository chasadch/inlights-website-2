// "use client";

// import Image from "next/image";
// import Heading from "../ui/Heading";
// import { Card, CardContent } from "../ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../ui/carousel";

export default function Testimonials() {
  // const testimonials = [
  //   {
  //     text: "InLights Solutions has transformed our campus management. With real-time tracking and automated scheduling, our facilities are always in top condition, allowing us to focus on educating our students.",
  //     name: "Cameron Williamson",
  //     role: "CEO",
  //     image: "/testimonials/ellipse.png",
  //   },
  //   {
  //     text: "Our productivity increased significantly after implementing InLights Solutions. The automation features are a game-changer for our workflow efficiency.",
  //     name: "Leslie Alexander",
  //     role: "CTO",
  //     image: "/testimonials/ellipse.png",
  //   },
  //   {
  //     text: "The best investment we made this year! InLights Solutions optimized our operations beyond expectations. Highly recommended!",
  //     name: "Michael Johnson",
  //     role: "Founder",
  //     image: "/testimonials/ellipse.png",
  //   },
  // ];

  return (
    <div>1</div>
    // <div className="bg-black px-[70px] py-[160px] text-white">
    //   <div className="flex flex-col items-center gap-[64px]">
    //     {/* Heading */}
    //     <div className="flex flex-col items-center gap-[8px]">
    //       <Heading text="Don't take our word, see what customers say about us" />
    //     </div>

    //     {/* Testimonial Carousel */}
    //     <Carousel className="w-full p-[48px]">
    //       <CarouselContent>
    //         {testimonials.map((testimonial, index) => (
    //           <CarouselItem key={index} className="w-f px-4">
    //             <Card className="shadow-custom flex w-full flex-col items-center justify-center gap-[32px] rounded-[32px] border border-borderCustom bg-bg p-[48px]">
    //               {/* Testimonial Text */}
    //               <CardContent className="text-center text-[20px] font-normal leading-relaxed text-white opacity-80">
    //                 <p className="line-clamp-3">{testimonial.text}</p>
    //               </CardContent>

    //               {/* User Info */}
    //               <div className="flex flex-col items-center justify-center gap-[16px]">
    //                 <Image
    //                   src={testimonial.image}
    //                   alt={testimonial.name}
    //                   width={42}
    //                   height={42}
    //                   className="rounded-full"
    //                 />
    //                 <div className="flex flex-col items-center gap-[4px]">
    //                   <div className="text-size-5 font-medium text-white">
    //                     {testimonial.name}
    //                   </div>
    //                   <div className="text-size-7 font-normal text-white opacity-70">
    //                     {testimonial.role}
    //                   </div>
    //                 </div>
    //               </div>
    //             </Card>
    //           </CarouselItem>
    //         ))}
    //       </CarouselContent>

    //       {/* Carousel Navigation */}
    //       <CarouselPrevious className="absolute left-[120px] top-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,255,255,0.12)] p-[10px] hover:opacity-80" />
    //       <CarouselNext className="absolute right-[120px] top-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,255,255,0.12)] p-[10px] hover:opacity-80" />
    //     </Carousel>
    //   </div>
    // </div>
  );
}
