"use client";
import { Heart, TrendingUp, Target } from "lucide-react";

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

export default function QuickStats() {
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
