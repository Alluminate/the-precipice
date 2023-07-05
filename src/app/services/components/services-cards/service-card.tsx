import Image from "next/image"
import Link from "next/link"
import { Paragraph } from "@/components/elements"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { cn } from "@/lib/utils"

export interface ServiceCardProps {
  imageUrl: string;
  title: string;
  description: {
    first: string;
    second: string;
  };
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ imageUrl, title, description, }) => {
  return (
    <Card className="bg-black border border-primary">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <div className="space-y-4 max-w-2xl">
          <Paragraph>{description.first}</Paragraph>
          <Paragraph>{description.second}</Paragraph>
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
        <Link href='/contact' className={cn(buttonVariants({ variant: 'outline' }), 'inline-flex items-center gap-1 border-primary font-bold w-fit')}>LET’S BUILD IT <Icons.arrowRight size={'1em'} strokeWidth={3} /></Link>
      </CardFooter>
    </Card>
  )
}