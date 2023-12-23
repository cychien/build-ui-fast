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
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      gray: colors.gray,
      error: colors.red,
      success: colors.green,
      primary: {
        50: "#eff8ff",
        100: "#d1e9ff",
        200: "#b2ddff",
        300: "#84caff",
        400: "#53b1fd",
        500: "#2e90fa",
        600: "#1570ef",
        700: "#175cd3",
        800: "#1849a9",
        900: "#194185",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animationTimingFunction: {
        "slider-in": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
} satisfies Config;
