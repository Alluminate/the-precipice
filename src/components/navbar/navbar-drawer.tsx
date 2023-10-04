import React, { useState } from "react";
import Drawer from "./drawer"; // Import the Drawer component
import NavbarToggle from "./toggle-drawer";
import { useDrawerContext, DrawerProvider } from "./context-drawer";

import { Icons } from "../icons";
import { cn } from "@/lib/utils";

// import { useNavbarContext } from "./context";
// import { Navbar } from "./navbar-container";

// const [isDrawerOpen, setIsDrawerOpen] = useState(false): This React state keeps track of whether our drawer is open or not.
// handleDrawerClose and handleDrawerOpen: These functions modify the isDrawerOpen state when called, controlling the visibility of the drawer.
const NavbarDrawer = ({ ...props }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <DrawerProvider>
      {/* <div className="flex flex-col w-full fixed top-0 left-0 z-50"> */}
      <div className="relative flex flex-col z-50">
        <Drawer />
        <NavbarToggle />
      </div>
    </DrawerProvider>
  );
};

export { NavbarDrawer };

// COMMENTED OUT
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Add state for the Drawer
//   const handleDrawerClose = () => {
//     setIsDrawerOpen(false); // Function to close the Drawer
//   };
//   const handleDrawerOpen = () => {
//     setIsDrawerOpen(true); // Function to open the Drawer
//   };

// COMMENTED OUT
// <div className="flex flex-col w-full fixed top-0 left-0 z-50">
//     <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose} />
//     {/* Include the Drawer Component with props */}
//     <Navbar {...props} className="bg-background border-b border-border">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         {/* Other navbar content... */}
//         <Logo />
//         <div className="flex">
//             {/* Updated container for the hamburger menu */}
//             <button
//             onClick={handleDrawerOpen}
//             className="p-4 m-4 bg-blue-500 text-white"
//             >
//             Open Drawer
//             </button>
//         </div>
//         </div>
//     </Navbar>
//     </div>
