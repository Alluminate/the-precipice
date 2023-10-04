import { NavbarLinkProps } from "@/components/navbar/link";

interface NavsDrawerConfig {
  drawerNav: NavbarLinkProps[];
}

export const navsDrawerConfig: NavsDrawerConfig = {
  drawerNav: [
    {
      label: "Archives",
      href: "/archives",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Topics",
      href: "/archives",
      submenuList: [
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
      ],
    },
  ],
};
