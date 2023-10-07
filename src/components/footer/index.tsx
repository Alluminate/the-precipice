import Link from "next/link";
import { ColoredSeparator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { PageHeader, Paragraph } from "@/components/elements";
import WhoYouAre from "@/components/footer/who-you-are";
import SocialIcons from "./social-icons";

export function Footer() {
  return (
    // Overall container
    <footer className="pt-20 mt-12 bg-foreground">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <WhoYouAre />
        <ColoredSeparator
          className="mb-8"
          color="steel-blue"
          orientation="horizontal"
        />
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 mb-12">
          <FooterLogo />
          <FooterLinks />
        </div>
      </div>
      <div className="sm:flex sm:justify-center">
        <BottomLinks />
        <ColoredSeparator
          color="steel-blue"
          className="mx-2"
          orientation="vertical"
        />
        <SocialIcons />
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="flex flex-row gap-10 text-secondary items-center justify-center md:justify-start w-full m:w-1/2">
      <div className="flex justify-center sm:justify-start md:mb-0">
        <div className="sm:hidden">
          <Link href="/">
            <Icons.logo width={120} height={120} />
          </Link>
        </div>
        <div className="hidden sm:block">
          <Link href="/">
            <Icons.logo width={200} height={200} />
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <Paragraph className="text-left text-xl lg:text-2xl font-semibold">
          We are on
        </Paragraph>
        <PageHeader className="text-4xl lg:text-5xl capitalize font-extrabold text-left">
          THE PRECIPICE
        </PageHeader>
        <Paragraph className="text-right text-xl lg:text-2xl font-semibold">
          of Destiny.
        </Paragraph>
      </div>
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="flex flex-row w-full items-center">
      <div className="grid gap-6 grid-cols-3 md:grid-cols-6 w-full text-secondary font-semibold">
        <div>
          <Link href="/" className="hover:underline">
            ABOUT
          </Link>
        </div>
        <div>
          <Link href="/" className="hover:underline">
            ARCHIVE
          </Link>
        </div>
        <div>
          <Link href="/" className="hover:underline">
            PRESSKIT
          </Link>
        </div>
        <div>
          <Link href="/" className="hover:underline">
            NEWSLETTER
          </Link>
        </div>
        <div className="md:pl-2 lg:pl-3 xl:pl-4">
          <Link href="/" className="hover:underline">
            YOUTUBE
          </Link>
        </div>
      </div>
    </div>
  );
}

function BottomLinks() {
  return (
    <span className="text-xs sm:text-sm text-primary sm:text-center sm:flex gap-1 mb-12">
      © <span>{new Date().getFullYear()}</span>{" "}
      <Link href="/" className="hover:underline">
        The Precipice
      </Link>{" "}
      All Rights Reserved.
      <ColoredSeparator
        color="steel-blue"
        className="mx-2"
        orientation="vertical"
      />{" "}
      <Link href="/" className="hover:underline">
        Terms of Service
      </Link>{" "}
      <ColoredSeparator
        color="steel-blue"
        className="mx-2"
        orientation="vertical"
      />{" "}
      <Link href="/" className="hover:underline">
        Privacy Policy
      </Link>
    </span>
  );
}
