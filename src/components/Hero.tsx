import { ChevronDown } from 'lucide-react';
import { heroImages } from '@/data/images';

export default function Hero() {
  const scrollToContent = () => {
    document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background image with slow zoom */}
      <div className="absolute inset-0 hero-zoom">
        <img
          src={heroImages.main}
          alt="Irida Hotel at golden hour overlooking the Mediterranean sea"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-charcoal/40 via-deep-charcoal/30 to-deep-charcoal/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="text-white/80 text-xs tracking-wide-3 uppercase mb-6 animate-fade-in">
          Welcome to Irida Hotel
        </p>
        <h1 className="font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] max-w-4xl text-balance animate-fade-up">
          A Refined Mediterranean Escape
        </h1>
        <p className="text-white/85 text-base sm:text-lg mt-8 max-w-xl font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
          Elegant suites, authentic Greek hospitality and moments of pure serenity by the sea.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10 animate-fade-in" style={{ animationDelay: '0.7s', opacity: 0 }}>
          <button
            onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs tracking-wide-2 uppercase px-9 py-4 bg-white text-charcoal hover:bg-champagne transition-colors duration-300"
          >
            Book Your Stay
          </button>
          <button
            onClick={() => document.querySelector('#suites')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-xs tracking-wide-2 uppercase px-9 py-4 border border-white/50 text-white hover:bg-white hover:text-charcoal transition-all duration-300"
          >
            Explore Our Suites
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-300"
      >
        <span className="text-[10px] tracking-wide-3 uppercase">Scroll to Explore</span>
        <ChevronDown size={18} className="animate-bounce" style={{ animationDuration: '2s' }} />
      </button>
    </section>
  );
}
