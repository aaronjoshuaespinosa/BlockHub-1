/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito Sans']
      },
      colors: {
        wht: "#F3F3F3",
        pnk: "#F541C4",
        mgnta: "#F32F69",
        tl: "#0BF5C8",
        bl: "#299AEA",
        lgry: "#3F3F3F",
        gry: "#2B2B2B",
        blk: "#171717",
      }
    },
  },
  plugins: [],
}