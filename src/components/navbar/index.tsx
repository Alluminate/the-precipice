"use client"

import Link from "next/link";
import { Navbar } from "./navbar-container";
import { Button, buttonVariants } from '@/components/ui/button'
import { Icons } from "@/components/icons"
import { calculateRange, cn } from "@/lib/utils";
import { navsConfig } from "@/config/navs";
import { NavbarLink, NavbarLinkWithSubMenu } from "./link";

const NavTop = () => {
  return (
    <div className="grid grid-cols-9">
      {calculateRange(9).map((_, index) => <div key={index} className={cn("h-[20px]", index % 2 === 0 ? 'bg-secondary-foreground' : 'bg-transparent')}></div>)}
    </div>
  )
}


const NavBar = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="flex flex-col">
      <NavTop />
      <Navbar {...props}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <Icons.logo className="h-8" />
          </Link>
          {/* <div className="flex gap-3"> */}
          <div className="flex md:order-2">
            <Link href='/contact' className={cn(buttonVariants())}>
              Contact Us
            </Link>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            {navsConfig.topNav.map(nav => {
              return (
                nav.submenuList?.length ?
                  <NavbarLinkWithSubMenu key={nav.href} {...nav} /> :
                  <NavbarLink key={nav.href} href={nav.href} label={nav.label} />
              )
            })}
          </Navbar.Collapse>
        </div>
        {/* </div> */}
      </Navbar>
    </div>
  )
}

export { NavBar }