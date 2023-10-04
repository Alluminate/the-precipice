"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useDrawerContext } from "./context-drawer"; // Import context hook
import { Navbar } from "./navbar-container";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { calculateRange, cn } from "@/lib/utils";
import { navsConfig } from "@/config/navs";
import { navsDrawerConfig } from "@/config/navs-drawer";
import { NavbarLink, NavbarLinkWithSubMenu } from "./link";
import NavBorder from "./border";

const Drawer: React.FC = () => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerContext();

  return (
    <div
      //   className={`${
      //     isDrawerOpen ? "" : "hidden"
      //   } fixed w-full md:w-2/5 h-full bg-foreground transition-transform transform-gpu ${
      //     isDrawerOpen ? "translate-x-0" : "-translate-x-full"
      //   }`}
      className={`
      fixed right-0 top-0 w-full md:w-2/5 h-full bg-foreground transition-transform transform-gpu
      ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
    `}
    >
      <button onClick={() => setIsDrawerOpen(false)} className="p-4 text-white">
        Close
      </button>
      {/* Mapping navigation links from config */}
      {navsDrawerConfig.topNav.map((nav) => {
        return nav.submenuList?.length ? (
          // Add submenus if they exist
          <div key={nav.href} className="p-4">
            <p className="text-white mb-2">{nav.label}</p>
            <ul>
              {nav.submenuList.map((subMenu) => (
                <div>
                  <li key={subMenu.href}>
                    <Link href={subMenu.href}>
                      <p className="text-white py-1 block">{subMenu.label}</p>
                    </Link>
                  </li>
                  <NavBorder />
                </div>
              ))}
            </ul>
          </div>
        ) : (
          // Add simple navigation link
          <Link key={nav.href} href={nav.href}>
            <p className="p-4 text-white block">{nav.label}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Drawer;

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
