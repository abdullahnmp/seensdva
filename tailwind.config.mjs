/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens:{
        "min-447":{"min":"447px"},
        "min-950":{"min":"950px"},
        "max-726":{"max":"726px"},
        'max-677':{"max":"677px"},
        "max-800":{"max":"800px"},
        "max-900":{"max":"900px"},
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
    }
    },
  },
  plugins: [],
};
