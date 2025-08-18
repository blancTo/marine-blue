/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean': {
          50: '#f8fbff',
          100: '#e6f2f8',
          200: '#d1e8f3',
          300: '#a4c9da',
          400: '#7bb3d3',
          500: '#5a9cc7',
          600: '#3e7fa5',
          700: '#2f6183',
          800: '#264e68',
          900: '#1e3d52',
        },
        'powder': {
          50: '#fafcfd',
          100: '#f0f6f9',
          200: '#e6f2f8',
          300: '#d9ecf5',
          400: '#c8e1ef',
          500: '#b3d4e6',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      lineHeight: {
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(62, 127, 165, 0.08)',
        'soft-lg': '0 4px 16px rgba(62, 127, 165, 0.12)',
        'natural': '0 1px 3px rgba(62, 127, 165, 0.05)',
      }
    },
  },
  plugins: [],
}