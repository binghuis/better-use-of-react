import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,jsx,ts,tsx,md,mdx}', './components/**/*.{js,jsx,ts,tsx,md,mdx}', './theme.config.tsx'],
  theme: {
    extend: {}
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]']
}
export default config
