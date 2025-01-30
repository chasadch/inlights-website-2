import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function SuccessStories() {
  return (
    <div className="min-h-screen w-full bg-black px-4 py-20 text-white">
      <div className="container mx-auto">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-5xl font-light">Our Success Stories</h2>
          <div className="flex gap-4">
            <button className="rounded-full border border-white/20 p-4 hover:bg-white/10">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button className="rounded-full border border-white/20 p-4 hover:bg-white/10">
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="border-borderCustom overflow-hidden rounded-3xl border bg-bg shadow-custom">
            <div className="relative h-48">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0f1729]" />
              <Image
                src="https://images.unsplash.com/photo-1576678927484-cc907957088c"
                alt="GeoHealth"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 z-20">
                <span className="text-sm">GeoHealth</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold">
                AI-Powered Physical Exercise Coach
              </h3>
              <p className="mb-4 text-sm text-gray-400">
                AI-powered exercise monitoring system for real-time pose
                detection, angle measurements, and form correction feedback for
                various exercises.
              </p>
              <button className="flex items-center text-sm hover:text-blue-300">
                Discover Insights <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="border-borderCustom overflow-hidden rounded-3xl border bg-bg shadow-custom">
            <div className="relative h-48">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0f1729]" />
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Manufacturing"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 z-20">
                <span className="text-sm">Manufacturing</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Project 2</h3>
              <p className="mb-4 text-sm text-gray-400">
                Manufacturers are achieving remarkable gains in productivity and
                efficiency with Emerald&apos;s innovative solutions. Our
                preventive maintenance system has notably...
              </p>
              <button className="flex items-center text-sm hover:text-blue-300">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="border-borderCustom overflow-hidden rounded-3xl border bg-bg shadow-custom">
            <div className="relative h-48">
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#0f1729]" />
              <Image
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907"
                alt="Health Care"
                width={400}
                height={300}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-4 top-4 z-20">
                <span className="text-sm">Health Care</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold">Project 3</h3>
              <p className="mb-4 text-sm text-gray-400">
                Healthcare providers are witnessing notable enhancements in
                service quality and operational efficiency with Emerald&apos;s
                cutting-edge platform. Our ass...
              </p>
              <button className="flex items-center text-sm hover:text-blue-300">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
