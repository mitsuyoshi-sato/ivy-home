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
        dark1: 'hsl(0,0%,40%)',
        dark2: 'hsl(0,0%,35%)',
        dark3: 'hsl(0,0%,30%)',
        dark4: 'hsl(0,0%,20%)',
        dark5: 'hsl(0,0%,9.02%)',
        ivy1: 'hsl(151.05,67.86%,80%)',
        ivy2: 'hsl(151.05,67.86%,70%)',
        ivy3: 'hsl(151.05,67.86%,60%)',
        ivy4: 'hsl(151.05,67.86%,50%)',
        ivy5: 'hsl(151.05,67.86%,40%)',
        ivy6: 'hsl(151.05,67.86%,30%)',
        ivy7: 'hsl(151.05,67.86%,20%)',
        ivy8: 'hsl(151.05,67.86%,10%)',
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
