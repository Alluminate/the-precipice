import React from 'react'
import { Icons } from '../icons'
import { useNavbarContext } from './context';

export const NavbarToggle: React.FC<React.ComponentProps<'button'>> = ({ ...props }) => {
  const { isOpen, setIsOpen } = useNavbarContext();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button {...props} onClick={handleClick} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded={isOpen ? "true" : "false"}>
      <span className="sr-only">Open main menu</span>
      <Icons.hamburger className="w-6 h-6" />
    </button>
  )
}
