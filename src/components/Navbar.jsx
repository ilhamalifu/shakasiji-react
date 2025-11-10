import React, { useState, useRef } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Modal from './Modal';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hamburgerButtonRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <header className='sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <a href='/' aria-label='WakaDigital home' className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-sky-400 flex items-center justify-center text-white font-bold'>WA</div>
            <div>
              <div className='font-semibold dark:text-white'>WakaDigital</div>
              <div className='text-xs text-slate-500 dark:text-slate-400'>Web & Marketing Agency</div>
            </div>
          </a>
        </div>

        <nav
          role='navigation'
          aria-label='Main navigation'
          className='hidden md:flex items-center gap-6 text-sm'
        >
          <a
            href='#services'
            aria-label='Navigate to Services section'
            className='hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
          >
            Services
          </a>
          <a
            href='/portfolio'
            aria-label='Navigate to Portfolio page'
            className='hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
          >
            Work
          </a>
          <a
            href='#process'
            aria-label='Navigate to Process section'
            className='hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
          >
            Process
          </a>
          <a
            href='#pricing'
            aria-label='Navigate to Pricing section'
            className='hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
          >
            Pricing
          </a>
          <a
            href='#contact'
            aria-label='Navigate to Contact section'
            className='px-4 py-2 bg-indigo-600 text-white rounded-md hover:opacity-95 flex items-center gap-2'
          >
            <Mail size={14} aria-hidden='true' /> Contact
          </a>
          <ThemeToggle />
        </nav>

        <div className='md:hidden flex items-center gap-2 z-50'>
          <ThemeToggle />
          <button
            ref={hamburgerButtonRef}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls='mobile-menu'
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            className='p-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800'
          >
            {isMobileMenuOpen ? (
              <X size={20} aria-hidden='true' />
            ) : (
              <Menu size={20} aria-hidden='true' />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      <Modal
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        triggerRef={hamburgerButtonRef}
      >
        <nav
          id='mobile-menu'
          role='navigation'
          aria-label='Mobile navigation'
          className='flex flex-col gap-4'
        >
          <a
            href='#services'
            onClick={handleLinkClick}
            aria-label='Navigate to Services section'
            className='px-4 py-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800'
          >
            Services
          </a>
          <a
            href='/portfolio'
            onClick={handleLinkClick}
            aria-label='Navigate to Portfolio page'
            className='px-4 py-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800'
          >
            Work
          </a>
          <a
            href='#process'
            onClick={handleLinkClick}
            aria-label='Navigate to Process section'
            className='px-4 py-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800'
          >
            Process
          </a>
          <a
            href='#pricing'
            onClick={handleLinkClick}
            aria-label='Navigate to Pricing section'
            className='px-4 py-3 rounded-md hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800'
          >
            Pricing
          </a>
          <a
            href='#contact'
            onClick={handleLinkClick}
            aria-label='Navigate to Contact section'
            className='px-4 py-3 rounded-md bg-indigo-600 text-white hover:opacity-95 flex items-center justify-center gap-2 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800'
          >
            <Mail size={16} aria-hidden='true' /> Contact
          </a>
        </nav>
      </Modal>
    </header>
  );
}

