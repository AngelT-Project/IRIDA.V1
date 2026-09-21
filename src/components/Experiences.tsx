import { experienceImages, lifestyleImages } from '@/data/images';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const experiences = [
  {
    title: 'Infinity Pool',
    description: 'A peaceful place to unwind beneath the Mediterranean sun.',
    image: experienceImages.pool,
  },
  {
    title: 'Beach & Sea',
    description: 'Easy access to the coastline and the beauty of the surrounding sea.',
    image: experienceImages.beach,
  },
  {
    title: 'Dining',
    description: 'A relaxed Mediterranean dining experience inspired by the region.',
    image: experienceImages.dining,
  },
  {
    title: 'Local Experiences',
    description: 'Discover beaches, villages, landscapes, food and culture surrounding Irida.',
    image: experienceImages.local,
  },
];

export function Experiences() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experiences" className="bg-soft-beige py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center mb-20`}>
          <p className="text-xs tracking-wide-3 uppercase text-gold mb-6">The Experience</p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight">
            More Than a Stay
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {experiences.map((exp, idx) => (
            <div
              key={exp.title}
              className={`reveal ${isVisible ? 'is-visible' : ''} reveal-delay-${idx + 1} group`}
            >
              <div className="image-zoom relative aspect-[16/11] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 via-transparent to-transparent" />
              </div>
              <div className="mt-6">
                <h3 className="font-serif text-3xl font-light text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-warm-taupe text-base font-light leading-relaxed max-w-md">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Lifestyle() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  const stories = [
    {
      title: 'Mornings by the Sea',
      description: 'Slow breakfasts, warm sunlight and quiet moments.',
      image: lifestyleImages.morning,
    },
    {
      title: 'Golden Hour',
      description: 'The landscape transforms as the sun begins to set.',
      image: lifestyleImages.goldenHour,
    },
    {
      title: 'Discover Greece',
      description: 'Explore the beaches, culture, food and landscapes around Irida.',
      image: lifestyleImages.discover,
    },
  ];

  return (
    <section className="bg-warm-white py-28 lg:py-40">
      <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} mx-auto max-w-7xl px-6 lg:px-10 mb-20`}>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal leading-tight text-center">
          Live the Mediterranean Way
        </h2>
      </div>

      {stories.map((story, idx) => (
        <div
          key={story.title}
          className={`mx-auto max-w-7xl px-6 lg:px-10 ${idx > 0 ? 'mt-20 lg:mt-32' : ''}`}
        >
          <StoryBlock story={story} reverse={idx % 2 === 1} />
        </div>
      ))}
    </section>
  );
}

function StoryBlock({
  story,
  reverse,
}: {
  story: { title: string; description: string; image: string };
  reverse: boolean;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} grid lg:grid-cols-2 gap-8 lg:gap-16 items-center`}
    >
      <div className={`image-zoom aspect-[16/10] overflow-hidden ${reverse ? 'lg:order-2' : ''}`}>
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className={reverse ? 'lg:order-1' : ''}>
        <h3 className="font-serif text-3xl lg:text-4xl font-light text-charcoal mb-5">
          {story.title}
        </h3>
        <p className="text-warm-taupe text-lg font-light leading-relaxed max-w-md">
          {story.description}
        </p>
      </div>
    </div>
  );
}
