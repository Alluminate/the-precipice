import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import NavBorder from "../navbar/border";

export interface NavbarLinkProps {
  href: string;
  label: string;
  submenuList?: NavbarLinkProps[];
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div>
      <li>
        <Link
          href={href}
          className={cn(
            //
            // This is like the links for Archives & About
            //
            "block py-8 pl-3 text-secondary font-bold md:text-foreground md:p-0 hover:bg-destructive md:hover:bg-transparent cursor-pointer",
            isActive
              ? //
                // This describes when Archives or About are open
                //
                "text-secondary md:text-destructive"
              : ""
          )}
        >
          {label}
        </Link>
      </li>
      <NavBorder />
    </div>
  );
};

export const NavbarSubmenuLink: React.FC<NavbarLinkProps> = ({
  href,
  label,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div>
      <li>
        <Link
          href={href}
          className={cn(
            //
            // This is the style of the container of the overall dropdown menu container
            //
            "block px-6 py-6 hover:text-secondary font-bold hover:bg-destructive ",
            isActive
              ? //
                // This is the style for the dropdown menu links when they're active
                //
                "block text-primary bg-gray-100 "
              : ""
          )}
        >
          {label}
        </Link>
      </li>
    </div>
  );
};

export const NavbarLinkWithSubMenu: React.FC<NavbarLinkProps> = ({
  href,
  label,
  submenuList,
}) => {
  const pathname = usePathname();
  const re = new RegExp(`^${href}(?:/(.*))?$`, "");
  const isActive = re.test(pathname);

  return (
    <li className={cn("w-100 ")}>
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className={cn(
            //
            // The styles of the Topics title, but not the dropdown meu itself
            //
            "flex items-center justify-between cursor-pointer py-2 my-6 pl-3 pr-4 text-secondary md:text-foreground hover:bg-destructive md:hover:bg-transparent md:border-0 md:hover:text-foreground/80 md:p-0 md:w-auto",
            isActive
              ? //
                // This is the style of the text in the dropdown menu
                //
                "text-foreground bg-primary md:text-primary md:bg-transparent"
              : ""
          )}
        >
          {label}{" "}
          <Icons.chevrondown className="w-[1.2em] ml-2" strokeWidth={3} />{" "}
        </label>
        <ul
          tabIndex={0}
          //
          // The style of each Item in the dropdown menu
          //
          className="dropdown-content z-[1] menu overflow-clip shadow-lg shadow-primary/30 text-foreground font-normal bg-background border border-primary divide-y divide-border w-80 "
        >
          {submenuList?.map((submenu) => (
            <NavbarSubmenuLink key={submenu.href} {...submenu} />
          ))}
        </ul>
      </div>
      <NavBorder />
    </li>
  );
};

// block: Makes the element a block-level element.
// py-2: Provides vertical padding of 2 units.
// pl-3 pr-4: Gives the left padding as 3 units and right padding as 4 units.
// text-primary: Sets the text color to primary.

// md:text-foreground: On medium screens and up, the text color is set to foreground -- This is necessary for the uncollapsed menu
// md:hover:bg-transparent: On hover, in medium screens, the background becomes transparent.
// md:border-0: On medium screens, removes any border.
// md:hover:text-foreground/80: On hover, in medium screens, the text color becomes 80% opaque foreground.
// md:p-0: On medium screens, removes any padding.

// text-foreground: Text color is set to foreground.
// bg-primary: Background color is set to primary.
// md:text-primary: On medium screens, text color is set to primary.
// md:hover:text-primary/80: On hover, in medium screens, text color becomes 80% opaque primary.
// md:bg-transparent: On medium screens, the background is transparent.

// block: Makes the element a block-level element.
// px-4 py-2: Provides padding: 4 units horizontally and 2 units vertically.
// hover:text-primary: On hover, text color is set to primary.
// hover:bg-gray-100: On hover, the background color is set to a light gray.

// text-primary: Text color is set to primary.
// bg-gray-100: Background color is set to a light gray.
// hover:text-primary/80: On hover, text color becomes 80% opaque primary.
// hover:bg-gray-100/80: On hover, background color becomes 80% opaque light gray.

// flex: Makes the element a flex container.
// items-center: Vertically centers the flex items.
// justify-between: Horizontally spaces the flex items to be at the start and end of the flex container.
// cursor-pointer: Changes the mouse cursor to a pointer when hovered over the label.
// py-2 pl-3 pr-4: Padding: 2 units vertically, 3 units left, and 4 units right.
// text-primary: Text color is set to primary.
// md:text-foreground: On medium screens, text color is set to foreground.
// hover:bg-gray-100: On hover, the background color is set to a light gray.
// md:hover:bg-transparent: On hover, in medium screens, the background becomes transparent.
// md:border-0: On medium screens, removes any border.
// md:hover:text-foreground/80: On hover, in medium screens, text color becomes 80% opaque foreground.
// md:p-0: On medium screens, removes any padding.
// md:w-auto: On medium screens, sets the width to auto.

// dropdown-content: Likely a class to indicate that this is the content of the dropdown.
// z-[1]: Sets the z-index of the dropdown to 1.
// menu: Likely some generic class related to styling menus.
// overflow-clip: Likely to clip the overflowing content.
// shadow-lg: Provides a large shadow to the element.
// shadow-primary/30: Provides a shadow with the color set to 30% opaque primary.
// rounded-box: Rounds the corners of the box.
// text-sm: Sets the font size to small.
// text-foreground: Sets the text color to foreground.
// font-normal: Sets the font weight to normal.
// bg-background: Sets the background color from a variable (likely the page's default background).
// border: Provides a border.
// border-primary: Sets the border color to primary.
// divide-y: Creates horizontal lines/dividers between direct children.
// divide-primary: Sets the divider color to primary.
// rounded-lg: Provides large rounded corners.
// w-56: Sets the width to 56 units.
