'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Our Purpose', href: '#purpose' },
  { label: 'How We Contest', href: '#how-we-contest' },
  { label: 'What We Pursue', href: '#what-we-pursue' },
  { label: 'Three Lanes', href: '#three-lanes' },
  { label: 'Register Interest', href: '#register' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    closeMobileMenu();
    // Allow native browser smooth anchor navigation
  };

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="site-header" role="banner">
      <div className="header-container container">
        {/* Brand Title & Status */}
        <div className="brand-wrapper">
          <a
            href="#hero"
            className="brand-title"
            onClick={(e) => handleNavClick(e, '#hero')}
          >
            Yaboroo Imperium Party
          </a>
          <span className="party-status-tag">in formation</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" role="navigation" aria-label="Main Desktop Navigation">
          <ul className="desktop-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <motion.a
                  href={item.href}
                  className="nav-link"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                  {item.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-box">
            <span className={`hamburger-inner ${isMobileMenuOpen ? 'is-active' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile Drawer / Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-menu"
            className="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <nav className="mobile-nav" role="navigation" aria-label="Main Mobile Navigation">
              <ul className="mobile-nav-list">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

