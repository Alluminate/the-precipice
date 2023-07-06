import { SubHeader } from "@/components/elements";
import { TeamCard } from "./team-card";
import { data } from "./data";

export function CoreTeam() {
  return (
    <section className="container space-y-6">
      <SubHeader className="max-w-xl">
        The Thorium Core Team
      </SubHeader>
      <div className="flex flex-wrap justify-center">
        {data.map(item => <TeamCard key={item.name} {...item} />)}
      </div>
    </section>
  )
}