/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0A84FF',
          indigo: '#5E5CE6',
          accent: '#1A6FFF',
        },
        ink: {
          DEFAULT: '#0B0F19',
          soft: '#1A1F2E',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Display"',
          'system-ui',
          'Inter',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0A84FF 0%, #5E5CE6 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(10,132,255,0.08) 0%, rgba(94,92,230,0.08) 100%)',
      },
      animation: {
        'rise-fall': 'riseFall 2.4s ease-in-out infinite',
        'tick': 'tick 2.4s steps(1, end) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        riseFall: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        tick: {
          '0%, 49.9%': { content: '"7"' },
          '50%, 100%': { content: '"8"' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
