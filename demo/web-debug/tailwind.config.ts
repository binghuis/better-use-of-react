import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {}
  },
  plugins: [],
  darkMode: ['class', '[data-mode="dark"]']
}
export default config
