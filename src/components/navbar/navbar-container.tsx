import React, { useState } from "react";
import { NavbarContext } from "../navbar-old/context";
import { NavbarCollapse } from "../navbar-old/collapse";
import { NavbarToggle } from "../navbar-old/toggle";
// import { NavbarLink } from './link';

export interface NavbarContainerProps
  extends React.PropsWithChildren,
    React.ComponentProps<"nav"> {
  menuOpen?: boolean;
}

export const NavbarContainer: React.FC<NavbarContainerProps> = ({
  menuOpen,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(menuOpen);

  return (
    <NavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <nav {...props}>{children}</nav>
    </NavbarContext.Provider>
  );
};

NavbarContainer.displayName = "Navbar";
NavbarCollapse.displayName = "Navbar.Collapse";
NavbarToggle.displayName = "Navbar.Toggle";
// NavbarLink.displayName = 'Navbar.Link';

export const Navbar = Object.assign(NavbarContainer, {
  Collapse: NavbarCollapse,
  Toggle: NavbarToggle,
  // Link: NavbarLink,
});
