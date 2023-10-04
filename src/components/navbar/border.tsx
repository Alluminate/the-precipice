// export a component called NavBorder that renders a horizontal line

import * as React from "react";
import { cn } from "@/lib/utils";

const NavBorder: React.FC<React.ComponentProps<"hr">> = ({ ...props }) => (
  <hr className={cn("border border-silver mx-2 my-4")} />
);

export default NavBorder;
