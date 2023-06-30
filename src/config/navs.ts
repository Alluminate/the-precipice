import { NavbarLinkProps } from "@/components/navbar/link"

interface NavsConfig {
  topNav: NavbarLinkProps[]
}

export const navsConfig: NavsConfig = {
  topNav: [
    {
      label: "Academy",
      href: "/academy",
    },
    {
      label: "Services",
      href: "/services",
      submenuList: [
        {
          label: "Academy",
          href: "/services/academy",
        },
        {
          label: "Blog",
          href: "/services/blog",
        },
        {
          label: "About",
          href: "/services/about",
        },

      ]
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
    // {
    //   title: "GitHub",
    //   href: "https://github.com/shadcn/ui",
    //   external: true,
    // },
    // {
    //   title: "Twitter",
    //   href: "https://twitter.com/shadcn",
    //   external: true,
    // },
  ],
}