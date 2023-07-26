import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface AccordionCardProps {
  title: string;
  content: string;
}

export const AccordionCard: React.FC<AccordionCardProps> = ({ title, content }) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className="text-xl text-left font-normal hover:no-underline">{title}</AccordionTrigger>
      <AccordionContent className="max-w-[52rem] leading-6">
        {content.split('\n').map((item, index) => (<p key={index}>{item}</p>))}
      </AccordionContent>
    </AccordionItem>
  )
}