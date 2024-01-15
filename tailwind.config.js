/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "540px",
          md: "720px",
          lg: "960px",
          xl: "1220px",
          "2xl": "1220px",
        },
      },
      fontFamily: {
        belwel: ["belwelLight", "sans-serif"],
        belwelBold: ["belwelBold", "sans-serif"],
        avenir: ["avenir", "sans-serif"],
      },
      colors: {
        primary_bg: "#F4ECDC",
        primary_text: "#48521F",
        footer_bg: "#DBCDB1",
        footer_text: "#6C513C",
      },
      padding: {
        primary: "100px",
        primaryForMb: "50px",
      },
    },
  },
  plugins: [],
};
