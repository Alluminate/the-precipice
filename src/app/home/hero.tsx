import { PageHeaderHeading } from "@/components/elements";
import Balance from "react-wrap-balancer"


export default function Hero() {
  return (
    <div className="container">
      <PageHeaderHeading className="text-center text-[70px] font-raleway">
        <Balance>We <span className="text-secondary-foreground">energize</span> products, protocols, & the pros to accelerate Web 3.0.</Balance>
      </PageHeaderHeading>
    </div>
  )
}