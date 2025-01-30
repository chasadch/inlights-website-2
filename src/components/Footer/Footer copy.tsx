import { ArrowUpRight, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D1D] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-6 md:col-span-6">
            <div className="space-y-4">
              <Image
                src="/footer/inlights.png"
                alt="INLIGHTS"
                width={156}
                height={18}
              />
              <div className="space-y-2 text-size-6 text-[#B5B5B5] opacity-70">
                <p>INLIGHTS</p>
                <p>HQ - The Garage, KACST, Riyadh, Saudi Arabia</p>
                <p>NSTP, NUST, H-12, Islamabad, Pakistan</p>
                <p>NASTP, Nur Khan Airbase, Rawalpindi, Pakistan</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-size-5 font-medium">Let&apos;s Talk</h3>
              <p className="text-size-6 text-[#B5B5B5] opacity-70">
                Enter your e-mail and our
                <br />
                representatives will reach out to you.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[250px] rounded-lg border border-white/50 bg-[#151628] px-4 py-2 text-sm"
                />
                <button className="rounded-lg bg-white p-2">
                  <ArrowUpRight className="h-5 w-5 text-black" />
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700"
              >
                <Youtube className="h-4 w-4 text-white" />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700"
              >
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-6 text-size-5 font-medium">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="text-[#B5B5B5] hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B5B5B5] hover:text-white">
                  Inlights Security
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B5B5B5] hover:text-white">
                  Inlights Traffic
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B5B5B5] hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-6 text-size-5 font-medium">Solutions</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="text-[#B5B5B5] hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B5B5B5] hover:text-white">
                  Product Design
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B5B5B5] hover:text-white">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#" className="text-[#B5B5B5] hover:text-white">
                  Computer Vision
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-size-6 font-normal text-white md:flex-row">
          <a href="mailto:admin@inlights.com.pk">admin@inlights.com.pk</a>
          <p>© 2025 Inlights. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
