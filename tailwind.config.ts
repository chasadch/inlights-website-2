import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    extend: {
      colors: {
        gradientDark: "#552DDA",
        gradientLight: "#1D3E80",
        bg: "#050919",
        cards: "#050919",
        footer: "#0D0D1D",
        borderCustom: "rgba(45, 160, 184, 0.15)",
      },
      fontSize: {
        "size-1": ["84px", "110px"],
        "size-2": ["50px", "64px"],
        "size-3": ["20px", "28px"],
        "size-4": ["18px", "26px"],
        "size-5": ["16px", "24px"],
        "size-6": ["14px", "20px"],
        "size-7": ["12px", "24px"],
      },
      spacing: {
        null: "0px",
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
      },
      boxShadow: {
        shadowCustom: "0px 0px 30px rgba(26, 54, 163, 0.8)",
      },
      maxWidth: {
        container: "1440px",
      },
      gridTemplateColumns: {
        custom: "repeat(4, 1fr)",
      },
      margin: {
        custom: "70px",
      },
      gap: {
        custom: "24px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    fontFamily: {
      sans: ["Manrope", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
