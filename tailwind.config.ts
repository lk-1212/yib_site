import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        custom: ['"Genty"', 'sans-serif'],
      },
      backgroundImage: {
        'about-background': "url('/images/podcasters_img.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
