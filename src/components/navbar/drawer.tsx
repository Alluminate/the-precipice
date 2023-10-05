"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDrawerContext } from "./context-drawer"; // Import context hook
import { navsDrawerConfig } from "@/config/navs-drawer";
import NavBorder from "./border";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

import { NavbarLink, NavbarLinkWithSubMenu } from "./link-drawer";

const Drawer: React.FC = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerContext();

  return (
    <div
      className={`
      fixed right-0 top-0 w-full md:w-2/5 h-full bg-foreground overflow-y-auto transition-transform transform-gpu
      ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
    `}
    >
      {/* This is the X that appears in the Drawer menu */}
      <div className={cn("")}>
        <div className={cn("w-10 bg-background m-4")}>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="align-middle text-black"
          >
            <Icons.x className={cn(!isDrawerOpen && "hidden", "w-10 h-10")} />
          </button>
        </div>
      </div>

      {/* Mapping navigation links from config */}
      <div className="w-full p-4 uppercase">
        {navsDrawerConfig.drawerNav.map((section, idx) => (
          <div key={idx} className="mb-6 pt-4 md:pt-6">
            {/* Section Header */}
            <h3 className="text-xl font-bold text-secondary mb-4">
              {section.sectionTitle}
            </h3>
            {/* Optional: Border or Separator */}
            <NavBorder />

            {/* Links */}
            <ul>
              {section.links.map((link) =>
                link.submenuList ? (
                  <NavbarLinkWithSubMenu key={link.href} {...link} />
                ) : (
                  <NavbarLink key={link.href} {...link} />
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drawer;

// {navsDrawerConfig.topNav.map((nav) => {
//     // add submenus if they exist
//     return nav.submenuList?.length ? (
//       // this is the whole submenu + topics div
//       <div key={nav.href} className="p-4">
//         {/* this is the Topics Title */}
//         <p className="text-white mb-2">{nav.label}</p>
//         <ul>
//           <NavBorder />
//           {nav.submenuList.map((subMenu) => (
//             <div>
//               <li key={subMenu.href}>
//                 <Link href={subMenu.href}>
//                   <p className="text-white py-1 block">{subMenu.label}</p>
//                 </Link>
//               </li>
//               <NavBorder />
//             </div>
//           ))}
//         </ul>
//       </div>
//     ) : (
//       // Add simple navigation link
//       <Link key={nav.href} href={nav.href}>
//         <p className="p-4 text-white block">{nav.label}</p>
//       </Link>
//     );
//   })}

// import { Navbar } from "./navbar-container";
// import { buttonVariants } from "@/components/ui/button";
// import { calculateRange, cn } from "@/lib/utils";
// import { navsConfig } from "@/config/navs";

// isOpen: boolean: A prop to track whether the drawer is open or not.
// onClose: () => void: A function prop that will be called when the user wants to close the drawer.
// Commented Out
// interface DrawerProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

//  ${isOpen ? '' : 'hidden'}: This part of the code is utilizing template literals and a ternary operator to decide whether to apply the "hidden" class based on the isOpen prop.
// fixed top-0 left-0 w-64 h-full bg-gray-800: These Tailwind classes position the drawer, define its size, and give it a background color.
// p-4 text-white: These are Tailwind classes for padding and text color on the close button.

// transition-transform transform-gpu: This adds a transition effect to the transform CSS property and optimizes for GPU rendering.
// ${isOpen ? 'translate-x-0' : '-translate-x-full'}: When isOpen is true, the drawer is fully visible (translate-x-0). When false, it's moved entirely off the screen on the left (-translate-x-full).

//   className={`${
//     isDrawerOpen ? "" : "hidden"
//   } fixed w-full md:w-2/5 h-full bg-foreground transition-transform transform-gpu ${
//     isDrawerOpen ? "translate-x-0" : "-translate-x-full"
//   }`}
