import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="min-h-screen w-full bg-black px-4 py-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-light leading-tight md:text-5xl">
          Don&apos;t take our word, see what
          <br />
          customers say about us
        </h2>
        <div className="relative">
          <div className="border-borderCustom overflow-hidden rounded-3xl border bg-bg p-12 shadow-custom backdrop-blur-sm">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-8 text-lg text-gray-300">
                InLights Solutions has transformed our campus management. With
                real-time tracking and automated scheduling, our facilities are
                always in top condition, allowing us to focus on educating our
                students
              </p>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Profile"
                  className="mb-2 h-12 w-12 rounded-full object-cover"
                />
                <div className="font-medium">Cameron Williamson</div>
                <div className="text-sm text-gray-400">CEO</div>
              </div>
            </div>
          </div>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-[#1a2234] p-4 transition-colors hover:bg-[#1a2234]/80">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-[#1a2234] p-4 transition-colors hover:bg-[#1a2234]/80">
            <ArrowRight className="h-6 w-6" />
          </button>
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-1.5 w-8 rounded-full bg-white"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-white/30"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-white/30"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-white/30"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
