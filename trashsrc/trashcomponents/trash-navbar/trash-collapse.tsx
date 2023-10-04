import React from "react";
import { useNavbarContext } from "./context";
import { cn } from "@/lib/utils";

// Props Destructuring: The component takes in all the props of a div plus any children that are passed into it.
export const NavbarCollapse: React.FC<React.ComponentProps<"div">> = ({
  children,
  ...props
}) => {
  // Conditional Rendering based on isOpen: If isOpen is true, the collapse will be displayed (block), else it remains hidden.
  const { isOpen } = useNavbarContext();

  return (
    <div
      className={cn(
        // hidden: By default, the div is hidden.
        // w-full: The div takes up the full width of its parent container.
        // md:flex: On medium (md) screens and larger, the div is displayed as a flex container.
        // md:items-center: On medium screens, the items inside the flex container are vertically centered.
        // md:w-auto: On medium screens, the width is set to auto.
        "hidden w-full md:flex md:items-center md:w-auto",
        isOpen ? "block" : "hidden"
      )}
      {...props}
    >
      <ul
        className={cn(
          // flex flex-col: The ul list is displayed as a flex container and its direction is column by default.
          // font-medium: Sets the font weight to medium.
          // p-4 md:p-0: Padding of 4 units by default, but on medium screens, the padding is set to 0.
          // mt-4 md:mr-7: Margin top of 4 units by default, but on medium screens, there's a margin-right of 7 units.
          // border border-gray-100: A border with a gray color.
          // rounded-lg: The corners of the ul are rounded.
          // bg-gray-50 md:bg-transparent: The background is a light gray by default, but on medium screens, it becomes transparent.
          // md:flex-row: On medium screens, the direction of the flex container changes to row.
          // md:space-x-8: On medium screens, there's spacing of 8 units between each child element on the horizontal axis.
          // md:mt-0: On medium screens, the margin-top is set to 0.
          // md:border-0: On medium screens, the border is removed.
          "flex flex-col font-medium p-4 md:p-0 mt-4 md:mr-7 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0"
        )}
      >
        {children}
      </ul>
    </div>
  );
};
