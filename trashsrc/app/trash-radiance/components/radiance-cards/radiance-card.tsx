import Image from "next/image"
import Link from "next/link"
import { Paragraph } from "@/components/elements"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface RadianceCardProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
}

export const RadianceCard: React.FC<RadianceCardProps> = ({ imageUrl, title, description, link }) => {
  return (
    <Card className="bg-black border border-primary shadow-none hover:shadow-primary hover:shadow-md transition-shadow">
       <CardContent className="space-y-4 flex-1 flex flex-col pt-6">
        <Image
          className="self-center"
          src={`/radiance/cards/${imageUrl}.svg`}
          width={120}
          height={120}
          alt={title}
        />
        <h4 className="text-base uppercase font-bold">{title}</h4>
        <Paragraph>{description}</Paragraph>
      </CardContent>
      <CardFooter className="flex w-full">
        <Link href={link} className={cn(buttonVariants(), 'block w-full text-center')}>Start Now</Link>
      </CardFooter>
    </Card>
  )
}
