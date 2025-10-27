"use client";

import CounselingSummary from "../components/CounselingSummary";
import MotivationMessage from "../components/MotivationMessage";
import MoodChart from "../components/MoodChart";
import UpcomingFeatures from "../components/UpcomingFeatures";
import QuickStats from "../components/QuickStats";
import { useEffect, useState } from "react";
import Toast from "../components/Toast";
import { useRouter } from "next/navigation";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomMoodData() {
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"];
  return months.map(month => ({ month, mood: getRandomInt(6, 9) }));
}
function getMoodAverage(moodData: { month: string; mood: number }[]) {
  return moodData.reduce((acc, cur) => acc + cur.mood, 0) / moodData.length;
}

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const router = useRouter();
  const [sessionCount, setSessionCount] = useState(4);
  const [lastSession, setLastSession] = useState("Improving Sleep");
  const [lastDate, setLastDate] = useState("2023-04-05");
  const [moodData, setMoodData] = useState(getRandomMoodData());
  const moodAverage = getMoodAverage(moodData);

  useEffect(() => {
    // Redirect login jika belum login
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn && window.location.pathname !== "/login") {
        router.push("/login");
        return;
      }
    }
    // Simulasi update data dummy setelah login
    setTimeout(() => {
      // Randomize data
      setSessionCount(getRandomInt(1, 10));
      setLastSession(["Improving Sleep", "Healthy Eating", "Stress Relief", "Mindfulness", "Workout", "Yoga", "Therapy"][getRandomInt(0, 6)]);
      setLastDate(`2023-0${getRandomInt(1, 9)}-${getRandomInt(10, 28)}`);
      setMoodData(getRandomMoodData());
      setShowToast(true);
    }, 1000);
  }, [router]);

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Toast message="Data berhasil diperbarui!" show={showToast} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 lg:py-16">
        <QuickStats sessionCount={sessionCount} moodAverage={moodAverage} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <MoodChart moodData={moodData} />
            <UpcomingFeatures />
          </div>
          <div className="space-y-6 md:space-y-8">
            <CounselingSummary sessionCount={sessionCount} lastSession={lastSession} lastDate={lastDate} />
            <MotivationMessage />
          </div>
        </div>
      </div>
    </div>
  );
}

