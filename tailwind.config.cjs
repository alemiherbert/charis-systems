import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        // Brutalist palette
        cornflower: {
          DEFAULT: '#6495ED',
          50: '#F0F5FD',
          100: '#E1EBFB',
          200: '#C3D7F7',
          300: '#A5C3F3',
          400: '#87AFEF',
          500: '#6495ED',
          600: '#3A75E8',
          700: '#1A5AD4',
          800: '#1447A3',
          900: '#0E3372',
        },
        seagreen: {
          DEFAULT: '#8FBC8F',
          50: '#F4F8F4',
          100: '#E9F1E9',
          200: '#D3E3D3',
          300: '#BDD5BD',
          400: '#A7C7A7',
          500: '#8FBC8F',
          600: '#6FA86F',
          700: '#558955',
          800: '#3F663F',
          900: '#2A442A',
        },
        coral: {
          DEFAULT: '#FA8072',
          50: '#FEF5F4',
          100: '#FDEBE9',
          200: '#FCD7D3',
          300: '#FBC3BD',
          400: '#FAAFA7',
          500: '#FA8072',
          600: '#F85040',
          700: '#E62D1A',
          800: '#B42315',
          900: '#82190F',
        },
        charcoal: {
          DEFAULT: '#36454F',
          50: '#E8EBED',
          100: '#D1D7DB',
          200: '#A3AFB7',
          300: '#758793',
          400: '#4D5F6B',
          500: '#36454F',
          600: '#2B373F',
          700: '#20292F',
          800: '#151B1F',
          900: '#0A0D0F',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },
      // Brutalist: No border radius
      borderRadius: {
        none: '0',
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '0',
      },
      animation: {
        fade: 'fadeInUp 1s both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
