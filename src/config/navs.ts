import { NavbarLinkProps } from "@/components/navbar/link";

interface NavsConfig {
  topNav: NavbarLinkProps[];
}

export const navsConfig: NavsConfig = {
  topNav: [
    {
      label: "ARCHIVES",
      href: "/archives",
    },
    {
      label: "ABOUT",
      href: "/about",
    },
    // {
    //   label: "Topics",
    //   href: "/archives",
    //   submenuList: [
    //     {
    //       label: "The Endgame Crisis",
    //       href: "/endgame-crisis",
    //     },
    //     {
    //       label: "Humanity's Potential",
    //       href: "/humanitys-potential",
    //     },
    //     {
    //       label: "Society",
    //       href: "/society",
    //     },
    //     {
    //       label: "Culture",
    //       href: "/culture",
    //     },
    //     {
    //       label: "Meaning",
    //       href: "/meaning",
    //     },
    //     {
    //       label: "Venture Philosophy",
    //       href: "/venture-philosophy",
    //     },
    //     {
    //       label: "Core Concepts",
    //       href: "/core-concepts",
    //     },
    //     {
    //       label: "Shared Truth",
    //       href: "/shared-truth",
    //     },
    //   ],
    // },
  ],
};
