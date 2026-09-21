/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#faf8f4',
        sand: '#e8ddd0',
        limestone: '#ddd0c0',
        beige: '#d4c5b3',
        taupe: '#a89682',
        'warm-taupe': '#8a7866',
        olive: '#7a7460',
        'muted-olive': '#6b6655',
        charcoal: '#2b2825',
        'deep-charcoal': '#1a1816',
        champagne: '#c4a87a',
        gold: '#b8946a',
        'warm-white': '#fdfbf7',
        'soft-beige': '#f0e8dc',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'wide-2': '0.15em',
        'wide-3': '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
