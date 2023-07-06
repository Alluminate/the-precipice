import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/elements";
import { ContactForm } from "./contact-form";


export function Hero() {
  return (
    <div className="container">
      <PageHeader className="md:h-fit">
        <div className="flex flex-col mx-auto gap-4">
          <PageHeaderHeading className="">
            Let’s partner.
          </PageHeaderHeading>
          <PageHeaderDescription>
            Fill in the short form below or skip to the bottom to arrange a chat with us. We’ll be back in touch as soon as we can to arrange an informal call.
          </PageHeaderDescription>
        </div>
        <ContactForm />
      </PageHeader>
    </div>
  )
}