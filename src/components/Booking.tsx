import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Booking() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="booking" className="bg-charcoal py-28 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-warm-white leading-tight mb-6">
            Your Stay Starts Here
          </h2>
          <p className="text-warm-white/70 text-base lg:text-lg font-light max-w-xl mx-auto mb-14">
            Choose your dates and discover the perfect suite for your escape.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-warm-white p-8 lg:p-10 text-left"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label className="block text-xs tracking-wide-2 uppercase text-taupe mb-3">
                  Arrival
                </label>
                <input
                  type="date"
                  className="w-full border-b border-taupe/30 bg-transparent text-charcoal text-sm py-2 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wide-2 uppercase text-taupe mb-3">
                  Departure
                </label>
                <input
                  type="date"
                  className="w-full border-b border-taupe/30 bg-transparent text-charcoal text-sm py-2 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-wide-2 uppercase text-taupe mb-3">
                  Guests
                </label>
                <select className="w-full border-b border-taupe/30 bg-transparent text-charcoal text-sm py-2 focus:outline-none focus:border-gold transition-colors">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full text-xs tracking-wide-2 uppercase px-6 py-3 bg-charcoal text-warm-white hover:bg-gold transition-colors duration-300"
                >
                  Check Availability
                </button>
              </div>
            </div>

            {submitted && (
              <p className="mt-6 text-sm text-gold font-light animate-fade-in">
                Thank you. Our team will be in touch shortly to confirm your availability.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
