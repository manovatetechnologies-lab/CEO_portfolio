import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/company', label: 'Company' },
  { href: '/expertise', label: 'Expertise' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '', label: 'Achievements' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-gradient backdrop-blur border-b border-white/10">
      <div className="container-executive">
        <nav className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-semibold text-white">
              Syed Kareem <span className="text-gold">Mynudeen</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;

              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-300',
                    isActive
                      ? 'text-gold'
                      : 'text-white/80 hover:text-gold'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 rounded-lg bg-navy border border-white/10">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      'px-6 py-3 text-base font-medium tracking-wide transition-colors duration-300',
                      isActive
                        ? 'text-gold'
                        : 'text-white/80 hover:text-gold'
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
