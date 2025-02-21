"use client";

import CallToAction from "@/sections/CallToAction/CallToAction";
import TeamCard from "@/sections/Team/TeamCard";

export default function TeamPage() {
  const teamMembers = [
    {
      image: "/team/team_1.png",
      name: "Esther Howards",
      role: "Founder & CEO",
    },
    {
      image: "/team/team_2.png",
      name: "Cameron Williamson",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.png",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_1.png",
      name: "Esther Howards",
      role: "Founder & CEO",
    },
    {
      image: "/team/team_2.png",
      name: "Cameron Williamson",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.png",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_1.png",
      name: "Esther Howards",
      role: "Founder & CEO",
    },
    {
      image: "/team/team_2.png",
      name: "Cameron Williamson",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.png",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.png",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.png",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.png",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
  ];

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-[21px] bg-black px-[16px] pt-[92px] text-white lg:gap-[44px] lg:px-[120px] lg:py-[136px]">
      {/* Our Team Header */}
      <div className="flex flex-col items-start lg:gap-[64px]">
        <h1 className="text-size-3 font-medium lg:text-size-2">Our team</h1>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-2 gap-[13px] lg:grid-cols-2 lg:gap-[74px] xl:grid-cols-3">
        {teamMembers.map((member, index) => (
          <TeamCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>

      {/* Talent Section */}
      <CallToAction
        mobilePaddingTop="156.45px"
        mobilePaddingBottom="126px"
        desktopPaddingTop="168.78px"
        desktopPaddingBottom="172px"
      />
    </section>
  );
}
