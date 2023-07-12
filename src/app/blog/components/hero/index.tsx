import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/elements";
import { Icons } from "@/components/icons";

export function Hero() {
  return (
    <div className="container">
      <PageHeader className="h-fit md:h-fit items-start w-full md:w-[736px] lg:w-[928px] md:px-0">
        <p className="flex items-center gap-2 cursor-pointer"><Icons.arrowLeft size={'1em'} /> Go back</p>
        <div className="flex flex-col items-start gap-4 w-full">
          <PageHeaderHeading className="">
            Thorium | <span className="golden-italic">News</span>
          </PageHeaderHeading>
          <PageHeaderDescription>
            Composed by the team on these topics:
          </PageHeaderDescription>
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Team', 'Radiance', 'Nanoforge', 'Partners'].map(item => <button key={item} className='bg-primary hover:bg-primary/80 p-4 rounded'>{item}</button>)}
          </div>
        </div>
      </PageHeader>
    </div>
  )
}