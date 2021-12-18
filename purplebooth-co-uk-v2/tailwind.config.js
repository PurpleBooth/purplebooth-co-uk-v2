const preBackground = {
  pre: {
    'background-color': "rgb(40, 42, 54)",
  },
}

module.exports = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: preBackground },
        sm: { css: preBackground },
        lg: { css: preBackground },
        xl: { css: preBackground },
        '2xl': { css: preBackground },
      }
    },

    fontFamily: {
      sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
      serif: ["Space Grotesk", "ui-serif", "Georgia"],
      mono: ["Iosevka", "ui-monospace", "SFMono-Regular"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
