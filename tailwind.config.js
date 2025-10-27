/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Definisikan palet warna "menenangkan" kita
                'brand-light-bg': '#F8FAFC',    // Latar belakang body (sangat terang, off-white)
                'brand-surface': '#FFFFFF',      // Latar belakang kartu (putih bersih)
                'brand-blue': '#007ACC',        // Aksen utama (dari emergencyy-dark-blue)
                'brand-blue-light': '#EBF8FF',  // Latar belakang aksen (biru sangat muda)
                'brand-green-light': '#F0FFF4', // Aksen untuk motivasi (hijau muda)
                'brand-green': '#38A169',      // Teks aksen motivasi

                // Palet Teks yang Lebih Lembut
                'text-primary': '#1E293B',    // Untuk Judul (Slate 800)
                'text-secondary': '#475569',  // Untuk Teks Isi (Slate 600)
                'text-tertiary': '#94A3B8',   // Untuk Teks Muted (Slate 400)
            },
        },
    },
    plugins: [],
};
