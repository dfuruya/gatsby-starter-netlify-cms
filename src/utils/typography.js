import Typography from "typography";

const opts = {
    baseFontSize: "18px",
    baseLineHeight: 1.45,
    headerFontFamily: ["Noto Serif TC", "serif"],
    bodyFontFamily: ["Noto Sans TC", "sans-serif"],
};

const typography = new Typography(opts);

// insert styles directly into the <head>
typography.injectStyles();

export default typography;
