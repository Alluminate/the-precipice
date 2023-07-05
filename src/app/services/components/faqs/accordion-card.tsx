import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface AccordionCardProps {
  title: string;
  content: string;
}

export const AccordionCard: React.FC<AccordionCardProps> = ({ title, content }) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className="text-xl text-left font-normal hover:no-underline">{title}</AccordionTrigger>
      <AccordionContent>
        {content}
      </AccordionContent>
    </AccordionItem>
  )
}