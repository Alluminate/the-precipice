import { CommunityCardProps } from "./community-card";
import { Icons } from "@/components/icons";


export const data: CommunityCardProps[] = [
  {
    title: "Newsletter",
    icon: <Icons.newsletter width={'50px'} height={'50px'} />,
    description: "A recurring news update from the Thorium team.",
    button: {
      label: "Subscribe",
      link: "#",
    }
  },
  {
    title: "Twitter",
    icon: <Icons.twitter  width={'50px'} height={'50px'} />,
    description: "Where we post frequent updates, reactions to news, and announcements. Follow to get ongoing education commentary.",
    button: {
      label: "Follow Us",
      link: "#",
    }
  },
  {
    title: "Discord",
    icon: <Icons.discord width={'50px'} height={'50px'} />,
    description: "Where community members chat, news drops, and our team provides support in real-time. Join us for technical support 24/7.",
    button: {
      label: "Join Us",
      link: "#",
    }
  },
  {
    title: "LinkedIn",
    icon: <Icons.linkedin  width={'50px'} height={'50px'} />,
    description: "A recurring news update from the Thorium team.",
    button: {
      label: "Follow Us",
      link: "#",
    }
  },
  {
    title: "Youtube",
    icon: <Icons.youtube  width={'50px'} height={'50px'} />,
    description: "Where we post all video footage, tutorials, community calls, and Twitter space edits.",
    button: {
      label: "Subscribe",
      link: "#",
    }
  },
]