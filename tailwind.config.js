// tailwind.config.js

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                slideDown: {
                    "0%": { transform: "translateY(-100%)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                "dot-bounce-scale": {
                    "0%, 100%": { transform: "scale(0)" },
                    "50%": { transform: "scale(1)" },
                },
                "dot-bounce": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-10px)" },
                },
            },
            animation: {
                "slide-down": "slideDown 0.7s ease-in-out",
                "dot-bounce-scale": "dot-bounce-scale 1.5s infinite ease-in-out",
                "dot-bounce": "dot-bounce 1.5s infinite ease-in-out",
            },
        },
    },
    plugins: [],
};
