import { ArrowRight, MapPin } from 'lucide-react';
import { locationImages } from '@/data/images';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Location() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const nearby = [
    { label: 'Nearby Beaches', items: ['—', '—', '—'] },
    { label: 'Local Attractions', items: ['—', '—', '—'] },
    { label: 'Restaurants', items: ['—', '—', '—'] },
    { label: 'Villages & Towns', items: ['—', '—', '—'] },
  ];

  return (
    <section id="location" className="bg-warm-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mb-16`}>
          <p className="text-xs tracking-wide-3 uppercase text-gold mb-6">Location</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight max-w-3xl">
            Discover Your Corner of Greece
          </h2>
          <p className="mt-6 text-warm-taupe text-base lg:text-lg font-light max-w-2xl leading-relaxed">
            Irida Hotel is perfectly positioned to explore the beauty of the Greek coastline.
            Pristine beaches, charming villages, and authentic local culture are all within reach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Landscape image */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-1 image-zoom aspect-[4/3] overflow-hidden`}>
            <img
              src={locationImages.landscape}
              alt="Greek countryside with olive trees and hills"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Map placeholder + nearby info */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-2`}>
            {/* Map placeholder */}
            <div className="relative aspect-[4/3] bg-limestone overflow-hidden mb-10">
              <img
                src={locationImages.map}
                alt="Aerial view of Greek coastline"
                className="h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <p className="text-xs tracking-wide-2 uppercase text-charcoal bg-warm-white/90 px-4 py-2">
                    Irida Hotel
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby grid */}
            <div className="grid grid-cols-2 gap-8">
              {nearby.map((section) => (
                <div key={section.label}>
                  <h3 className="text-xs tracking-wide-2 uppercase text-gold mb-4">
                    {section.label}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="text-sm text-warm-taupe font-light">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button className="mt-10 inline-flex items-center gap-2 text-xs tracking-wide-2 uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors duration-300">
              Get Directions
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
