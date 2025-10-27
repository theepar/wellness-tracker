"use client";

import CounselingSummary from "../components/CounselingSummary";
import MotivationMessage from "../components/MotivationMessage";
import MoodChart from "../components/MoodChart";
import UpcomingFeatures from "../components/UpcomingFeatures";
import QuickStats from "../components/QuickStats";

// 6. Komponen Halaman Utama (Sudah diperbaiki)
export default function Home() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-16">
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

