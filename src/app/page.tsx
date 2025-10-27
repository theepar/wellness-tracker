import Image from "next/image";

export default function Home() {
  // WAJIB: Tandai sebagai Client Component karena kita menggunakan hooks (useState, useEffect)
  "use client";

  // --- IMPORTS ---
  import React, { useState, useEffect } from 'react';

  // Impor data dummy
  import { counselingSessions, motivationMessages, moodData } from '../utils/dummyData';

  // Impor untuk Chart.js
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
  } from 'chart.js';

  // --- PENDAFTARAN CHART.JS ---
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  // Komponen 1: Ringkasan Sesi Konseling
  const CounselingSummary: React.FC = () => {
    const totalSessions = counselingSessions.length;
    const lastSession = counselingSessions[totalSessions - 1];

    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-emergencyy-text-dark mb-4">Ringkasan Sesi Konseling</h3>
        <p className="text-emergencyy-text-light mb-2">Total Sesi: <span className="font-bold">{totalSessions}</span></p>
        {lastSession && (
          <p className="text-emergencyy-text-light">Sesi Terakhir: <span className="font-semibold">{lastSession.date}</span> tentang <span className="italic">"{lastSession.topic}"</span></p>
        )}
        <button className="mt-4 px-4 py-2 bg-emergencyy-dark-blue text-white rounded-md hover:bg-opacity-90 transition-colors duration-300">Lihat Semua Sesi</button>
      </div>
    );
  };

  // Komponen 2: Pesan Motivasi Harian
  const MotivationMessage: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * motivationMessages.length);
      setMessage(motivationMessages[randomIndex]);
    }, []);

    const getNewMessage = () => {
      let newIndex = Math.floor(Math.random() * motivationMessages.length);
      while (motivationMessages[newIndex] === message) {
        newIndex = Math.floor(Math.random() * motivationMessages.length);
      }
      setMessage(motivationMessages[newIndex]);
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center min-h-[150px]">
        <h3 className="text-xl font-semibold text-emergencyy-text-dark mb-3">Pesan Motivasi Harian</h3>
        <p className="text-emergencyy-text-light italic text-lg mb-4">"{message}"</p>
        <button
          onClick={getNewMessage}
          className="px-4 py-2 bg-emergencyy-medium-blue text-white rounded-md hover:bg-emergencyy-dark-blue transition-colors duration-300"
        >
          Dapatkan Pesan Baru
        </button>
      </div>
    );
  };

  // Komponen 3: Grafik Perubahan Mood
  const MoodChart: React.FC = () => {
    const options: ChartOptions<'line'> = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        title: {
          display: false,
          text: 'Perubahan Mood Seiring Waktu',
        },
      },
      scales: {
        y: {
          min: 1,
          max: 10,
          ticks: {
            stepSize: 1
          }
        }
      }
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-emergencyy-text-dark mb-4">Grafik Perubahan Mood</h3>
        <Line data={moodData} options={options} />
      </div>
    );
  };

  // --- HALAMAN UTAMA (Default Export) ---
  export default function Home() {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CounselingSummary />
          <MoodChart />
          <MotivationMessage />
        </div>

        <section className="mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-emergencyy-text-dark mb-4">Fitur Mendatang</h2>
          <ul className="list-disc list-inside text-emergencyy-text-light">
            <li>Integrasi dengan sensor kesehatan</li>
            <li>Jurnal harian</li>
            <li>Pengaturan tujuan wellness</li>
          </ul>
        </section>
      </>
    );
  }
  );
}
