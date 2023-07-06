import Image from "next/image"
import { Paragraph } from "@/components/elements"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export interface AboutCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({ imageUrl, title, description, }) => {
  return (
    <Card className="bg-black border border-primary shadow-none hover:shadow-primary hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
        <div className="space-y-4 max-w-2xl">
          {description.split('\n').map((item, index) => (<Paragraph key={index}>{item}</Paragraph>))}
        </div>
        <Image
          className="self-center"
          src={`/about/cards/${imageUrl}.svg`}
          width={200}
          height={200}
          alt={title}
        />
      </CardContent>
    </Card>
  )
}