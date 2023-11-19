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
          href: "https://www.instagram.com/theprecipice_/",
        },
        {
          label: "Twitter",
          href: "https://twitter.com/_themitch_",
        },
      ],
    },
    {
      sectionTitle: "Stay Informed",
      links: [
        {
          label: "Watch Content",
          href: "/",
        },
        {
          label: "Get Telegram Updates",
          href: "/",
        },
        {
          label: "Subscribe to Newsletter",
          href: "/",
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
          label: "Memetic Warfare",
          href: "/blog/memetic-warfare",
        },
        {
          label: "Information Ecology",
          href: "/blog/information-ecology",
        },
        {
          label: "Proof of Humanity",
          href: "/blog/proof-of-humanity",
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
