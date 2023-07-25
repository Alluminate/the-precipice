import Image from "next/image"
import { Paragraph } from "@/components/elements"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link";

export interface TeamCardProps {
  id: number;
  name: string;
  imageUrl: string;
  role: string;
  bio: string;
  socials: {
    email?: string;
    linkedin?: string;
    telegram?: string;
    twitter?: string;
    github?: string;
  }
}

export const TeamCard: React.FC<TeamCardProps> = ({ id, name, imageUrl, role, bio, socials }) => {
  return (
    <Card data-aos={id % 2 === 1 ? "flip-right" : "flip-left"} className="bg-black border border-primary flex-[0_0_calc(50% - 32px)] m-4 w-full md:w-96 shadow-none hover:shadow-primary hover:shadow-md transition-shadow">
      <CardContent className="space-y-4 flex-1 flex flex-col items-center pt-6">
        <Image
          className="rounded-full p-2 ring ring-primary"
          src={`/about/team/${imageUrl}.png`}
          width={120}
          height={120}
          alt={name}
        />
        <h3 className="font-bold text-xl">{name}</h3>
        <h4 className="text-base uppercase font-bold text-primary">{role}</h4>
        <div className="flex items-center gap-4">
          {socials.email && <Link href={`mailto:${socials.email}`} target="_blank" rel="noreferrer">
            <Image src={'/about/socials/email.svg'} width={24} height={24} priority alt={name} />
          </Link>}
          {socials.twitter && <Link href={socials.twitter} target="_blank" rel="noreferrer">
            <Image src={'/about/socials/twitter.svg'} width={24} height={24} priority alt={name} />
          </Link>}
          {socials.telegram && <Link href={socials.telegram} target="_blank" rel="noreferrer">
            <Image src={'/about/socials/telegram.svg'} width={24} height={24} priority alt={name} />
          </Link>}
          {socials.linkedin && <Link href={socials.linkedin} target="_blank" rel="noreferrer">
            <Image src={'/about/socials/linkedin.svg'} width={24} height={24} priority alt={name} />
          </Link>}
          {socials.github && <Link href={socials.github} target="_blank" rel="noreferrer">
            <Image src={'/about/socials/github.svg'} width={24} height={24} priority alt={name} />
          </Link>}
        </div>
        <Paragraph className="text-sm md:text-base">{bio}</Paragraph>
      </CardContent>
    </Card>
  )
}
