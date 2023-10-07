"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

// constant is defined as a forward-ref React component with TypeScript generics used for typing props and ref. It accepts two types:
const Separator = React.forwardRef<
  // It tells TypeScript what kind of element might be passed as a ref.
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  // It extracts the prop types from SeparatorPrimitive.Root and ensures that the ref prop is not part of the type (because ref is forwarded).
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    // A forwarded ref, that allows the parent component to access the functional component’s refs.
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
// Setting the displayName property of Separator to be the same as that of SeparatorPrimitive.Root. This is often used in debugging messages, and to determine the string name of the component in the React DevTools.
Separator.displayName = SeparatorPrimitive.Root.displayName;

const ColoredSeparator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    color?: "grey" | "steel-blue";
  }
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      color = "grey",
      ...props
    },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0",
        color === "grey" ? "bg-[#CCCCCC]" : "bg-[#397EAE]",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
ColoredSeparator.displayName = "ColoredSeparator";

export { Separator, ColoredSeparator };
