import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/elements";
import { Icons } from "@/components/icons";

export function Hero() {
  return (
    <div className="container content-start w-[960px]">
      <PageHeader className="h-fit md:h-fit items-start">
        <p className="flex items-center gap-2 cursor-pointer"><Icons.arrowLeft size={'1em'} /> Go back</p>
        <div className="flex flex-col items-start gap-4">
          <PageHeaderHeading className="">
            Thorium | <span className="golden-italic">News</span>
          </PageHeaderHeading>
          <PageHeaderDescription>
            Composed by the team on these topics:
          </PageHeaderDescription>
        </div>
      </PageHeader>
    </div>
  )
}