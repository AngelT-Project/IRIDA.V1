import { useState } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { suiteCategories, type SuiteData } from '@/data/suites';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Suites() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedSuite, setSelectedSuite] = useState<SuiteData | null>(null);
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const activeData = suiteCategories.find((c) => c.id === activeCategory);

  return (
    <section id="suites" className="bg-warm-white py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-20`}>
          <p className="text-xs tracking-wide-3 uppercase text-gold mb-6">Stay With Us</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
            Suites Designed for Serenity
          </h2>
          <p className="mt-6 text-warm-taupe text-base lg:text-lg font-light max-w-2xl mx-auto">
            Every suite feels like a private Mediterranean retreat — a space to rest, dream and
            experience the beauty of Greece at your own pace.
          </p>
        </div>

        {/* Category panels */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {suiteCategories.map((cat, idx) => (
            <div
              key={cat.id}
              className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${idx + 1} group cursor-pointer`}
              onClick={() => setActiveCategory(activeCategory === cat.id ? null : cat.id)}
            >
              <div className="relative image-zoom aspect-[16/10] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/70 via-deep-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <h3 className="font-serif text-3xl lg:text-4xl font-light text-white mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-white/80 text-sm font-light max-w-md mb-3">
                    {cat.description}
                  </p>
                  <p className="text-white/60 text-xs tracking-wide-2 uppercase mb-5">
                    {cat.suites.length} Suites
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-wide-2 uppercase text-white border-b border-white/50 pb-1 group-hover:text-champagne group-hover:border-champagne transition-colors duration-300">
                    {activeCategory === cat.id ? 'Hide Suites' : 'Explore Suites'}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Individual suites for active category */}
        {activeData && (
          <div className="mt-16 animate-fade-in">
            <div className="border-t border-taupe/20 pt-12">
              <h3 className="font-serif text-3xl font-light text-charcoal mb-2">
                {activeData.name}
              </h3>
              <p className="text-warm-taupe text-sm font-light mb-10">
                {activeData.suites.length} suites in this category
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {activeData.suites.map((suite) => (
                  <div
                    key={suite.name}
                    onClick={() => setSelectedSuite(suite)}
                    className="group cursor-pointer"
                  >
                    <div className="image-zoom aspect-[4/3] overflow-hidden mb-5">
                      <img
                        src={suite.image}
                        alt={suite.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h4 className="font-serif text-2xl font-light text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                      {suite.name}
                    </h4>
                    <p className="text-warm-taupe text-sm font-light leading-relaxed mb-3">
                      {suite.description}
                    </p>
                    <p className="text-xs tracking-wide-2 uppercase text-taupe mb-4">
                      {suite.feature}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs tracking-wide-2 uppercase text-charcoal border-b border-charcoal pb-1 group-hover:text-gold group-hover:border-gold transition-colors duration-300">
                      View Suite
                      <ArrowRight size={14} />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Suite detail modal */}
      {selectedSuite && (
        <SuiteModal suite={selectedSuite} onClose={() => setSelectedSuite(null)} />
      )}
    </section>
  );
}

function SuiteModal({ suite, onClose }: { suite: SuiteData; onClose: () => void }) {
  const [galleryIndex, setGalleryIndex] = useState(0);

  const nextImage = () => setGalleryIndex((i) => (i + 1) % suite.gallery.length);
  const prevImage = () => setGalleryIndex((i) => (i - 1 + suite.gallery.length) % suite.gallery.length);

  return (
    <div
      className="fixed inset-0 z-[80] bg-deep-charcoal/90 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="bg-warm-white max-w-5xl w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button onClick={onClose} className="text-charcoal hover:text-gold transition-colors" aria-label="Close">
            <X size={24} />
          </button>
        </div>

        {/* Hero image with gallery navigation */}
        <div className="relative aspect-[16/10] overflow-hidden mx-6 lg:mx-10">
          <img
            src={suite.gallery[galleryIndex]}
            alt={`${suite.name} — view ${galleryIndex + 1}`}
            className="h-full w-full object-cover"
          />
          {suite.gallery.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {suite.gallery.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition-colors ${
                  i === galleryIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 lg:p-10">
          <p className="text-xs tracking-wide-3 uppercase text-gold mb-4">{suite.category}</p>
          <h3 className="font-serif text-4xl font-light text-charcoal mb-4">{suite.name}</h3>
          <p className="text-warm-taupe text-base lg:text-lg font-light leading-relaxed mb-8 max-w-2xl">
            {suite.description}
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-y border-taupe/20">
            <div>
              <p className="text-xs tracking-wide-2 uppercase text-taupe mb-1">View</p>
              <p className="text-sm text-charcoal font-light">{suite.feature}</p>
            </div>
            <div>
              <p className="text-xs tracking-wide-2 uppercase text-taupe mb-1">Guests</p>
              <p className="text-sm text-charcoal font-light">—</p>
            </div>
            <div>
              <p className="text-xs tracking-wide-2 uppercase text-taupe mb-1">Size</p>
              <p className="text-sm text-charcoal font-light">—</p>
            </div>
            <div>
              <p className="text-xs tracking-wide-2 uppercase text-taupe mb-1">Beds</p>
              <p className="text-sm text-charcoal font-light">—</p>
            </div>
          </div>

          {/* Gallery thumbnails */}
          <div className="mt-8 grid grid-cols-4 gap-3">
            {suite.gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setGalleryIndex(i)}
                className={`aspect-square overflow-hidden transition-opacity ${
                  i === galleryIndex ? 'ring-2 ring-gold' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              onClose();
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-10 w-full sm:w-auto text-xs tracking-wide-2 uppercase px-10 py-4 bg-charcoal text-warm-white hover:bg-gold transition-colors duration-300"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
}
