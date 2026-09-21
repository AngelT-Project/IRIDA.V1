import { finalCtaImages } from '@/data/images';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={finalCtaImages.sunset}
          alt="Sunset over the Mediterranean Sea"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-deep-charcoal/45" />

      <div
        ref={ref}
        className={`relative z-10 flex h-full flex-col items-center justify-center text-center px-6 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-tight mb-6 text-balance">
          Come Away to Irida
        </h2>
        <p className="text-white/85 text-lg font-light max-w-xl mb-10">
          A beautiful place. A slower pace. An unforgettable stay.
        </p>
        <button
          onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-xs tracking-wide-2 uppercase px-10 py-4 bg-white text-charcoal hover:bg-champagne transition-colors duration-300"
        >
          Book Your Stay
        </button>
      </div>
    </section>
  );
}
