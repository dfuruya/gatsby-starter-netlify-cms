import Typography from "typography";

const opts = {
    baseFontSize: "18px",
    baseLineHeight: 1.45,
    headerFontFamily: ["Playfair Display", "serif"],
    bodyFontFamily: ["Roboto", "sans-serif"],
};

const typography = new Typography(opts);

// insert styles directly into the <head>
typography.injectStyles();

export default typography;
