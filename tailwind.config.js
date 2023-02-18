/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#3949AB",
          secondary: "#ebf4fe",
          "base-100": "#8F90A6",

          "--rounded-btn": "4px",
          "--btn-text-case": "capitalize"
        },
      },
    ]
  }
}
