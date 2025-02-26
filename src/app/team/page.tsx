import CallToAction2 from "@/sections/CallToAction/CallToAction2";
import TeamCard from "../../sections/Team/TeamCard";

export const metadata = {
  title: "Inlights | Team",
  description: "Redefining Smart Cities using AI",
};

export default function TeamPage() {
  const teamMembers = [
    {
      image: "/team/team_1.jpg",
      name: "Esther Howards",
      role: "Founder & CEO",
    },
    {
      image: "/team/team_2.jpg",
      name: "Cameron Williamson",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.jpg",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_1.jpg",
      name: "Esther Howards",
      role: "Founder & CEO",
    },
    {
      image: "/team/team_2.jpg",
      name: "Cameron Williamson",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.jpg",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_1.jpg",
      name: "Esther Howards",
      role: "Founder & CEO",
    },
    {
      image: "/team/team_2.jpg",
      name: "Cameron Williamson",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.jpg",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.jpg",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.jpg",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
    {
      image: "/team/team_3.jpg",
      name: "Liam Cooper",
      role: "Marketing Head",
    },
  ];

  return (
    <div>
      <section className="mx-auto flex max-w-[1440px] flex-col gap-[21px] px-[16px] pt-[92px] text-white lg:gap-[44px] lg:px-[120px] lg:py-[136px]">
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
      </section>

      {/* Talent Section */}
      <CallToAction2
        mobilePaddingTop="156.45px"
        mobilePaddingBottom="126px"
        desktopPaddingTop="168.78px"
        desktopPaddingBottom="172px"
        isBackground={false}
      />
    </div>
  );
}
