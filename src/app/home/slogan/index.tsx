import Link from "next/link";
import {
  LandingHeader,
  BigSubHeader,
  PageHeader,
  PageHeaderHeading,
  Paragraph,
} from "@/components/elements";

export default function Slogan() {
  return (
    <div className="my-2 text-center">
      {/* p-8 md:pt-8 md:pl-8 xl:pl-10 2xl:pl-12 md:w-2/5 2xl:w-6/12 md:flex md:flex-col md:justify-start md:items-start */}
      <div className="">
        <PageHeader className="uppercase">
          Offensive • Dangerous • Controversial • Needed
        </PageHeader>
      </div>
    </div>
  );
}
