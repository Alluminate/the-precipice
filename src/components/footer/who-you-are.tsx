import React from "react";
import { PageHeader, Paragraph } from "@/components/elements";
import { ColoredSeparator } from "../ui/separator";

interface FooterListItemProps {
  children: React.ReactNode;
}

const FooterListItem: React.FC<FooterListItemProps> = ({ children }) => {
  return (
    <li>
      <Paragraph>{children}</Paragraph>
    </li>
  );
};

export default function WhoYouAre() {
  return (
    //   {/* Top Half of the container */}
    <div className="flex flex-col p-4 lg:py-8 xl:px-4 2xl:px-12">
      <div className="flex flex-col pb-5 text-background xl:px-4 2xl:px-12">
        <div className="flex flex-col pb-2 xl:px-4 2xl:px-6">
          <PageHeader className="text capitalize">Who You Are</PageHeader>
          <Paragraph>
            Welcome! We hope you find a home here on the Precipice.
          </Paragraph>
        </div>
        <div className="flex flex-col md:flex-row pb-2 xl:px-4 2xl:px-6">
          <div className="flex flex-col py-2 w-full m:w-1/2">
            <Paragraph className="font-semibold">Things you do...</Paragraph>
            <ul className="list-disc list-outside pl-4">
              <FooterListItem>
                You listen to Breaking Points, Eric Weinstein, Chris Williamson,
                Daniel Schmactenberger, Tristan Harris.
              </FooterListItem>
              <FooterListItem>
                You read from WaitButWhy, LessWrong, the Behavioral Scientist,
                Wired, The New York Times, Mark Manson, Scott Alexander, Vitalik
                Buterin, Balaji Srinivasan, among others.
              </FooterListItem>
              <FooterListItem>
                You became active in Web 3.0, more specifically the DeFi,
                permaweb, and scability communities. but found yourself
                alienated by speculation, VCs masquerading as edgy innovators,
                and were skeptical of copycats, outright scams, and marketing
                fluff.
              </FooterListItem>
              <FooterListItem>
                You play grand strategy and 4x games like Civ, Victoria 3,
                Crusader Kings 3, Total War, among others—and you were always on
                the hunt for the best mods.
              </FooterListItem>
            </ul>
          </div>
          <div className="flex flex-col py-6 md:py-0 w-full m:w-1/2 xl:px-4 2xl:px-6">
            <Paragraph className="font-semibold">
              Things you believe...
            </Paragraph>
            <ul className="list-disc list-outside pl-4">
              <FooterListItem>
                You don’t dwell on collapse; rather, you’re obsessed with what
                might be done about it.
              </FooterListItem>
              <FooterListItem>
                You think there’s a difference between happiness, success, and
                fulfillment.
              </FooterListItem>
              <FooterListItem>
                You believe the “culture war” needs to end.
              </FooterListItem>
              <FooterListItem>
                You followed Andrew Yang’s presidential campaign.
              </FooterListItem>
              <FooterListItem>
                You believe in living your healthiest life, even at the cost of
                being social.
              </FooterListItem>
              <FooterListItem>
                You would define yourself as a rational optimist.
              </FooterListItem>
              <FooterListItem>
                You want to see the mass adoption of AI & crypto tech, but you
                also want consumer protections that actually work.
              </FooterListItem>
              <FooterListItem>
                You feel alienated by social media echo chambers.
              </FooterListItem>
            </ul>
          </div>
        </div>
        <div className="flex flex-col pt-4 text-center">
          <Paragraph className="font-semibold">
            Even Better if this isn't you.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
