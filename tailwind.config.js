/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#06102A',
          900: '#0D1B4B',
          800: '#152260',
          700: '#1D2D7A',
          600: '#243592',
        },
        brand: {
          blue: '#1A6FE0',
          'blue-light': '#3B8FF5',
          'blue-dark': '#1254B8',
          'blue-vivid': '#0A5ED4',
          silver: '#C4CDD8',
          'silver-light': '#DDE4EC',
          'silver-dark': '#8E9BAD',
          gold: '#C9A040',
          'gold-light': '#D4B558',
          'gold-dark': '#A8832E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'silver-gradient': 'linear-gradient(135deg, #E2E8F0 0%, #C4CDD8 40%, #A8B4C4 60%, #DDE4EC 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4B558 0%, #C9A040 50%, #A8832E 100%)',
        'navy-gradient': 'linear-gradient(135deg, #06102A 0%, #0D1B4B 50%, #152260 100%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(26, 111, 224, 0.3)',
        'glow-gold': '0 0 30px rgba(201, 160, 64, 0.25)',
        'glow-silver': '0 0 30px rgba(196, 205, 216, 0.3)',
        card: '0 4px 24px rgba(13, 27, 75, 0.08)',
        'card-hover': '0 20px 48px rgba(13, 27, 75, 0.16)',
        'logo': '0 8px 32px rgba(13, 27, 75, 0.4)',
      },
    },
  },
  plugins: [],
}
