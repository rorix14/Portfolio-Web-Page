/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'milky-way': '#f8f8fb',
                'tangerine': '#ff6a3d',
                'dark-tangerine': '#ee552e',
                'old-tangerine': '#e04821',
                'midnight': '#1A2238',
                'dark-midnight': '#0f1421',
                'twilight': '#29375b',
                'daffodil': '#f9db6d',
                'lavender': '#9daaf2',
                'iris': '#3b4ca8',
            }
        },
    },
    plugins: [],
}

