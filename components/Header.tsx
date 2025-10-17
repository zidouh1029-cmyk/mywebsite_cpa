import React, { useState } from 'react';
import { LogoIcon, MenuIcon } from './Icons';

// This function will handle all navigation clicks for smooth scrolling
const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, closeMenu?: () => void, navigateTo?: (page: string) => void) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  if (!href) return;
  
  if (closeMenu) closeMenu();

  if (href.startsWith('#')) {
      if (href === '#hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetElement = document.getElementById(href.substring(1));
      if (targetElement) {
        const header = document.querySelector('nav');
        const headerHeight = header ? header.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
  } else if (navigateTo) {
      navigateTo(href);
  }
};


const NavLink: React.FC<{ href: string; children: React.ReactNode; isPrimary?: boolean; navigateTo: (page: string) => void; }> = ({ href, children, isPrimary = false, navigateTo }) => (
  <a 
    href={href} 
    onClick={(e) => handleNavClick(e, undefined, navigateTo)}
    className={`${isPrimary ? 'text-text-primary' : 'text-text-secondary'} hover:text-primary transition-colors duration-200 cursor-pointer`}>
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; isPrimary?: boolean; onClick: () => void; navigateTo: (page: string) => void; }> = ({ href, children, isPrimary = false, onClick, navigateTo }) => (
    <a 
        href={href} 
        onClick={(e) => handleNavClick(e, onClick, navigateTo)} 
        className={`block py-2 ${isPrimary ? 'text-text-primary' : 'text-text-secondary'} hover:text-primary transition-colors duration-200 cursor-pointer`}>
      {children}
    </a>
);
  

function Header({ navigateTo }: { navigateTo: (page: string) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-luxury border-b border-secondary-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" onClick={(e) => handleNavClick(e, undefined, () => navigateTo('home'))} className="flex items-center cursor-pointer">
            <LogoIcon />
            <span className="text-xl font-poppins font-bold bg-gradient-to-r from-primary to-accent [-webkit-background-clip:text] [background-clip:text] text-transparent">BestBooks.Reviews</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#hero" isPrimary navigateTo={() => navigateTo('home')}>Home</NavLink>
            <NavLink href="#categories" navigateTo={() => navigateTo('home')}>Categories</NavLink>
            <NavLink href="#reviews" navigateTo={() => navigateTo('home')}>Reviews</NavLink>
            <NavLink href="about" navigateTo={navigateTo}>About</NavLink>
            <NavLink href="#contact" navigateTo={() => navigateTo('home')}>Contact</NavLink>
          </div>
          
          <button className="md:hidden text-text-primary" onClick={toggleMenu} aria-label="Toggle mobile menu">
            <MenuIcon />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-luxury border-t border-secondary-700/50">
          <div className="px-4 py-3 space-y-1">
            <MobileNavLink href="#hero" isPrimary onClick={closeMenu} navigateTo={() => navigateTo('home')}>Home</MobileNavLink>
            <MobileNavLink href="#categories" onClick={closeMenu} navigateTo={() => navigateTo('home')}>Categories</MobileNavLink>
            <MobileNavLink href="#reviews" onClick={closeMenu} navigateTo={() => navigateTo('home')}>Reviews</MobileNavLink>
            <MobileNavLink href="about" onClick={closeMenu} navigateTo={navigateTo}>About</MobileNavLink>
            <MobileNavLink href="#contact" onClick={closeMenu} navigateTo={() => navigateTo('home')}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
