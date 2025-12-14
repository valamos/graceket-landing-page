import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      colors: {
        "grace-cream": "#f8f3ed",
        "grace-sand": "#e8dfd5",
        "grace-rose": "#e1c0b8",
        "grace-forest": "#2e6a57",
        "grace-ink": "#142021",
      },
      boxShadow: {
        soft: "0 10px 40px rgba(0,0,0,0.08)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(225,192,184,0.35), transparent 40%), radial-gradient(circle at 80% 0%, rgba(46,106,87,0.25), transparent 35%), linear-gradient(135deg, #fdf8f3 0%, #f5eee7 100%)",
        "card-gradient": "linear-gradient(135deg, rgba(225,192,184,0.12), rgba(46,106,87,0.08))",
      },
    },
  },
  plugins: [],
};

export default config;
