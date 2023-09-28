/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image-mobile": "url('/resources/assets/home/mobile/image-header.jpg')",
        "hero-image-tablet": "url('/resources/assets/home/tablet/image-header.jpg')",
        "hero-image-desktop": "url('/resources/assets/home/desktop/image-hero.jpg')",
        "product2-bg":"url('/resources/assets/home/desktop/image-speaker-zx7.jpg')",
        "circlesPattern": "url('/resources/assets/home/desktop/pattern-circles.svg')"
      },
      fontFamily: {
        "manrope": ["Manrope"]
      }
    },
  },
  plugins: [],
};
