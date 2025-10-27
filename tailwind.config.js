// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the new 'app' directory if you're using Next.js 13+ app router
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'emergencyy-light-blue': '#E0F2F7', // Contoh warna lembut
                'emergencyy-medium-blue': '#B3E0F2',
                'emergencyy-dark-blue': '#007ACC',
                'emergencyy-text-dark': '#333333',
                'emergencyy-text-light': '#555555',
            },
        },
    },
    plugins: [],
}