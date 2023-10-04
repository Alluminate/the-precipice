import { NavbarLinkProps } from "@/components/navbar/link";

interface NavsDrawerConfig {
  topNav: NavbarLinkProps[];
}

export const navsDrawerConfig: NavsDrawerConfig = {
  topNav: [
    {
      label: "Archives",
      href: "/archives",
    },
    {
      label: "The Endgame Crisis",
      href: "/endgame-crisis",
    },
    {
      label: "Humanity's Potential",
      href: "/humanitys-potential",
    },
    {
      label: "Society",
      href: "/society",
    },
    {
      label: "Culture",
      href: "/culture",
    },
    {
      label: "Meaning",
      href: "/meaning",
    },
    {
      label: "Venture Philosophy",
      href: "/venture-philosophy",
    },
    {
      label: "Core Concepts",
      href: "/core-concepts",
    },
    {
      label: "Shared Truth",
      href: "/shared-truth",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
};
