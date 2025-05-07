/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                prestan: "#2A2742",
                seconadary: "#FACC15",
            },
            screens: {
                'xs': '480px',
                '3xl': '1920px',
            },
            spacing: {
                '128': '32rem',
            },
            fontSize: {
                name: '80px'
            }
        },
    },
    plugins: [],
};
