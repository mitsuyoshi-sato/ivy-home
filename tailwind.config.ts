import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['col-span-3', 'col-span-5', 'col-span-6', 'col-span-7'],
  theme: {
    extend: {
      colors: {
        light1: '#f8f9fa',
        light: '#e9ecef',
        dark2: '#1f2024',
        ivy1: 'hsl(151.05,67.86%,75%)',
        ivy2: 'hsl(151.05,67.86%,60%)',
        ivy3: 'hsl(151.05,67.86%,45%)',
        ivy4: 'hsl(151.05,67.86%,30%)',
        ivy5: 'hsl(151.05,67.86%,15%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
