import { ArrowRight, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0C1B] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="space-y-6 md:col-span-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">
                <span className="text-white">IN</span>
                <span className="text-blue-500">LIGHTS</span>
              </h2>
              <div className="space-y-2 text-sm text-gray-400">
                <p>INLIGHTS</p>
                <p>HQ - The Garage, KACST, Riyadh, Saudi Arabia</p>
                <p>NSTP, NUST, H-12, Islamabad, Pakistan</p>
                <p>NASTP, Nur Khan Airbase, Rawalpindi, Pakistan</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Let&apos;s Talk</h3>
              <p className="text-sm text-gray-400">
                Enter your e-mail and our
                <br />
                representatives will reach out to you.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-grow rounded-lg bg-[#151628] px-4 py-2 text-sm"
                />
                <button className="rounded-lg bg-blue-500 p-2">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700"
              >
                <Youtube className="h-5 w-5 text-gray-400" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-700"
              >
                <Linkedin className="h-5 w-5 text-gray-400" />
              </a>
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Inlights Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Inlights Traffic
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-6 text-lg font-semibold">Solutions</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Product Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Computer Vision
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between border-t border-gray-800 pt-8 text-sm text-gray-400 md:flex-row">
          <a href="mailto:admin@inlights.com.pk">admin@inlights.com.pk</a>
          <p>© 2024 Inlights. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
