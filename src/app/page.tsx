"use client";

import { useState } from "react";
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { Heart, BookOpen, Target, CheckCircle2, Sparkles, TrendingUp, Smartphone } from "lucide-react";

// Mock data for mood chart
const moodData = [
  { month: "Jan", mood: 7 },
  { month: "Feb", mood: 6 },
  { month: "Mar", mood: 8 },
  { month: "Apr", mood: 7 },
  { month: "Mei", mood: 9 },
  { month: "Jun", mood: 8 },
];

// Mock motivational quotes
const quotes = [
  { text: "Kamu lebih kuat dari yang kamu kira.", author: "EmergencyyCall" },
  { text: "Setiap hari adalah kesempatan baru untuk tumbuh.", author: "EmergencyyCall" },
  { text: "Kesehatan mental sama pentingnya dengan kesehatan fisik.", author: "EmergencyyCall" },
  { text: "Kamu tidak sendirian dalam perjalanan ini.", author: "EmergencyyCall" },
];

// 1. Komponen Ringkasan Sesi 
function CounselingSummary() {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-2">Ringkasan Sesi</p>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">4</h3>
          <p className="text-sm text-slate-600 mt-1">Total Sesi Selesai</p>
        </div>
        <div className="p-3 bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl">
          <Heart className="w-6 h-6 text-blue-500" />
        </div>
      </div>

      <div className="pt-6 border-t border-slate-100">
        <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Sesi Terakhir</p>
        <p className="text-lg font-semibold text-slate-900 mb-1">“Improving Sleep”</p>
        <p className="text-sm text-slate-600">2023-04-05</p>
      </div>
    </div>
  );
}

// 2. Komponen Pesan Motivasi
function MotivationMessage() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };
  return (
    <div className="rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-amber-100" style={{ background: 'linear-gradient(135deg, #fef9c3 0%, #ffe4e6 100%)' }}>
      <div className="flex items-start justify-between mb-6">
        <div className="p-3 bg-white rounded-2xl shadow-sm">
          <Sparkles className="w-6 h-6 text-amber-500" />
        </div>
      </div>
      <div className="mb-6">
        <p className="text-sm font-medium text-amber-700 mb-3">Motivasi Harian Anda</p>
        <p className="text-lg md:text-xl font-semibold text-slate-900 italic mb-4">“{quotes[currentQuote].text}”</p>
      </div>
      <button
        onClick={nextQuote}
        className="w-full py-3 px-4 bg-white text-amber-600 font-medium rounded-2xl hover:bg-amber-50 transition-all duration-300 hover:scale-[1.02] active:scale-95 border border-amber-200"
      >
        Motivasi Baru
      </button>
    </div>
  );
}

// 3. Komponen Grafik Mood
function MoodChart() {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">Grafik Perubahan Mood</p>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">Tren Mood Anda</h3>
        </div>
        <div className="p-3 bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl">
          <TrendingUp className="w-6 h-6 text-purple-500" />
        </div>
      </div>
      <div className="w-full h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={moodData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorMood" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: "12px" }} />
            <YAxis stroke="#94a3b8" style={{ fontSize: "12px" }} domain={[0, 10]} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              labelStyle={{ color: "#1e293b" }}
            />
            <Area
              type="monotone"
              dataKey="mood"
              stroke="#a78bfa"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorMood)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// 4. Komponen Fitur Mendatang
function UpcomingFeatures() {
  const features = [
    {
      icon: <Smartphone className="w-5 h-5" />,
      title: "Integrasi Sensor Kesehatan",
      description: "Sinkronisasi dengan Smartwatch dan perangkat kesehatan",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Jurnal Harian Otomatis",
      description: "Analisis mood dengan AI secara real-time",
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Tujuan Wellness",
      description: "Atur dan pantau target kesehatan mingguan",
    },
  ];
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900">Fitur Mendatang</h3>
        <p className="text-sm text-slate-600 mt-1">Kami terus berinovasi untuk Anda</p>
      </div>
      <div className="space-y-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
            style={{ background: '#f6f8fc' }}
          >
            {/* PERBAIKAN: Mengganti 'shrink-0' menjadi 'flex-shrink-0' */}
            <div className="p-2 bg-white rounded-xl shadow-sm shrink-0">
              <div className="text-blue-500">{feature.icon}</div>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-slate-900 text-sm md:text-base">{feature.title}</h4>
              <p className="text-xs md:text-sm text-slate-600 mt-1">{feature.description}</p>
            </div>
            {/* PERBAIKAN: Mengganti 'shrink-0' menjadi 'flex-shrink-0' */}
            <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. Komponen Statistik Cepat
function QuickStats() {
  const stats = [
    { label: "Sesi Bulan Ini", value: "4", icon: Heart, color: "from-red-50 to-pink-50", iconColor: "text-red-500" },
    { label: "Mood Rata-rata", value: "7.8", icon: TrendingUp, color: "from-purple-50 to-pink-50", iconColor: "text-purple-500" },
    { label: "Konsistensi", value: "85%", icon: Target, color: "from-blue-50 to-cyan-50", iconColor: "text-blue-500" },
  ];
  const cardGradients = [
    'linear-gradient(135deg, #fee2e2 0%, #fdf2f8 100%)', // pink
    'linear-gradient(135deg, #ede9fe 0%, #f1f5f9 100%)', // purple
    'linear-gradient(135deg, #e0f2fe 0%, #f1f5f9 100%)', // blue
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className={`rounded-2xl p-4 md:p-6 border border-slate-100 hover:shadow-md transition-all duration-300 hover:scale-[1.02]`}
            style={{ background: cardGradients[index] }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs md:text-sm text-slate-600 font-medium mb-1">{stat.label}</p>
                <p className="text-2xl md:text-3xl font-bold text-slate-900">{stat.value}</p>
              </div>
              <div className={`p-3 bg-white rounded-xl shadow-sm ${stat.iconColor}`}>
                <Icon className="w-5 md:w-6 h-6" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// 6. Komponen Halaman Utama (Sudah diperbaiki)
export default function Home() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <QuickStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <MoodChart />
            <UpcomingFeatures />
          </div>
          <div className="space-y-6 md:space-y-8">
            <CounselingSummary />
            <MotivationMessage />
          </div>
        </div>
      </div>
    </div>
  );
}

