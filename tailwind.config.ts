import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontSize: {
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px",
    },
    colors: {
      white: "#fff",
      "b-orange": "#FD5C17",
      "b-blue": "#0E94D8",
      "b-yellow": "#FFE224",
      "b-navy": "#0A244E",
      "b-navy-25": "#8FB4F1",
      "b-navy-100": "#7497D0",
      "b-navy-200": "#6789C0",
      "b-navy-400": "#6789C0",
      "b-navy-500": "#25416F",
      transparent: "transparent",

      //   'creamy-yellow': "#F5F5DC",
      //   'mustard-yellow': "#FFB000",
      //   peach: "#FFCF9D",
      //   white: '#fff'
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        baybayin: ["Baybayin", "sans-serif"],
        buhid: ["Buhid", "sans-serif"],
        tagbanwa: ["Tagbanwa", "sans-serif"],
        hanunoo: ["Hanunoo", "sans-serif"],
      },
    },
  },

  darkMode: "class",
  plugins: [require("@tailwindcss/typography"),  nextui({
    themes: {
      light: {
        colors: {
          background: "#FFFFFF", // or DEFAULT
          foreground: "#11181C", // or 50 to 900 DEFAULT
         default: {
         
          200: "#0E94D8",
          DEFAULT: "#0A244E",
          foreground: "#FFF",
         },
          primary: {
            //... 50 to 900
            50:"#000",
            100: "#FD5C17",
            200: "#000",
            300: "#000",
            400: "#000",

            foreground: "#FD5C17",
            DEFAULT: "#FFF",
          },
          secondary: {
            //... 50 to 90
            100: "#FFE224",
            foreground: "#0A244E",
            DEFAULT: "#FFE224",
          },

          warning: {
            //... 50 to 90
            100: "#FFE224",
            foreground: "#0A244E",
            DEFAULT: "#FFE224",
          },
          // ... rest of the colors
        },
      },
      dark: {
        colors: {
          background: "#000000", // or DEFAULT
          foreground: "#ECEDEE", // or 50 to 900 DEFAULT
          primary: {
            //... 50 to 900
            foreground: "#FFFFFF",
            DEFAULT: "#006FEE",
          },
        },
        // ... rest of the colors
      },
      mytheme: {
        // custom theme
        extend: "dark",
        colors: {
          primary: {
            DEFAULT: "#BEF264",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
    },
  }),],
};
export default config;
