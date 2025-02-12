import React from "react";
import Button from "../../components/Button";
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
  ];

  return (
    <section className="flex flex-col gap-[44px] bg-black px-[16px] py-[80px] text-white sm:px-[40px] lg:px-[120px] lg:py-[136px]">
      {/* Our Team Header */}
      <div className="flex flex-col items-start gap-[64px]">
        <h1 className="text-size-2 font-normal">Our Team</h1>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 gap-[74px] md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
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
      <div className="flex items-center justify-center pt-[80px] lg:pt-[240px]">
        <div
          className="relative h-[160px] w-full max-w-[1301px] overflow-hidden rounded-[32px] bg-cover bg-no-repeat sm:h-[209px]"
          style={{
            backgroundImage: "url('/portfolio/portfolio_call_to_action.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-[16px] text-center sm:gap-[24px]">
            {/* Text */}
            <p
              className="text-2xl font-bold text-[#FBFBFB] sm:text-[45px]"
              style={{ fontFamily: "Roboto Serif" }}
            >
              Enough talk, let&apos;s get to work
            </p>
            {/* Button */}
            <Button variant="gradient">Let&apos;s Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
