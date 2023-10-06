import React from "react";
import { useDrawerContext } from "./context-drawer";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

const NavbarToggle: React.FC<React.ComponentProps<"button">> = ({
  ...props
}) => {
  const { isDrawerOpen, setIsDrawerOpen } = useDrawerContext();

  const handleClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className={cn("pt-4 pr-4")}>
      <button {...props} onClick={handleClick} type="button" className="...">
        <span className="sr-only">
          {isDrawerOpen ? "Close" : "Open"} main menu
        </span>
        <Icons.hamburger className={cn(isDrawerOpen && "hidden", "w-12 h-8")} />
        <Icons.x className={cn(!isDrawerOpen && "hidden", "w-12 h-8")} />
      </button>
    </div>
  );
};

export default NavbarToggle;

// const NavbarToggle: React.FC<React.ComponentProps<"button">> = ({
//   ...props
// }) => {
//   const { isDrawerOpen, setIsDrawerOpen } = useDrawerContext(); // Use context

//   const handleClick = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <button
//       {...props}
//       onClick={handleClick}
//       // ... other props
//     >
//       <span className="sr-only">
//         {isDrawerOpen ? "Close" : "Open"} main menu
//       </span>
//       <Icons.hamburger className={cn(isDrawerOpen && "hidden", "w-12 h-8")} />
//       <Icons.x className={cn(!isDrawerOpen && "hidden", "w-12 h-8")} />
//     </button>
//   );
// };

// export default NavbarToggle;

// const NavbarToggle: React.FC<React.ComponentProps<"button">> = ({
//   ...props
// }) => {
//   const { isOpen, setIsOpen } = useNavbarContext();

//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <button
//       {...props}
//       onClick={handleClick}
//       type="button"
//       className="p-2 ml-3 text-gray-400 md:hidden hover:bg-gray-10 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//       aria-controls="navbar-dropdown"
//       aria-expanded={isOpen ? "true" : "false"}
//     >
//       {/* <span className="sr-only">Open main menu</span> */}
//       <span className="sr-only">{isOpen ? "Close" : "Open"} main menu</span>
//       <Icons.hamburger className={cn(isOpen && "hidden", "w-12 h-8")} />
//       <Icons.x className={cn(!isOpen && "hidden", "w-12 h-8")} />
//     </button>
//   );
// };
