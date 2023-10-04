import { NavbarLinkProps } from "@/components/navbar/link";

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
          href: "/pitch",
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

// export const navsDrawerConfig: NavsDrawerConfig = {
//   drawerNav: [
//     {
//       label: "Archives",
//       href: "/archives",
//     },
//     {
//       label: "About",
//       href: "/about",
//     },
//     {
//       label: "Topics",
//       href: "/archives",
//       submenuList: [
//         {
//           label: "The Endgame Crisis",
//           href: "/endgame-crisis",
//         },
//         {
//           label: "Humanity's Potential",
//           href: "/humanitys-potential",
//         },
//         {
//           label: "Society",
//           href: "/society",
//         },
//         {
//           label: "Culture",
//           href: "/culture",
//         },
//         {
//           label: "Meaning",
//           href: "/meaning",
//         },
//         {
//           label: "Venture Philosophy",
//           href: "/venture-philosophy",
//         },
//         {
//           label: "Core Concepts",
//           href: "/core-concepts",
//         },
//         {
//           label: "Shared Truth",
//           href: "/shared-truth",
//         },
//       ],
//     },
//   ],
// };
