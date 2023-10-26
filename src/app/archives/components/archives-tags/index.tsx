"use client";

import { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/elements";
import { Icons } from "@/components/icons";

interface ArchiveTagProps {
  tagId?: string;
  tags: { id: string; title: string }[];
}

export function ArchiveTags({ tags, tagId }: ArchiveTagProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSelectTag = (tag: string) => {
    router.push(pathname + "?" + createQueryString("tag", tag));
  };

  return (
    <div className="flex mt-12">
      <div className="h-fit md:h-fit items-start w-full md:w-[736px] lg:w-[948px] md:px-0 leading-relaxed mt-12">
        <div className="flex flex-col items-start gap-4 w-full">
          <PageHeader className="">Pieces by Topics</PageHeader>
          {tags.map((tag) => (
            <button
              key={tag.id}
              // onClick={() => handleSelectTag(tag.id)}
              className="bg-primary hover:bg-primary/80 p-4 rounded"
            >
              {tag.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

