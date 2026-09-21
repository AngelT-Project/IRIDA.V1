import { introImages, aboutImages } from '@/data/images';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function Introduction() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="intro" className="relative bg-warm-white py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <p className={`text-xs tracking-wide-3 uppercase text-gold mb-8 reveal reveal-delay-1 ${isVisible ? 'is-visible' : ''}`}>
            The Irida Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-[1.15] max-w-4xl text-balance">
            A place to slow down, breathe deeply and experience Greece beautifully.
          </h2>
          <div className="mt-12 max-w-2xl">
            <p className="text-base lg:text-lg text-warm-taupe leading-relaxed font-light">
              Irida Hotel is a Mediterranean sanctuary where refined comfort meets personal hospitality.
              Here, peaceful surroundings and elegant design create the perfect setting for memorable stays.
              Wake to the sound of the sea, linger over slow mornings, and let the warmth of Greek hospitality
              embrace you.
            </p>
          </div>
        </div>
      </div>

      {/* Overlapping architectural image */}
      <div className="mt-20 lg:mt-28 mx-auto max-w-6xl px-6 lg:px-10">
        <div className={`image-zoom relative aspect-[21/9] overflow-hidden reveal ${isVisible ? 'is-visible' : ''} reveal-delay-2`}>
          <img
            src={introImages.architecture}
            alt="Mediterranean hotel architecture surrounded by lush greenery"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export function About() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-soft-beige py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="image-zoom aspect-[3/4] overflow-hidden">
                <img
                  src={aboutImages.exterior}
                  alt="Hotel exterior at sunset"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="image-zoom aspect-square overflow-hidden">
                  <img
                    src={aboutImages.pool}
                    alt="Infinity pool overlooking the sea"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="image-zoom aspect-[3/4] overflow-hidden">
                  <img
                    src={aboutImages.interior}
                    alt="Elegant suite interior"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="image-zoom aspect-[16/7] overflow-hidden mt-4">
              <img
                src={aboutImages.sea}
                alt="Greek coastline and turquoise sea"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-2`}>
            <h2 className="font-serif text-4xl lg:text-5xl font-light text-charcoal leading-tight mb-8">
              Welcome to Irida Hotel
            </h2>
            <div className="space-y-5 text-warm-taupe text-base lg:text-lg leading-relaxed font-light">
              <p>
                With its elegant Mediterranean character and thoughtful design, Irida Hotel is a place
                where every detail has been considered to create a sense of ease and refinement.
              </p>
              <p>
                Personalized hospitality, relaxed atmosphere, and a deep connection to the surrounding
                landscape define the Irida experience. From the warmth of natural materials to the
                gentle flow of sea breezes through the suites, every element invites you to unwind.
              </p>
              <p>
                Ideal for couples and travelers seeking comfort and tranquility, Irida offers an
                intimate retreat where Greece feels like home.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#suites')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-10 inline-flex items-center gap-2 text-xs tracking-wide-2 uppercase text-charcoal border-b border-charcoal pb-1 hover:text-gold hover:border-gold transition-colors duration-300"
            >
              Discover Irida
              <span className="text-gold">&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
