import { data } from "./sample-data";
import { RecentCard } from "./recent-card";
import { Button, ButtonVariants } from "@/components/ui/button";
import { Paragraph } from "@/components/elements";

const bgColorClasses = ["bg-color-0", "bg-color-1", "bg-color-2", "bg-color-3"];

export default function RecentArticles() {
  return (
    // <section className="container my-0 px-0 mx-0">
    // <section className="my-0 px-0 mx-0">
    // <div className="flex justify-start md:justify-center flex-wrap md:gap-8 my-0 px-0 mx-0">
    <div className="flex flex-col">
      <div className="text-center mb-5">
        <p className="text-xl lg:text-2xl xl:text-3xl uppercase font-firaSansCondensed font-extrabold md:text-md lg:leading-[1.1]">
          Recent Articles
        </p>
      </div>
      <div className="2xl:flex 2xl:mx-auto">
        <div className="hidden 2xl:block 2xl:w-1/12" />
        <div className="flex flex-wrap justify-start md:justify-center gap-0 px-0 mx-0 2xl:mx-12 2xl:w-10/12">
          {data.map((item, index) => (
            <RecentCard
              key={item.title}
              {...item}
              customBgClass={bgColorClasses[index % bgColorClasses.length]}
              // isTopCard={index === 0}
              // customWidth={index === 0 ? "md:w-10/12" : "md:w-5/12"}
            />
          ))}
        </div>
        <div className="hidden 2xl:block 2xl:w-1/12" />
      </div>
      <div className="text-center mt-8">
        <Paragraph className="mb-5">Showing 5 of 25</Paragraph>
        <Button className="uppercase py-2 px-10">See All Pieces</Button>
      </div>
    </div>
    // </section>
  );
}
