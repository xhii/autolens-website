/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'inter': ['Inter', '-apple-system', 'sans-serif'],
      },
      colors: {
        'ink': 'var(--ink)',
        'paper': 'var(--paper)',
        'rust': 'var(--rust)',
        'ocean': 'var(--ocean)',
        'fog': 'var(--fog)',
        'sand': 'var(--sand)',
        'mint': 'var(--mint)',
        'sunset': 'var(--sunset)',
      },
    },
  },
  plugins: [],
}
