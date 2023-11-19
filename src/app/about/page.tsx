import { Hero } from "./components";
import { getMetadata } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const metadata = {
  ...getMetadata({
    title:
      "About | The Precipice - Big Ideas to Accelerate Culture 200 Years into the Future",
    description:
      "Precipice (n.) — the narrow path teetering dangerously close to the edge along a steep cliff against a sheer drop-off",
    type: "website",
    url: `${siteConfig.url}/about`,
  }),
};

export default function AboutPage() {
  return (
    <section className="space-y-20">
      <Hero />
    </section>
  );
}
