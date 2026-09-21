import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks } from '@/data/images';
import { useScrolled } from '@/hooks/useScrollReveal';

export default function Header() {
  const scrolled = useScrolled(60);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-warm-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(43,40,37,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className={`font-serif text-2xl lg:text-3xl tracking-wide-2 transition-colors duration-500 ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              IRIDA HOTEL
            </a>

            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-xs tracking-wide-2 uppercase transition-colors duration-300 hover:text-champagne ${
                    scrolled ? 'text-charcoal' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <button
                onClick={() => handleNavClick('#booking')}
                className={`text-xs tracking-wide-2 uppercase px-7 py-3 border transition-all duration-300 ${
                  scrolled
                    ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white'
                    : 'border-white/60 text-white hover:bg-white hover:text-charcoal'
                }`}
              >
                Book Your Stay
              </button>
            </div>

            <button
              className={`lg:hidden ${scrolled ? 'text-charcoal' : 'text-white'}`}
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-deep-charcoal transition-opacity duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between h-20 px-6">
          <span className="font-serif text-2xl tracking-wide-2 text-white">IRIDA HOTEL</span>
          <button
            className="text-white"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center min-h-[70vh] gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="font-serif text-3xl text-white/90 hover:text-champagne transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => handleNavClick('#booking')}
            className="mt-4 text-xs tracking-wide-2 uppercase px-10 py-4 border border-white/40 text-white hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            Book Your Stay
          </button>
        </nav>
      </div>
    </>
  );
}
