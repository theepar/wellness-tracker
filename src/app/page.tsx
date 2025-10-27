
"use client";

import React, { useState, useEffect } from 'react';
import { counselingSessions, motivationMessages, moodData } from '../utils/dummyData';

// --- Impor Ikon ---
import { BookUser, Sparkles, LineChart, Target, CheckCircle } from 'lucide-react';

// --- Impor Chart.js ---
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Filler, // Impor Filler untuk area di bawah garis
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Daftarkan Filler
);

// --- Komponen Kartu yang Didesain Ulang ---

// 1. Ringkasan Sesi Konseling
const CounselingSummary: React.FC = () => {
  const totalSessions = counselingSessions.length;
  const lastSession = counselingSessions[totalSessions - 1];

  return (
    // Kartu baru: rounded-2xl, shadow-lg yang lembut, padding lebih besar
    <div className="bg-brand-surface p-6 rounded-2xl shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300 col-span-1 md:col-span-1">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Ringkasan Sesi</h3>
        <div className="p-2 bg-brand-blue-light rounded-full">
          <BookUser className="w-5 h-5 text-brand-blue" />
        </div>
      </div>

      {/* Statistik Utama */}
      <div className="text-center my-6">
        <p className="text-6xl font-bold text-brand-blue">{totalSessions}</p>
        <p className="text-text-secondary">Total Sesi Selesai</p>
      </div>

      {/* Info Sesi Terakhir */}
      {lastSession && (
        <div className="bg-brand-light-bg p-4 rounded-lg">
          <p className="text-sm text-text-secondary font-medium">Sesi Terakhir:</p>
          <p className="text-sm text-text-primary font-semibold truncate">&quot;{lastSession.topic}&quot;</p>
          <p className="text-xs text-text-tertiary mt-1">{lastSession.date}</p>
        </div>
      )}
      <button className="mt-6 w-full px-4 py-2 bg-brand-blue text-white rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300 shadow-md shadow-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/40">
        Lihat Riwayat Sesi
      </button>
    </div>
  );
};

// 2. Pesan Motivasi Harian
const MotivationMessage: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // Ambil pesan acak saat komponen dimuat
    Promise.resolve().then(() => {
      const randomIndex = Math.floor(Math.random() * motivationMessages.length);
      setMessage(motivationMessages[randomIndex]);
    });
  }, []);

  const getNewMessage = () => {
    let newIndex = Math.floor(Math.random() * motivationMessages.length);
    while (motivationMessages[newIndex] === message) {
      newIndex = Math.floor(Math.random() * motivationMessages.length);
    }
    setMessage(motivationMessages[newIndex]);
  };

  return (
    // Kartu ini menggunakan aksen hijau yang menenangkan
    <div className="bg-brand-green-light p-6 rounded-2xl shadow-lg shadow-green-500/5 hover:shadow-green-500/10 transition-all duration-300 flex flex-col items-center justify-center text-center col-span-1 md:col-span-1">
      <div className="p-2 bg-white rounded-full mb-3">
        <Sparkles className="w-5 h-5 text-brand-green" />
      </div>
      <h3 className="text-lg font-semibold text-brand-green mb-3">Motivasi Harian Anda</h3>

      <p className="text-xl italic text-text-primary font-medium min-h-[100px] flex items-center">
        &quot;{message || "Memuat..."}&quot;
      </p>

      <button
        onClick={getNewMessage}
        className="mt-4 px-5 py-2 bg-white text-brand-green rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-md"
      >
        Pesan Baru
      </button>
    </div>
  );
};

// 3. Grafik Perubahan Mood
const MoodChart: React.FC = () => {
  // Opsi styling baru untuk chart
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Sembunyikan legenda, judul sudah cukup
      },
      title: {
        display: false, // Judul kartu sudah ada
      },
    },
    scales: {
      y: {
        min: 1,
        max: 10,
        ticks: { stepSize: 1, color: '#94A3B8' }, // text-tertiary
        grid: {
          // drawBorder: false, // property tidak valid di Chart.js v4
        },
      },
      x: {
        ticks: { color: '#94A3B8' }, // text-tertiary
        grid: {
          display: false, // Sembunyikan grid vertikal
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Garis melengkung (menenangkan)
        borderColor: '#007ACC', // brand-blue
        borderWidth: 3,
        fill: true,
        backgroundColor: 'rgba(0, 122, 204, 0.1)', // Area di bawah garis
      },
      point: {
        radius: 4,
        backgroundColor: '#007ACC',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        hoverRadius: 6,
      },
    },
  };

  return (
    // Kartu ini mencakup 2 kolom di layar besar untuk memberi ruang bagi grafik
    <div className="bg-brand-surface p-6 rounded-2xl shadow-lg shadow-blue-500/5 hover:shadow-blue-500/10 transition-all duration-300 col-span-1 md:col-span-2 lg:col-span-2">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary">Grafik Perubahan Mood</h3>
        <div className="p-2 bg-brand-blue-light rounded-full">
          <LineChart className="w-5 h-5 text-brand-blue" />
        </div>
      </div>
      {/* Beri tinggi minimum agar grafik terlihat bagus */}
      <div className="h-[250px] md:h-[300px]">
        <Line data={moodData} options={options} />
      </div>
    </div>
  );
};

// --- Halaman Utama ---
export default function Home() {
  return (
    <>
      {/* Grid utama: 
        - Di HP: 1 kolom
        - Di Tablet (md): 2 kolom
        - Di Desktop (lg): 3 kolom
        
        Kita buat MoodChart (2 span) + CounselingSummary (1 span) = 3 kolom
        Lalu Motivasi (1 span) + Fitur Mendatang (2 span) = 3 kolom
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Kolom 1: Grafik Mood (Lebih besar) */}
        <MoodChart />

        {/* Kolom 2: Ringkasan Sesi */}
        <CounselingSummary />

        {/* Kolom 3: Motivasi */}
        <MotivationMessage />

        {/* Kolom 4: Fitur Mendatang (Didesain ulang agar konsisten) */}
        <section className="bg-brand-surface p-6 rounded-2xl shadow-lg shadow-blue-500/5 col-span-1 md:col-span-2">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-brand-light-bg rounded-full mr-3">
              <Target className="w-5 h-5 text-text-secondary" />
            </div>
            <h2 className="text-lg font-semibold text-text-primary">Fitur Mendatang</h2>
          </div>
          <ul className="space-y-3 mt-4">
            <li className="flex items-center text-text-secondary">
              <CheckCircle className="w-4 h-4 text-brand-green mr-2 shrink-0" />
              Integrasi dengan sensor kesehatan (Smartwatch, dll.)
            </li>
            <li className="flex items-center text-text-secondary">
              <CheckCircle className="w-4 h-4 text-brand-green mr-2 shrink-0" />
              Jurnal harian dengan analisis mood otomatis
            </li>
            <li className="flex items-center text-text-secondary">
              <CheckCircle className="w-4 h-4 text-brand-green mr-2 shrink-0" />
              Pengaturan tujuan wellness mingguan
            </li>
          </ul>
        </section>

      </div>
    </>
  );
}
