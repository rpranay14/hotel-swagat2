/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize:{
      'custom':['42px','1.238em'],
      xs: ['13px', '19px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      x2l:['28px', '36px'],
      x3l:['32px', '40px'],
      x4l:['36px', '44px'],
      x5l:['40px', '48px'],
      x6l:['44px', '52px'],
      x7l:['48px', '56px'],
      x8l:['52px', '60px'],
      x9l:['56px', '64px'],
      xtra:['78px', '86px'],
      
    },
    fontFamily: {
      'sans': ['Lora', 'sans-serif'],
      'serif': ['Lora', 'serif'],
      'mono': ['Lora', 'monospace'],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
