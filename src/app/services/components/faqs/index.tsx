import { SubHeader } from "@/components/elements";
import { Accordion } from "@/components/ui/accordion"
import { AccordionCard } from "./accordion-card";
import { data } from "./data";

export function FAQS() {
  return (
    <section className="container space-y-6">
      <div className="space-y-2">
        <SubHeader className="max-w-xl">
          Have questions? Here’s how we work
        </SubHeader>
        <h3 className="text-xl">Answers to the top questions we get in our FAQs.</h3>
      </div>
      <div className="max-w-4xl">
        <Accordion type="single" collapsible className="w-full">
          {data.map(item => <AccordionCard key={item.title} {...item} />)}
        </Accordion>
      </div>
    </section>
  )
}