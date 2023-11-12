import { NavbarLinkProps } from "../../src/components/navbar/navbar-old/link";

interface NavsConfig {
  topNav: NavbarLinkProps[];
}

export const navsConfig: NavsConfig = {
  topNav: [
    // {
    //   label: "Academy",
    //   href: "/radiance",
    // },
    {
      label: "Services",
      href: "/services",
      submenuList: [
        // {
        //   label: "Academy",
        //   href: "/services/academy",
        // },
        // {
        //   label: "Blog",
        //   href: "/services/blog",
        // },
        // {
        //   label: "About",
        //   href: "/services/about",
        // },
      ],
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
};
