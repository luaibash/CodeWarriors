/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: { 
    extend: {imagePixelated: {imageRendering: 'pixelated'}}
  },
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        'VT323': ['"VT323"'],
      },
    },
  },
}
