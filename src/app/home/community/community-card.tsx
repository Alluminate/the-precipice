import { ReactNode } from "react";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CommunityCardProps {
  title: string;
  icon: ReactNode;
  description: string;
  button: {
    label: string;
    link: string;
  }
}

export const CommunityCard: React.FC<CommunityCardProps> = ({ title, icon, description, button }) => {
  return (
    <Card data-aos="fade-up" className="bg-[#0C0B16] flex flex-col flex-[0_0_calc(33.33% - 32px)] m-4 border-0 w-full sm:w-80 shadow-primary">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="flex-1">{description}</CardContent>
      <CardFooter>
        <Link href={button.link} className={cn(buttonVariants({ variant: 'outline' }))}>{button.label}</Link>
      </CardFooter>
    </Card>
  );
}
