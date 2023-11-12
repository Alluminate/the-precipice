"use client";

import Link from "next/link";
import { Navbar } from "./navbar-container";
import Logo from "./logo";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { calculateRange, cn } from "@/lib/utils";
import { navsConfig } from "@/config/navs";
import { NavbarLink, NavbarLinkWithSubMenu } from "./link";

const NavTop = () => {
  return (
    <div className="grid grid-cols-9">
      {calculateRange(9).map((_, index) => (
        <div
          key={index}
          className={cn(
            "h-[20px]",
            index % 2 === 0 ? "bg-secondary-foreground" : "bg-background"
          )}
        ></div>
      ))}
    </div>
  );
};

const NavBar = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="flex flex-col w-full fixed top-0 left-0 z-50">
      <NavTop />
      <Navbar {...props} className="bg-background border-b border-foreground">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Logo />
          {/* <div className="flex gap-3"> */}
          {/* IIII */}
          <div className="flex md:order-2">
            <Link href="/contact" className={cn(buttonVariants())}>
              Contact Us
            </Link>
            <Navbar.Toggle />
          </div>
          {/* IIII */}
          <Navbar.Collapse>
            {navsConfig.topNav.map((nav) => {
              return nav.submenuList?.length ? (
                <NavbarLinkWithSubMenu key={nav.href} {...nav} />
              ) : (
                <NavbarLink key={nav.href} href={nav.href} label={nav.label} />
              );
            })}
          </Navbar.Collapse>
        </div>
        {/* </div> */}
      </Navbar>
    </div>
  );
};

export { NavBar };
