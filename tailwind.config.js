/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green100: '#DCFCE7',
        green200: '#BBF7D0',
        green300: '#86EFAC',
        green400: '#4ADE80',
        green500: '#22C55E',
        green600: '#16A34A',
        green700: '#15803D',
        green800: '#166534',
        green900: '#14532D',
        gray200: '#e5e7eb',
        gray300: '#d1d5db',
        gray400: '#9ca3af',
        gray500: '#6b7280',
        gray600: '#4b5563',
        gray700: '#374151',
        gray800: '#1f2937',
        gray900: '#111827',
      },
    },
  },
  plugins: [],
}