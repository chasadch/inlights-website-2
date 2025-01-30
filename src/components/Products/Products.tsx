import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
export default function Products() {
  return (
    <div className="min-h-screen w-full bg-black px-4 py-20 text-white">
      <div className="container mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-light md:text-5xl">
          Our Products
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col rounded-3xl border border-blue-500/20 bg-[#0f1729] p-8 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <div className="inline">
              <span className="rounded-full bg-white px-4 py-1 text-sm text-[#414C5C]">
                Traffic Management
              </span>
            </div>
            <h3 className="mb-4 mt-6 text-2xl font-light md:text-3xl">
              Manage City Traffic with AI
            </h3>
            <p className="mb-6 text-gray-400">
              InLights revolutionizes your planning with advanced forecasting
              tools. Anticipate needs, schedule proactively, and optimize
              resources to keep operations running smoothly.
            </p>
            <button className="flex w-fit items-center gap-2 transition-colors hover:text-blue-300">
              Discover Insights <ArrowUpRight className="h-4 w-4" />
            </button>
            <div className="mt-auto overflow-hidden rounded-xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                alt="Traffic Management Dashboard"
                width={460}
                height={307}
                className="h-[307px] w-full"
              />
            </div>
          </div>
          <div className="flex flex-col rounded-3xl border border-blue-500/20 bg-[#0f1729] p-8 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <div className="inline-block">
              <span className="rounded-full bg-white px-4 py-1 text-sm text-[#414C5C]">
                Premise Security
              </span>
            </div>
            <h3 className="mb-4 mt-6 text-2xl font-light md:text-3xl">
              Manage who Enters your Premises
            </h3>
            <p className="mb-6 text-gray-400">
              InLights revolutionizes gate security with a cutting-edge solution
              that fuses AI-driven vehicle identification, CNIC scanning, and
              real-time tracking for unmatched access control and theft
              prevention.
            </p>
            <button className="mb-8 flex w-fit items-center gap-2 transition-colors hover:text-blue-300">
              Discover Insights <ArrowUpRight className="h-4 w-4" />
            </button>
            <div className="mt-auto overflow-hidden rounded-xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
                alt="Premise Security Dashboard"
                width={460}
                height={307}
                className="h-[307px] w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
