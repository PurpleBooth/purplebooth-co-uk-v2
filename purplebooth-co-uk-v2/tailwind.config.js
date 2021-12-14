module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      sans: ["IBM Plex Sans", "ui-sans-serif", "system-ui"],
      serif: ["Space Grotesk", "ui-serif", "Georgia"],
      mono: ["Iosevka", "ui-monospace", "SFMono-Regular"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
