import Link from "next/link";
// import { Icons } from "@/components/icons";
import { PrecipiceLogo } from "@/assets/precipice-logo-supersimplified";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center p-2">
      <PrecipiceLogo.logo className="h-12" />
    </Link>
  );
};

export default Logo;
