import { HeroCardProps } from "./hero-card-old";

export const data: HeroCardProps[] = [
  {
    imageUrl: "hero-radiance",
    description: (
      <p className="text-center text-xs md:text-lg">
        <span className="golden-italic">Radiance</span> is a Web3 Convergence
        academy, focused on pro-level education.
      </p>
    ),
  },
  {
    imageUrl: "hero-nanoforge",
    description: (
      <p className="text-center text-xs md:text-lg">
        <span className="golden-italic">Nanoforge</span> is our product services
        team, focused on enhanced Web3 product and tech.
      </p>
    ),
  },
];
