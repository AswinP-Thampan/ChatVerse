/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        gR: ['Glimer-Regular', 'sans-serif'],
        // gM: ['Glimer-Medium', 'sans-serif'],
        // gH: ['Glimer-Heavy', 'sans-serif'],
        // gB: ['Glimer-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
