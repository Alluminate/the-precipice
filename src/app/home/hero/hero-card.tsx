import { ReactElement } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from '@/components/ui/card'


export interface HeroCardProps {
  imageUrl: string;
  description: ReactElement;
}

export const HeroCard: React.FC<HeroCardProps> = ({ imageUrl, description }) => {
  return (
    <Card className="pt-3 border-8 border-secondary-foreground w-[260px] h-[270px] md:w-[450px] md:h-[450px] rounded-2xl">
      <CardContent className="grid place-items-center h-3/4">
        <Image
          className="relative"
          src={`/home/hero/${imageUrl}.svg`}
          alt="Radiance"
          width={180}
          height={180}
          priority
        />
      </CardContent>
      <CardFooter>
          {description}
      </CardFooter>
    </Card>
  )
}
