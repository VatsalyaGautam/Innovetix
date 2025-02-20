/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideInLeft: "slideInLeft 0.69s ease-out",
        slideInRight: "slideInRight 0.69s ease-out",
        slideInTop: "slideInTop 0.69s ease-out",
        slideInBottom: "slideInBottom 0.69s ease-out",
        fadeIn: "fadeIn 0.69s linear",
        slideInLeftOnebyOne:
          "slideInLeft 0.8s cubic-bezier(0.25, 0.75, 0.3, 1) forwards",
        slideInRightOneByOne:
          "slideInRight 0.8s cubic-bezier(0.25, 0.75, 0.3, 1) forwards",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      const sizes = [
        "xs",
        "sm",
        "base",
        "lg",
        "xl",
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
        "8xl",
        "9xl",
      ];

      const responsiveText = {};

      sizes.forEach((size, index) => {
        if (index === 0) return;

        const prevSize = sizes[index - 1];
        const prevPrevSize = sizes[index - 2] || "xs";

        responsiveText[`.text-${size}`] = {
          fontSize: `${theme(`fontSize.${size}`)} !important`, // ✅ Ensure higher specificity
          [`@media (max-width: ${theme("screens.md")})`]: {
            fontSize: `${theme(`fontSize.${prevSize}`)} !important`,
          },
          [`@media (max-width: ${theme("screens.sm")})`]: {
            fontSize: `${theme(`fontSize.${prevPrevSize}`)} !important`,
          },
        };
      });

      addComponents(responsiveText);
    }),
  ],
 
};