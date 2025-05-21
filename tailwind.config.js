/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#343433',
          light: '#636260',
        },
        accent: {
          DEFAULT: '#3B82F6',  // Primary blue
          light: '#60A5FA',    // Lighter blue
          dark: '#1D4ED8',     // Darker blue
        },
        success: {
          DEFAULT: '#10B981',
          light: '#D1FAE5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 14px rgba(0, 0, 0, 0.05)',
        'medium': '0 6px 24px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [],
};