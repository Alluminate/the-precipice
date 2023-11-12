import { createContext, useContext } from "react";

//  A context that's created with a default value of undefined.

type NavbarContext = {
  // This prop is a boolean that indicates if the navbar is currently open or closed.
  isOpen?: boolean;
  // A function that's used to set the value of isOpen.
  setIsOpen: (isOpen: boolean) => void;
};

export const NavbarContext = createContext<NavbarContext | undefined>(
  undefined
);

// A hook that's used to access the Navbar's context value. If this hook is called outside the context provider, an error will be thrown.

export function useNavbarContext(): NavbarContext {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error(
      "useNavBarContext should be used within the NavbarContext provider!"
    );
  }

  return context;
}
