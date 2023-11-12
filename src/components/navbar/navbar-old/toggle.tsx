import React from "react";
import { Icons } from "../../icons";
import { useNavbarContext } from "./context";
import { cn } from "@/lib/utils";

export const NavbarToggle: React.FC<React.ComponentProps<"button">> = ({
  ...props
}) => {
  const { isOpen, setIsOpen } = useNavbarContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      type="button"
      className="p-2 ml-3 text-gray-400 md:hidden hover:bg-gray-10 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-dropdown"
      aria-expanded={isOpen ? "true" : "false"}
    >
      {/* <span className="sr-only">Open main menu</span> */}
      <span className="sr-only">{isOpen ? "Close" : "Open"} main menu</span>
      <Icons.hamburger className={cn(isOpen && "hidden", "w-12 h-8")} />
      <Icons.x className={cn(!isOpen && "hidden", "w-12 h-8")} />
    </button>
  );
};

//
// Style of the hamburger icon
//
// General Classes
// inline-flex: This class sets the element to be an inline-level flex container, meaning it will allow other elements to sit inline with it and also have flex container properties.
// items-center: This class vertically aligns child elements in the center along the cross-axis of the flex container.
// p-2: This class applies padding of 2 units to all sides of the element.
// ml-3: This class applies a margin of 3 units to the left side of the element.
// text-sm: This class sets the font size to small.
// text-gray-500: This class sets the text color to a medium-light gray.
// rounded-lg: This class applies large rounded corners to the element.

// Responsive Classes
// md:hidden: This class hides the element on medium (md) screen sizes and above.
// Hover State Classes
// hover:bg-gray-100: This class changes the background color to a very light gray when the element is hovered over.
// Focus State Classes
// focus:outline-none: This class removes the outline/border that appears when the element is focused (e.g., clicked or navigated to via keyboard).
// focus:ring-2: This class applies a shadow ring with a width of 2 units outside of the element when it is focused.
// focus:ring-gray-200: This class sets the color of the focus ring to a light gray when the element is focused.

// Dark Mode Classes
// These classes apply styles when dark mode is active:

// dark:text-gray-400: This class sets the text color to a slightly lighter gray in dark mode.
// dark:hover:bg-gray-700: This class sets the background color to a dark gray when the element is hovered over in dark mode.
// dark:focus:ring-gray-600: This class sets the focus ring color to a medium-dark gray in dark mode.
