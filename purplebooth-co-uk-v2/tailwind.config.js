const disabledCss = {
  pre: {
    'background-color': "rgb(40, 42, 54)",
  },
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: { css: disabledCss },
        sm: { css: disabledCss },
        lg: { css: disabledCss },
        xl: { css: disabledCss },
        '2xl': { css: disabledCss },
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
