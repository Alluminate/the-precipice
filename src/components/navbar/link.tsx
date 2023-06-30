import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';

export interface NavbarLinkProps {
  href: string;
  label: string;
  submenuList?: NavbarLinkProps[];
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link href={href} className={cn("block py-2 pl-3 pr-4 text-primary md:text-foreground rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-foreground/80 md:p-0", isActive ? "text-foreground bg-primary md:text-primary md:bg-transparent" : "")}>{label}</Link>
    </li>
  )
}

export const NavbarSubmenuLink: React.FC<NavbarLinkProps> = ({ href, label }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li key={href}><Link href={href} className={cn("block px-4 py-2 hover:text-primary hover:bg-gray-100", isActive ? "text-primary bg-gray-100 hover:text-primary/80 hover:bg-gray-100/80" : '' )}>{label}</Link></li>
  )
}

export const NavbarLinkWithSubMenu: React.FC<NavbarLinkProps> = ({ href, label, submenuList }) => {
  const pathname = usePathname();
  const re = new RegExp(`^${href}(?:/(.*))?$`, '');
  const isActive = re.test(pathname);

  return (
    <li>
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className={cn("flex items-center justify-between cursor-pointer py-2 pl-3 pr-4 text-primary md:text-foreground hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-foreground/80 md:p-0 md:w-auto", isActive ? "text-foreground bg-primary md:text-primary md:bg-transparent" : "")}>{label} <Icons.chevrondown className="w-[1em]" strokeWidth={3} /> </label>
        <ul tabIndex={0} className="dropdown-content z-[1] menu overflow-clip shadow-lg shadow-primary/30 rounded-box text-sm text-foreground font-normal bg-background border border-primary divide-y divide-primary rounded-lg w-56">
          {submenuList?.map((submenu) => <NavbarSubmenuLink key={submenu.href} { ...submenu} />)}
        </ul>
      </div>
    </li>
  )
}
