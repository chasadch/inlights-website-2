import CallToAction2 from "@/sections/CallToAction/CallToAction2";
import TeamCard from "../../sections/Team/TeamCard";

export const metadata = {
  title: "Inlights | Team",
  description: "Redefining Smart Cities using AI",
};

export default function TeamPage() {
  const teamMembers = [
    {
      image: "/team/team_10.png",
      name: "Muhammad Ahmed",
      role: "Founder & CEO",
    },
    {
      image: "/team/team_11s.png",
      name: "Kashaf Akhtar",
      role: "Marketing Director",
    },
    {
      image: "/team/team_7.png",
      name: "Muhammad Kawish",
      role: "Project Manager",
    },
    {
      image: "/team/team_1.png",
      name: "Ameer Hamza",
      role: "AM Operations",
    },
    {
      image: "/team/team_4.png",
      name: "Muhammad Waqas",
      role: "Project Coordinator",
    },
    {
      image: "/team/team_8.png",
      name: "Ali Hussnain",
      role: "Web Team Lead",
    },
    {
      image: "/team/team_6.png",
      name: "Musa Aamir",
      role: "Business Development Executive (Finance)",
    },
    {
      image: "/team/team_5.png",
      name: "Adeena Tariq",
      role: "HR",
    },
    {
      image: "/team/team_2.png",
      name: "Muhammad Adrees",
      role: "AI Engineer",
    },
    {
      image: "/team/team_3.png",
      name: "Muhammad Usman",
      role: "Full Stack Developer",
    },
    {
      image: "/team/team_9.png",
      name: "Hasham Sohail",
      role: "Junior AI Developer",
    },
  ];

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col gap-[21px] px-[16px] pt-[92px] text-white lg:gap-[44px] lg:px-[120px] lg:pt-[136px]">
      {/* Our Team Header */}
      <div className="flex flex-col items-start lg:gap-[64px]">
        <h1 className="text-size-3 font-medium lg:text-size-2">Our team</h1>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-2 gap-[13px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 lg:gap-[74px] xl:grid-cols-3">
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
      <CallToAction2
        mobilePaddingTop="156.45px"
        mobilePaddingBottom="126px"
        desktopPaddingTop="168.78px"
        desktopPaddingBottom="172px"
        isBackground={false}
      />
    </section>
  );
}
