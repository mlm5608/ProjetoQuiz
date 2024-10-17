/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["droid-sans", "sans-serif"],
      tit: ["titilium-web", "sans-serif"]
    },
    extend: {
      colors: {
        primary : {
          blue: "#2C7CDB",
          watergreen: "#D3FAFF",
          darkblue: "#002F6C"
        },
        complementary: {
          green: "#31727A",
        }
      }
    },
    
  },
  plugins: [],
}

