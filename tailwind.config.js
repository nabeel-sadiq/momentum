/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],

  theme: {
    extend: {
      //adding the font to tailwindcss
      fontFamily: {
        brico: ["Bricolage Grotesque", "sans-serif"],
      },
    },
  },

  //daisyui plugin
  plugins: [
    require("daisyui"),
  ],

  //daisyui themes
  daisyui: {
    themes: [
      "light",
      "dark",
      "dracula",
    ],
  },
}

