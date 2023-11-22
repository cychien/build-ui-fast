import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "2rem",
      },
    },
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      slate: colors.slate,
      sky: colors.sky,
    },
    extend: {
      screens: {
        xl: "1360px",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
