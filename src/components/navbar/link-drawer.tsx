import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDrawerContext } from "./context-drawer"; //

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import NavBorder from "./border";

export interface NavbarLinkProps {
  href: string;
  label: string;
  submenuList?: NavbarLinkProps[];
  onClick?: () => void;
}

export interface NavbarSectionProps {
  sectionTitle: string;
  links: NavbarLinkProps[];
}

// This describes the links for Archives & About
export const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  const { isDrawerOpen, setIsDrawerOpen } = useDrawerContext();

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className={cn("md:px-4")}>
      <li>
        <Link href={href} onClick={handleDrawerClose}>
          <p
            className={cn(
              "block py-2 pl-3 text-secondary font-bold hover:bg-destructive cursor-pointer",
              "md:p-0 md:text-secondary md:hover:bg-transparent",
              isActive
                ? "text-secondary md:text-secondary underline underline-secondary"
                : ""
            )}
          >
            {label}
          </p>
        </Link>
      </li>
    </div>
  );
};

export const NavbarSection: React.FC<NavbarSectionProps> = ({
  sectionTitle,
  links,
}) => {
  return (
    <div className="py-2">
      <h2 className="px-4 font-bold text-primary">{sectionTitle}</h2>
      <ul>
        {links.map((link) => (
          <NavbarLink key={link.href} {...link} />
        ))}
      </ul>
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
        <Link href={href}>
          <p
            className={cn(
              // Changed padding
              "block px-6 py-2 hover:text-secondary font-bold hover:bg-destructive",
              isActive ? "text-primary bg-gray-100" : ""
            )}
          >
            {label}
          </p>
        </Link>
      </li>
    </div>
  );
};

// This describes the dropdown menu container
export const NavbarLinkWithSubMenu: React.FC<NavbarLinkProps> = ({
  href,
  label,
  submenuList,
}) => {
  const pathname = usePathname();
  const re = new RegExp(`^${href}(?:/(.*))?$`, "");
  const isActive = re.test(pathname);

  return (
    <li className={cn("w-100")}>
      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className={cn(
            // my-2
            "flex cursor-pointer py-2 text-secondary hover:bg-destructive",
            "md:text-secondary md:hover:bg-transparent md:border-0 md:hover:text-foreground/80 md:p-0 md:w-auto font-bold",
            isActive
              ? "text-foreground bg-primary md:text-primary md:bg-transparent"
              : ""
          )}
        >
          {label}{" "}
          <Icons.chevrondown className="w-[1.2em] ml-2" strokeWidth={3} />{" "}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu overflow-clip shadow-lg shadow-primary/30 text-foreground font-normal bg-background border border-primary divide-y divide-border w-80"
        >
          {submenuList?.map((submenu) => (
            <NavbarSubmenuLink key={submenu.href} {...submenu} />
          ))}
        </ul>
      </div>
    </li>
  );
};
