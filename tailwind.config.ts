import type { Config } from "tailwindcss";
import { nextui } from '@nextui-org/react';
import twTypography from '@tailwindcss/typography';

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    twTypography(),
    nextui()
  ],
} satisfies Config;
