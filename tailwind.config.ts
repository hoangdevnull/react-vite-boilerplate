import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/@swiss-digital-assets-institute/ui/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        serif: ['var(--font-serif)', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};

export default config;
