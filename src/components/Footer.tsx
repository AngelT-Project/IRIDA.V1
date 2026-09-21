import { useState } from 'react';
import { navLinks } from '@/data/images';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-deep-charcoal text-warm-white/80 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl tracking-wide-2 text-white mb-4">IRIDA HOTEL</h3>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              A refined Mediterranean escape where elegant suites, authentic Greek hospitality
              and serene sea views come together.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs tracking-wide-2 uppercase text-champagne mb-5">Explore</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-sm font-light hover:text-champagne transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-wide-2 uppercase text-champagne mb-5">Contact</h4>
            <ul className="space-y-3 text-sm font-light">
              <li>Address placeholder</li>
              <li>Phone placeholder</li>
              <li>Email placeholder</li>
            </ul>
            <h4 className="text-xs tracking-wide-2 uppercase text-champagne mt-8 mb-4">Follow</h4>
            <div className="flex gap-6">
              <a href="#" className="text-sm font-light hover:text-champagne transition-colors duration-300">
                Instagram
              </a>
              <a href="#" className="text-sm font-light hover:text-champagne transition-colors duration-300">
                Facebook
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs tracking-wide-2 uppercase text-champagne mb-5">Newsletter</h4>
            <p className="text-sm font-light leading-relaxed mb-5">
              Receive occasional news and inspiration from Irida.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-transparent border-b border-white/20 text-sm py-2 focus:outline-none focus:border-champagne transition-colors placeholder:text-white/40"
              />
              <button
                type="submit"
                className="self-start text-xs tracking-wide-2 uppercase border-b border-white/40 pb-1 hover:text-champagne hover:border-champagne transition-colors duration-300"
              >
                Subscribe
              </button>
              {subscribed && (
                <p className="text-xs text-champagne font-light animate-fade-in">
                  Thank you for subscribing.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8">
          <p className="text-xs text-white/40 font-light">
            &copy; {new Date().getFullYear()} Irida Hotel. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-champagne transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-champagne transition-colors duration-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
