"use client";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { TrendingUp } from "lucide-react";
import { useState } from "react";

interface MoodChartProps {
    moodData: { month: string; mood: number; date?: string }[];
}

const FILTERS = [
    { label: "Minggu Ini", value: "week" },
    { label: "Bulan Ini", value: "month" },
    { label: "6 Bulan Terakhir", value: "6months" },
];

function filterMoodData(moodData: MoodChartProps["moodData"], filter: string) {
    if (filter === "week") {
        // Ambil 7 data terakhir (anggap data harian)
        return moodData.filter((d) => d.date && d.date.length === 10).slice(-7);
    }
    if (filter === "month") {
        // Ambil 30 data terakhir (anggap data harian)
        return moodData.filter((d) => d.date && d.date.length === 10).slice(-30);
    }
    if (filter === "6months") {
        // Ambil 6 data bulanan dari bulan sekarang ke depan
        return moodData.filter((d, i) => i < 6);
    }
    return moodData;
}

export default function MoodChart({ moodData }: MoodChartProps) {
    const [filter, setFilter] = useState("6months");
    const filteredData = filterMoodData(moodData, filter);
    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
                <div>
                    <p className="text-sm font-medium text-slate-500 mb-1">Grafik Perubahan Mood</p>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">Tren Mood Anda</h3>
                </div>
                <div className="flex items-center gap-2">
                    {FILTERS.map(f => (
                        <button
                            key={f.value}
                            onClick={() => setFilter(f.value)}
                            className={`px-3 py-1 rounded-lg text-xs font-semibold border transition-all duration-200 ${filter === f.value ? 'bg-purple-100 text-purple-700 border-purple-300' : 'bg-white text-slate-500 border-slate-200 hover:bg-purple-50 hover:text-purple-600'}`}
                        >
                            {f.label}
                        </button>
                    ))}
                    <div className="p-3 bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl">
                        <TrendingUp className="w-6 h-6 text-purple-500" />
                    </div>
                </div>
            </div>
            <div className="w-full h-64 md:h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={filteredData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
