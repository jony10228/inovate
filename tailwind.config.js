/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#EEF1F8',
          100: '#D5DCF0',
          200: '#A8B8E0',
          300: '#7A93D0',
          400: '#4D6FC0',
          500: '#2A4B9F',
          600: '#1F3A80',
          700: '#162C60',
          800: '#0F1E40',
          900: '#091225',
          950: '#060B18',
        },
        brand: {
          DEFAULT: '#1A2A4F',
          light: '#243A6B',
          dark: '#0F1A30',
        },
        gold: {
          DEFAULT: '#C9A24B',
          light: '#D9BC7E',
          dark: '#A07A28',
        },
        surface: {
          white: '#FFFFFF',
          offwhite: '#FAFAFA',
          mist: '#F4F5F7',
          light: '#EEF0F4',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Sora', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '8xl': ['6rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
        '9xl': ['8rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      animation: {
        'noise': 'noise 0.5s steps(2) infinite',
      },
      keyframes: {
        noise: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '20%': { transform: 'translate(2%, 2%)' },
          '30%': { transform: 'translate(-1%, 3%)' },
          '40%': { transform: 'translate(1%, -2%)' },
          '50%': { transform: 'translate(-2%, 1%)' },
          '60%': { transform: 'translate(2%, -1%)' },
          '70%': { transform: 'translate(-1%, 2%)' },
          '80%': { transform: 'translate(1%, 3%)' },
          '90%': { transform: 'translate(-2%, -1%)' },
        },
      },
    },
  },
  plugins: [],
}
