import React from 'react'
import { useNavbarContext } from './context';
import { cn } from '@/lib/utils';

export const NavbarCollapse: React.FC<React.ComponentProps<'div'>> = ({ children, ...props }) => {
  const { isOpen } = useNavbarContext();

  return (
    <div
      className={cn("hidden w-full md:flex md:items-center md:w-auto", isOpen ? "block" : "hidden")}
      {...props}
    >
      <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:mr-7 border border-gray-100 rounded-lg bg-gray-50 md:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0">
        {children}
      </ul>
    </div>
  )
}
