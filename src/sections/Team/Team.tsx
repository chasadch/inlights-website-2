import React from "react";
import TeamCard from "./TeamCard";
import Button from "../../components/Button";

export default function Team() {
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
    <section className="flex flex-col gap-[44px] bg-black px-[120px] py-[136px] text-white">
      {/* Our Team Header */}
      <div className="flex flex-col items-start gap-[64px]">
        <h1 className="text-size-2 font-normal">Our Team</h1>
      </div>

      {/* Team Cards */}
      <div className="flex flex-wrap gap-[74px]">
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
      <div className="flex items-center justify-center pt-[240px]">
        <div
          className="relative h-[209px] w-full max-w-[1301px] overflow-hidden rounded-[32px] bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/portfolio/portfolio_call_to_action.png')",
          }}
        >
          {/* Overlay Content */}
          <div className="absolute inset-0 mx-auto flex flex-col items-center justify-center gap-[24px] text-center">
            {/* Text */}
            <p
              className="text-[45px] font-bold text-[#FBFBFB]"
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
