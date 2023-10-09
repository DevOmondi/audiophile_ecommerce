/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-mobile":
          "url('/public/assets/home/mobile/image-header.jpg')",
        "hero-image-tablet":
          "url('/public/assets/home/tablet/image-header.jpg')",
        "hero-image-desktop":
          "url('/public/assets/home/desktop/image-hero.jpg')",
        "product2-bg":
          "url('/public/assets/home/desktop/image-speaker-zx7.jpg')",
        circlesPattern:
          "url('/public/assets/home/desktop/pattern-circles.svg')",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
