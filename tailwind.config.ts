import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // Next.js app router with 'src' directory
  theme: {
    extend: {
      colors: {
        // Brand Gradient
        gradientDark: "#552DDA",
        gradientLight: "#1D3E80",
        // Black Colors
        bg: "#050919",
        cards: "#050919",
        footer: "#0D0D1D",
        borderCustom: "rgba(45, 160, 184, 0.15)",
      },
      fontSize: {
        // Typography sizes from the design
        "size-1": ["84px", "110px"], // Font Size, Line Height
        "size-2": ["50px", "64px"],
        "size-3": ["20px", "28px"],
        "size-4": ["18px", "26px"],
        "size-5": ["16px", "24px"],
        "size-6": ["14px", "20px"],
        "size-7": ["12px", "24px"],
      },
      spacing: {
        // Spacing from the design
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
        custom: "0px 0px 30px rgba(26, 54, 163, 0.8)",
      },
      maxWidth: {
        container: "1440px",
      },
      gridTemplateColumns: {
        // Grid structure
        custom: "repeat(4, 1fr)", // 4 Columns
      },
      margin: {
        // Grid margin
        custom: "70px",
      },
      gap: {
        // Grid gutter
        custom: "24px",
      },
    },
    fontFamily: {
      sans: ["Manrope", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
