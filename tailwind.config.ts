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
      gray: colors.slate,
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
