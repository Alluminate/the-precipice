"use client";

import Link from "next/link";
import Logo from "./logo";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { calculateRange, cn } from "@/lib/utils";
import { navsConfig } from "@/config/navs";
import { NavbarDrawer } from "./navbar-drawer";

import { NavbarLink, NavbarLinkWithSubMenu } from "../navbar-old/link";

const NavBar = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="flex justify-between w-full fixed top-0 left-0 z-50 bg-white border border-b-border">
      {/* <div className="flex flex-col flex-wrap items-end mx-auto w-full fixed top-0 left-0 z-50"> */}
      <div className="flex justify-between top-0 left-0 z-50 xl:px-6">
        <Logo />
        {/* <div className="hidden md:flex space-x-4"> */}
        <div className="hidden md:flex space-x-4 pl-5 pt-3">
          {navsConfig.topNav.map((nav) => (
            <Link key={nav.href} href={nav.href}>
              <p className="text-foreground p-2 font-bold">{nav.label}</p>
            </Link>
          ))}
        </div>
      </div>
      <NavbarDrawer />
    </div>
  );
};

// import { Navbar } from "./navbar-container";
// import NavbarToggle from "./toggle-drawer";
// import { DrawerProvider } from "./context-drawer";

// const NavBar = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
//   return (
//     <div className="flex flex-col w-full fixed top-0 left-0 z-50">
//       <Navbar {...props} className="bg-background border-b border-border">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <div
//             className={cn(
//               // Logo container
//               ""
//             )}
//           >
//             <Logo />
//           </div>
//           <div className="flex">
//             {/* // container for the hamburger menu */}
//             <Navbar.Toggle />
//           </div>

//           <Navbar.Collapse>
//             {navsConfig.topNav.map((nav) => {
//               return nav.submenuList?.length ? (
//                 <NavbarLinkWithSubMenu key={nav.href} {...nav} />
//               ) : (
//                 <NavbarLink key={nav.href} href={nav.href} label={nav.label} />
//               );
//             })}
//           </Navbar.Collapse>
//         </div>
//       </Navbar>
//     </div>
//   );
// };

export { NavBar };
