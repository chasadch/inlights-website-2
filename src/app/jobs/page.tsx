"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import supabase from "@/lib/supabase";
import toast from "react-hot-toast";
import ContactBackground from "@/sections/Contact/ContactBackground";

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
    const fetchJobs = async () => {
      const { data, error } = await supabase.from("jobs").select("*");
      if (error) {
        toast.error(`Error fetching jobs: ${error.message}`);
      } else {
        setJobs(data as Job[]);
        // toast.success("Jobs fetched successfully!");
      }
    };

    fetchJobs();
  }, []);

  const handleJobClick = (jobName: string) => {
    console.log(jobName);
    if (jobName === "AI Engineer") router.push("/jobs/ai-engineer");
  };

  return (
    <section className="bg-[#03030E]">
      {/* Hero Section */}
      <div
        className="relative h-[525px] bg-cover bg-center"
        style={{
          background:
            "linear-gradient(0deg, rgba(9,17,33,0.32) 0%, rgba(9,17,33,0.32) 100%), url('/jobs/this_is_engineering.png') no-repeat center/cover",
        }}
      >
        <div className="absolute left-1/2 top-[50%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[18px]">
          <button className="flex items-center justify-center gap-[0.625rem] rounded-[40px] bg-white px-[12px] py-[2px] text-size-7 font-normal text-[#06121B]">
            We are Hiring!
          </button>
          <h1 className="text-[47px] font-medium xl:text-size-2">
            Be a part of our Mission
          </h1>
          <p className="text-size-4 font-normal opacity-70">
            Look at the open positions below
          </p>
        </div>
      </div>

      {/* Jobs section */}
      <div className="relative flex w-full flex-col items-start gap-[20px] px-[70px] pb-[250px]">
        <div className="pointer-events-none absolute inset-0 left-0 top-0 z-50">
          <ContactBackground />
        </div>

        {jobs.map((job) => (
          <div key={job.id} className="w-full">
            <div className="flex flex-col items-start gap-[32px] self-stretch rounded-[24px] p-[38px]">
              <div className="flex flex-col items-start gap-[4px] self-stretch">
                <div className="flex items-center justify-between self-stretch">
                  <h1 className="text-size-3 font-semibold">{job.title}</h1>
                  <Button onClick={() => handleJobClick(job.title)}>
                    Apply
                  </Button>
                </div>
                <p className="w-[580px] text-size-6 font-normal opacity-80 xl:w-[780px] 2xl:w-[880px]">
                  {job.description}
                </p>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
                  <Image
                    src="/jobs/location_on.png"
                    alt="Location"
                    width={20}
                    height={20}
                  />
                  <span className="text-size-6 font-normal">
                    {job.location}
                  </span>
                </div>

                <div className="flex items-start gap-[8px] rounded-[25px] border-[1px] border-white/50 px-[12px] py-[6px]">
                  <Image
                    src="/jobs/schedule.png"
                    alt="Schedule"
                    width={20}
                    height={20}
                  />
                  <span className="text-size-6 font-normal">
                    {job.schedule}
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-white/50"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
