import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        button: {
          "text-primary": "hsl(var(--button-text-primary))",
          "text-primary-inverse": "hsl(var(--button-text-primary-inverse))",
          "text-disabled": "hsl(var(--button-text-disabled))",
          "text-primary-inverse-hover": "hsl(var(--button-text-primary-inverse-hover))",
        },
        success: {
          100: "#E8FCE8",
          200: "#B0EEB0",
          300: "#6CCC6D",
          400: "#34AD48",
          500: "#0A8930",
          600: "#097228",
          700: "#056121",
          800: "#034516",
          900: "#013202",
        },
        warning: {
          100: "#FCF4E8",
          200: "#FAE5C6",
          300: "#FFBE66",
          400: "#FFAA38",
          500: "#FF9200",
          600: "#E57906",
          700: "#CA6902",
          800: "#994F00",
          900: "#663500",
        },
        error: {
          100: "#FCE8E9",
          200: "#FFB3B5",
          300: "#FF6669",
          400: "#FB505B",
          500: "#E3273F",
          600: "#C51B31",
          700: "#9D0C1F",
          800: "#710513",
          900: "#4E030D",
        },
        knowledge: {
          100: "#D9EBFC",
          200: "#A0CCF8",
          300: "#61AAF2",
          400: "#1D8BE2",
          500: "#0378D4",
          600: "#0566B3",
          700: "#034F8C",
          800: "#003966",
          900: "#00223D",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "xx-sm": "0 1px 3px 1px rgba(0, 0, 0, 0.15)",
        "xs": "0 2px 6px 2px rgba(0, 0, 0, 0.15)",
        "sm": "0 4px 8px 3px rgba(0, 0, 0, 0.15)",
        "md": "0 6px 10px 4px rgba(0, 0, 0, 0.15)",
        "lg": "0 8px 12px 5px rgba(0, 0, 0, 0.15)",
        "xl": "0 10px 14px 6px rgba(0, 0, 0, 0.15)",
        "2xl": "0 12px 16px 7px rgba(0, 0, 0, 0.15)",
        "3xl": "0 14px 18px 8px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
