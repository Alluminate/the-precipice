import { NavbarLinkProps } from "../components/navbar/navbar-old/link";

export interface NavbarSectionConfig {
  sectionTitle: string;
  links: NavbarLinkProps[];
}

export interface NavsDrawerConfig {
  drawerNav: NavbarSectionConfig[];
}

export const navsDrawerConfig: NavsDrawerConfig = {
  drawerNav: [
    {
      sectionTitle: "Web Links",
      links: [
        {
          label: "Archives",
          href: "/archives",
        },
        {
          label: "About",
          href: "/about",
        },
      ],
    },
    {
      sectionTitle: "Connect with Me",
      links: [
        {
          label: "Pitch a Story",
          href: "mailto:opatowsky77@gmail.com",
        },
        {
          label: "Instagram",
          href: "/instagram",
        },
        {
          label: "Twitter",
          href: "/twitter",
        },
      ],
    },
    {
      sectionTitle: "Stay Informed",
      links: [
        {
          label: "Watch Content",
          href: "/watch",
        },
        {
          label: "Get Telegram Updates",
          href: "/telegram",
        },
        {
          label: "Subscribe to Newsletter",
          href: "/subscribe",
        },
      ],
    },
    {
      sectionTitle: "Topics",
      links: [
        {
          label: "The Endgame Crisis",
          href: "/blog/endgame-crisis",
        },
        {
          label: "Humanity's Potential",
          href: "/blog/humanitys-potential",
        },
        {
          label: "Society",
          href: "/blog/society",
        },
        {
          label: "Culture",
          href: "/blog/culture",
        },
        {
          label: "Meaning",
          href: "/blog/meaning",
        },
        {
          label: "Venture Philosophy",
          href: "/blog/venture-philosophy",
        },
        {
          label: "Core Concepts",
          href: "/blog/core-concepts",
        },
        {
          label: "Shared Truth",
          href: "/blog/shared-truth",
        },
      ],
    },
  ],
};
