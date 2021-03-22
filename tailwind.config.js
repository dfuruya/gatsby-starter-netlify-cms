module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx,html}'],  // tree-shake unused styles in prod builds
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
