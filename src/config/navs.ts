import { NavbarLinkProps } from "@/components/navbar/link"

interface NavsConfig {
  topNav: NavbarLinkProps[]
}

export const navsConfig: NavsConfig = {
  topNav: [
    {
      label: "Academy",
      href: "/radiance",
    },
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
      ]
    },
    // {
    //   label: "Blog",
    //   href: "/blog",
    // },
    {
      label: "About",
      href: "/about",
    },
  ],
}