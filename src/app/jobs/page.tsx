"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ContactBackground from "@/sections/Contact/ContactBackground";

// Local array of job objects (no Supabase)
const jobsData = [
  {
    id: "1",
    created_at: "2025-02-07 07:39:03.632396+00",
    title: "AI Engineer",
    description:
      "Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliase",
    location: "Remote",
    schedule: "Full Time",
    slug: "ai-engineer",
  },
  {
    id: "2",
    created_at: "2025-02-07 07:40:06.123973+00",
    title: "AI Engineer",
    description:
      "Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliase",
    location: "Remote",
    schedule: "Full Time",
    slug: "ai-engineer",
  },
  {
    id: "3",
    created_at: "2025-02-13 08:14:25.24128+00",
    title: "AI Engineer",
    description:
      "Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliase",
    location: "Remote",
    schedule: "Full Time",
    slug: "ai-engineer",
  },
  {
    id: "4",
    created_at: "2025-02-13 08:15:01.535663+00",
    title: "AI Engineer",
    description:
      "Lorem Ipsum thora Ista La Vista irtim gasiliase Ipsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliaseIpsum thora Ista La Vista irtim gasiliase",
    location: "Remote",
    schedule: "Full Time",
    slug: "ai-engineer",
  },
];

interface Job {
  id: string;
  title: string;
  description: string;
  location: string;
  schedule: string;
  slug: string;
  created_at: string;
}

export default function JobsPage() {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    // Simply set jobs from local array (no Supabase)
    setJobs(jobsData);
  }, []);

  const handleJobClick = (jobName: string) => {
    console.log(jobName);
    if (jobName === "AI Engineer") router.push("/jobs/ai-engineer");
  };

  return (
    <section className="bg-[#03030E]">
      {/* Hero Section */}
      <div
        className="relative h-[307px] bg-cover bg-center lg:h-[525px]"
        style={{
          background:
            "linear-gradient(0deg, rgba(9,17,33,0.32) 0%, rgba(9,17,33,0.32) 100%), url('/jobs/this_is_engineering.png') no-repeat center/cover",
        }}
      >
        <div className="absolute left-1/2 top-[50%] flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[17.612px]">
          <button className="flex h-[34px] items-center justify-center gap-[10px] rounded-[48px] bg-white px-[12px] py-[2px] text-size-7 font-normal text-[#06121B]">
            We are Hiring!
          </button>
          <h1 className="text-[26px] font-semibold leading-[28px] lg:text-[47px] lg:font-medium xl:text-size-2">
            Be a part of our Mission
          </h1>
          <p className="-mt-[10px] text-size-7 font-normal opacity-70 lg:text-size-4">
            Look at the open positions below
          </p>
        </div>
      </div>

      {/* Jobs section */}
      <div className="relative flex w-full flex-col items-start gap-[20px] px-[16px] pb-[120px] pt-[40px] lg:px-[70px] lg:pb-[250px] lg:pt-0">
        <div className="pointer-events-none absolute inset-0 left-0 top-0 z-50 hidden lg:flex">
          <ContactBackground />
        </div>

        {jobs.map((job) => (
          <div key={job.id} className="w-full">
            <div className="flex flex-col items-start gap-[32px] self-stretch rounded-[24px] p-[13px] lg:p-[38px]">
              <div className="flex flex-col items-start gap-[8px] self-stretch lg:gap-[4px]">
                <div className="flex items-center justify-between self-stretch">
                  <h1 className="text-size-3 font-semibold">{job.title}</h1>
                  <Button onClick={() => handleJobClick(job.title)}>
                    Apply
                  </Button>
                </div>
                <p className="text-size-7 font-normal leading-[20px] opacity-80 lg:text-size-6 xl:w-[780px] 2xl:w-[880px]">
                  {job.description}
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[4px]">
                  <Image
                    src="/jobs/location_on.png"
                    alt="Location"
                    width={20}
                    height={20}
                  />
                  <span className="text-size-7 font-normal lg:text-size-6">
                    {job.location}
                  </span>
                </div>

                <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[4px]">
                  <Image
                    src="/jobs/schedule.png"
                    alt="Schedule"
                    width={20}
                    height={20}
                  />
                  <span className="text-size-7 font-normal lg:text-size-6">
                    {job.schedule}
                  </span>
                </div>
              </div>
            </div>
            <div className="-mx-[16px] mt-[28px] h-[1px] w-[calc(100%+32px)] bg-white/50 lg:mx-0"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
