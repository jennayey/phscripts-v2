import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        translator: {
       
            primary: "#004225",
            secondary: "#FFB000",
            accent: "#FFCF9D",
            neutral: "#F7F7ED",
            "base-100": "#fff",
            info: "#6ee7b7",
            success: "#a3e635",
            warning: "#f97316",
            error: "#ef4444",
          
        },
      },
    ],
  },

  theme: {
    colors: {
      'neutral-green': "#dde6c5",
      'dark-green': '#0b1a19',
      white: '#fff'
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

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
