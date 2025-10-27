# 🧘‍♂️ Wellness Tracker

A modern, responsive dashboard for tracking wellness, mood, and health goals. Built with Next.js, Tailwind CSS, and Recharts.

---

## 🚀 Framework & Tools

- **Next.js (App Router, TypeScript)**  
  Powerful React framework for scalable web apps, supporting SSR/SSG and modular routing.
- **Tailwind CSS**  
  Utility-first CSS for rapid, consistent, and responsive UI development.
- **Recharts**  
  Flexible charting library for React, used for mood and health data visualization.
- **Lucide React**  
  Beautiful, open-source icon set for a clean and modern look.

---

## 🎨 Fitur & Struktur Komponen

- **Komponen Modular**  
  Setiap fitur utama (statistik, motivasi, fitur mendatang, grafik mood, ringkasan sesi) dipisahkan ke file komponen sendiri di `src/components` untuk kemudahan pengembangan dan maintenance.
- **Responsif di Semua Device**  
  Layout dan komponen dioptimalkan agar nyaman digunakan di mobile, tablet/iPad, dan desktop.
- **Custom Colors & Gradients**  
  Warna pastel dan gradasi disesuaikan dengan branding dan referensi desain user.
- **Best Practice Next.js**  
  Menggunakan App Router, struktur folder modern, dan TypeScript untuk keamanan dan skalabilitas.
- **Data Dummy Dinamis**  
  Data dashboard diacak setiap login, siap diintegrasikan dengan backend/API.
- **Login & Logout**  
  Terdapat halaman login, fitur logout, dan proteksi akses dashboard. Username yang diinput akan tampil di header setelah login.
- **Dropdown & Pointer Effect**  
  Menu dropdown untuk logout, efek pointer pada logo, dan refresh dashboard dengan klik logo.
- **Motivasi Harian dengan Animasi**  
  Teks motivasi harian memiliki animasi blur & fade saat tombol motivasi baru diklik, serta menampilkan author.
- **Toast Notifikasi**  
  Notifikasi toast muncul saat data diupdate.

---

## 🔗 Rencana Integrasi Backend

- **Tahap Selanjutnya:**
  - Data sesi, mood, motivasi, dan fitur akan diambil dari backend (API REST).
  - Autentikasi user dan sinkronisasi data kesehatan dengan perangkat (misal smartwatch) akan diintegrasikan.
  - Backend dapat menggunakan Node.js/Express, atau platform lain sesuai kebutuhan.
  - Komponen sudah disiapkan untuk menerima props/data dari API agar integrasi lebih mudah.

---

## 📝 Cara Menjalankan Project

1. **Clone repository**
   ```bash
   git clone https://github.com/theepar/wellness-tracker.git
   cd wellness-tracker
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Jalankan development server**
   ```bash
   npm run dev
   ```
4. **Akses aplikasi di browser**
   - Buka [http://localhost:3000](http://localhost:3000)
   - Login dengan username dan password apa saja (dummy)
   - Username yang diinput akan tampil di header setelah login
   - Dashboard akan tampil dengan data random setiap login

---

## 🛠️ Catatan Pengembangan

- Username disimpan di localStorage dengan key `username` saat login, dan diambil otomatis di header.
- Untuk menambah motivasi baru, edit array di `MotivationMessage.tsx`.
- Untuk menambah warna chart, edit variabel di `globals.css`.
- Jika ingin integrasi API, cukup ganti data dummy di komponen utama dengan data dari backend.
- Jika terjadi error saat build/dev, pastikan semua dependency sudah terinstall dan versi Node.js sesuai rekomendasi Next.js.

---

## 👤 Kontributor

- theepar (Owner)

---

Untuk pertanyaan, saran, atau pengembangan lebih lanjut, silakan hubungi pengembang melalui GitHub.

