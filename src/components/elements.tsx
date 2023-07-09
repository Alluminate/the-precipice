import Balance from "react-wrap-balancer"

import { cn } from "@/lib/utils"

//TODO: Create helper elements to be used across
function PageHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "flex h-[100svh] md:h-[100vh] flex-col items-center gap-2 px-4 md:px-12 pt-40 md:pt-44 ",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

function PageHeaderHeading({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn(
        "text-3xl font-raleway font-bold leading-tight tracking-tighter md:text-7xl lg:leading-[1.1]",
        className
      )}
      {...props}
    >
      <Balance>{children}</Balance>
    </h1>
  )
}

function PageHeaderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <Balance
      className={cn(
        "max-w-[750px] text-lg font-firaSans text-foreground sm:text-xl",
        className
      )}
      {...props}
    />
  )
}

function SubHeader({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-2xl sm:text-3xl font-bold max-w-xs", className)} {...props}>{children}</h3>
  )
}

function Paragraph({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-base md:text-lg font-firaSans", className)} {...props}>{children}</p>
  )
}

export { PageHeader, PageHeaderHeading, PageHeaderDescription, SubHeader, Paragraph }