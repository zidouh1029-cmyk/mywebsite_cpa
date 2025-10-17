import React from 'react';
import { LogoIcon } from './Icons';

const FooterLink: React.FC<{href: string, children: React.ReactNode, onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void}> = ({href, children, onClick}) => (
    <li>
        <a href={href} onClick={onClick} className="text-text-secondary hover:text-primary transition-colors duration-200 cursor-pointer">
            {children}
        </a>
    </li>
);

const LegalButton: React.FC<{children: React.ReactNode, onClick: () => void}> = ({ children, onClick }) => (
    <button onClick={onClick} className="text-text-secondary hover:text-primary text-sm transition-colors duration-200">
        {children}
    </button>
);


function Footer({ navigateTo }: { navigateTo: (page: string) => void }) {
  
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    navigateTo('home');
    
    setTimeout(() => {
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
    }, 100); // Small delay to allow home page to render before scrolling
  };

  return (
    <footer id="contact" className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <LogoIcon />
              <span className="text-xl font-poppins font-bold bg-gradient-to-r from-primary to-accent [-webkit-background-clip:text] [background-clip:text] text-transparent">BestBooks.Reviews</span>
            </div>
            <p className="text-text-secondary mb-6 max-w-md">
              Your trusted source for transformational books that built millionaire mindsets. Download premium self-development literature for free.
            </p>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
                <FooterLink href="#hero" onClick={handleScrollClick}>Home</FooterLink>
                <FooterLink href="#books" onClick={handleScrollClick}>Top Books</FooterLink>
                <li><button onClick={() => navigateTo('about')} className="text-text-secondary hover:text-primary transition-colors duration-200">About Us</button></li>
                <FooterLink href="#reviews" onClick={handleScrollClick}>Reviews</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="font-poppins font-semibold text-text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-text-secondary">
              <li>support@bestbooks.reviews</li>
              <li>+1 (555) 123-4567</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-secondary text-sm">
            © {new Date().getFullYear()} BestBooks.Reviews. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <LegalButton onClick={() => navigateTo('privacy')}>Privacy Policy</LegalButton>
            <LegalButton onClick={() => navigateTo('disclaimer')}>Disclaimer</LegalButton>
            <LegalButton onClick={() => navigateTo('dmca')}>DMCA</LegalButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
