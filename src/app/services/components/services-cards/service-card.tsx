import Image from "next/image"
import Link from "next/link"
import { Paragraph } from "@/components/elements"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ButtonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

export interface ServiceCardProps {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ id, imageUrl, title, description }) => {
  return (
    <Card data-aos={`fade-up-${id % 2 === 0 ? "right" : "left"}`} className="bg-black border border-primary shadow-none hover:shadow-primary hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <div className="space-y-4 max-w-2xl">
          {description.split('\n').map((item, index) => (<Paragraph key={index}>{item}</Paragraph>))}
        </div>
        <Image
          className="self-center"
          src={`/services/cards/${imageUrl}.svg`}
          width={200}
          height={200}
          alt={title}
        />
      </CardContent>
      <CardFooter className="flex w-full">
        <Link href='/contact' className={cn(ButtonVariants({ variant: 'outline' }), 'inline-flex items-center gap-1 border-primary font-bold w-fit')}>LET’S BUILD IT <Icons.arrowRight size={'1em'} strokeWidth={3} /></Link>
      </CardFooter>
    </Card>
  )
}