import { data } from "./data";
import { FeaturedCard } from "./featured-card";

export default function FeaturedArticles() {
  return (
    // <section className="container my-0 px-0 mx-0">
    // <section className="my-0 px-0 mx-0">
    // <div className="flex justify-start md:justify-center flex-wrap md:gap-8 my-0 px-0 mx-0">
    <div className="flex flex-wrap justify-start md:justify-center gap-0 px-0 mx-0">
      {data.map((item, index) => (
        <FeaturedCard
          key={item.title}
          {...item}
          isTopCard={index === 0}
          customWidth={index === 0 ? "md:w-10/12" : "md:w-5/12"}
        />
      ))}
    </div>
    // </section>
  );
}
