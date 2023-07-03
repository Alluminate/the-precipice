import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Paragraph } from "@/components/elements";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export interface WWSCardProps {
  imageUrl: string;
  title: string;
  body: string;
  learnMoreList: string[];
  button: {
    label: string;
    link: string;
  }
}

export const WWSCard: React.FC<WWSCardProps> = ({ imageUrl, title, body, learnMoreList, button }) => {
  return (
    <Card className="pt-3 border-0 flex flex-col items-center md:items-start ">
      <CardContent className="max-w-[300px] space-y-4 flex-1 flex flex-col">
        <Image
          className="self-center"
          src={`/home/where-we-shine/${imageUrl}.svg`}
          width={200}
          height={200}
          alt={title}
        />
        <h4 className="text-base md:text-lg capitalize font-bold text-center">{title}</h4>
        <Paragraph>{body}</Paragraph>
        <div>
          <h6>Learn More:</h6>
          <ul className="list-disc list-outside pl-5">
            {learnMoreList.map((item, index) => <li key={index} className="text-primary">{item}</li>)}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Link href={button.link} className={cn(buttonVariants({ variant: 'outline' }))}>{button.label} <Icons.arrowRight className="text-[1em]" /></Link>
      </CardFooter>
    </Card>
  );
}
