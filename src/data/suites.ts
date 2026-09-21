export interface SuiteData {
  name: string;
  category: string;
  description: string;
  feature: string;
  image: string;
  gallery: string[];
}

export interface SuiteCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  suites: SuiteData[];
}

const suiteImages = {
  deluxe: [
    'https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/6394550/pexels-photo-6394550.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/7722153/pexels-photo-7722153.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/8134775/pexels-photo-8134775.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/14547145/pexels-photo-14547145.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/14547138/pexels-photo-14547138.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8082235/pexels-photo-8082235.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/28054852/pexels-photo-28054852.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/18285947/pexels-photo-18285947.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6466496/pexels-photo-6466496.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3688261/pexels-photo-3688261.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/17301475/pexels-photo-17301475.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/279805/pexels-photo-279805.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/6394576/pexels-photo-6394576.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  bathroom: [
    'https://images.pexels.com/photos/6315803/pexels-photo-6315803.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/2134224/pexels-photo-2134224.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8089171/pexels-photo-8089171.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/7166637/pexels-photo-7166637.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8146150/pexels-photo-8146150.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8082195/pexels-photo-8082195.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
};

const suiteNames = [
  'Jasmin', 'Lotus', 'SunBeam', 'Sand',
  'Coral', 'Pearl', 'Waves', 'Shell', 'Anemone',
  'Flower', 'Grapes', 'Water Lily', 'Poppy', 'Pebbles',
  'Branches', 'Stars', 'Olive',
];

const suiteDescriptions: Record<string, string> = {
  Jasmin: 'A serene Mediterranean suite designed for relaxed mornings and peaceful evenings.',
  Lotus: 'Soft natural light and warm textures create a calming retreat.',
  SunBeam: 'Bright and airy, with sunlight streaming through elegant shutters.',
  Sand: 'Warm tones and natural materials echo the nearby shoreline.',
  Coral: 'A refined suite with subtle Mediterranean accents and garden views.',
  Pearl: 'Elegant simplicity with soft linen and gentle sea breezes.',
  Waves: 'A spacious suite where the rhythm of the sea is never far.',
  Shell: 'Intimate and inviting, with curated details and a restful ambiance.',
  Anemone: 'A beautifully appointed suite with a private terrace.',
  Flower: 'A romantic suite surrounded by natural beauty and garden greenery.',
  Grapes: 'Inspired by the vineyards of Greece, warm and characterful.',
  'Water Lily': 'Tranquil and light-filled, with a calming waterside atmosphere.',
  Poppy: 'Vibrant yet understated, with warm Mediterranean charm.',
  Pebbles: 'A grounded, earthy suite with natural stone and wood textures.',
  Branches: 'A secluded honeymoon retreat beneath the olive trees.',
  Stars: 'A romantic suite designed for unforgettable evenings under the sky.',
  Olive: 'Our most intimate suite, nestled among ancient olive groves.',
};

const suiteFeatures: Record<string, string> = {
  Jasmin: 'Garden view',
  Lotus: 'Private balcony',
  SunBeam: 'Sea-facing windows',
  Sand: 'Ground-floor terrace',
  Coral: 'Garden view',
  Pearl: 'Sea view',
  Waves: 'Panoramic sea view',
  Shell: 'Private patio',
  Anemone: 'Suite with terrace',
  Flower: 'Garden view',
  Grapes: 'Vineyard-inspired',
  'Water Lily': 'Pool view',
  Poppy: 'Mediterranean view',
  Pebbles: 'Courtyard access',
  Branches: 'Private garden',
  Stars: 'Rooftop terrace',
  Olive: 'Olive grove view',
};

function getSuiteImage(index: number): string {
  return suiteImages.deluxe[index % suiteImages.deluxe.length];
}

function getSuiteGallery(index: number): string[] {
  return [
    suiteImages.deluxe[index % suiteImages.deluxe.length],
    suiteImages.bathroom[index % suiteImages.bathroom.length],
    suiteImages.deluxe[(index + 3) % suiteImages.deluxe.length],
    suiteImages.bathroom[(index + 1) % suiteImages.bathroom.length],
  ];
}

export const suiteCategories: SuiteCategory[] = [
  {
    id: 'deluxe',
    name: 'Deluxe Suites',
    description: 'Elegant retreats with warm Mediterranean character and garden views.',
    image: 'https://images.pexels.com/photos/8082217/pexels-photo-8082217.jpeg?auto=compress&cs=tinysrgb&w=1200',
    suites: ['Jasmin', 'Lotus', 'SunBeam', 'Sand'].map((name, i) => ({
      name,
      category: 'Deluxe Suites',
      description: suiteDescriptions[name],
      feature: suiteFeatures[name],
      image: getSuiteImage(i),
      gallery: getSuiteGallery(i),
    })),
  },
  {
    id: 'senior',
    name: 'Senior Suites',
    description: 'Spacious suites with sea views and refined Mediterranean design.',
    image: 'https://images.pexels.com/photos/8134808/pexels-photo-8134808.jpeg?auto=compress&cs=tinysrgb&w=1200',
    suites: ['Coral', 'Pearl', 'Waves', 'Shell', 'Anemone'].map((name, i) => ({
      name,
      category: 'Senior Suites',
      description: suiteDescriptions[name],
      feature: suiteFeatures[name],
      image: getSuiteImage(i + 4),
      gallery: getSuiteGallery(i + 4),
    })),
  },
  {
    id: 'superior',
    name: 'Superior Suites',
    description: 'Beautifully appointed suites with distinctive character and charm.',
    image: 'https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=1200',
    suites: ['Flower', 'Grapes', 'Water Lily', 'Poppy', 'Pebbles'].map((name, i) => ({
      name,
      category: 'Superior Suites',
      description: suiteDescriptions[name],
      feature: suiteFeatures[name],
      image: getSuiteImage(i + 9),
      gallery: getSuiteGallery(i + 9),
    })),
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Suites',
    description: 'Intimate, romantic retreats designed for unforgettable moments.',
    image: 'https://images.pexels.com/photos/17301475/pexels-photo-17301475.jpeg?auto=compress&cs=tinysrgb&w=1200',
    suites: ['Branches', 'Stars', 'Olive'].map((name, i) => ({
      name,
      category: 'Honeymoon Suites',
      description: suiteDescriptions[name],
      feature: suiteFeatures[name],
      image: getSuiteImage(i + 14),
      gallery: getSuiteGallery(i + 14),
    })),
  },
];

export const allSuiteNames = suiteNames;
