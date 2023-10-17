"use client";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/elements";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface ArchiveTagProps {
  tagId?: string;
  tags: { id: string; title: string }[];
  // handleSelectTag: (tag: string) => void
}

export function ArchiveTags({ tags, tagId }: ArchiveTagProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSelectTag = (tag: string) => {
    // <pathname>?sort=asc
    router.push(pathname + "?" + createQueryString("tag", tag));
  };

  return (
    <div className="flex mt-12">
      {/* <PageHeader className="h-fit md:h-fit items-start w-full md:w-[736px] lg:w-[948px] md:px-0"></PageHeader> */}
      <div className="h-fit md:h-fit items-start w-full md:w-[736px] lg:w-[948px] md:px-0 leading-relaxed mt-12">
        <div className="flex flex-col items-start gap-4 w-full">
          <PageHeader className="">Pieces by Topics</PageHeader>
        </div>
      </div>
    </div>
  );
}

// {/* <PageHeaderDescription>
//   Composed by the team on these topics:
// </PageHeaderDescription> */}

// <Link href="/" passHref>
//           <p className="flex items-center gap-2 cursor-pointer">
//             <Icons.arrowLeft size={"1em"} /> Go back
//           </p>
//         </Link>

// <div className="flex flex-wrap items-center gap-2">
//   <button
//     onClick={() => router.push("/blog")}
//     className="bg-primary hover:bg-primary/80 p-4 rounded"
//   >
//     All
//   </button>
//   {tags.map((tag) => (
//     <button
//       key={tag.id}
//       onClick={() => handleSelectTag(tag.id)}
//       className="bg-primary hover:bg-primary/80 p-4 rounded"
//     >
//       {tag.title}
//     </button>
//   ))}
// </div>
