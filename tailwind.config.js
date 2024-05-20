/** @type {import('tailwindcss').Config} */
import tailwindAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Lato: "Lato",
      Roboto: "Roboto",
      Mont: "Montserrat"
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        'xs': '500px',
      },
      colors: {
        // primary: "#5272FF",
        // background: "#e2e8f0",
        textPrimary: "#4b5563",
        textSecondary: "#fff",
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        background: "hsl(var(--background))",
        backgroundInverted: "hsl(var(--background-inverted))",
        // prime: "hsl(var(--text-prime))",
        // tertiary: "hsl(var(--tertiary))",
        overlay: "hsla(var(--overlay))",
        gradient: {
          first: "hsla(var(--gradient-first))",
          second: "hsla(var(--gradient-second))",
          third: "hsla(var(--gradient-third))",
        },
        card: "hsl(var(--card))",
        base: "hsl(var(--text-base))",
        muted: "hsl(var(--text-muted))",
        inverted: "hsl(var(--text-inverted))",
        shadow: "hsl(var(--shadow))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(130deg, #5e17eb 0%, #5e1788 30%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "scale": {
          '0%, 100%': { padding: '0px' },
          '50%': { padding: '10px' },
        },
        "go-down": {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        "move-bg": {
          '0%, 100%': { objectPosition: 'top' },
          '50%': { objectPosition: 'bottom' },
        },
        "rotate": {
          to: {
            transform: "rotate(360deg)"
          }
        },

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scale": 'scale 1s ease-in-out infinite',
        "go-down": 'go-down 2s ease-in-out infinite',
        "move-bg": 'move-bg 10s ease-in-out infinite',
        "move-bg": 'move-bg 10s ease-in-out infinite',
        "rotate": 'rotate 5s linear infinite',
      },
    },
  },
  plugins: [tailwindAnimate, typography],
};
