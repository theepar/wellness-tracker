"use client";
import { Smartphone, BookOpen, Target, CheckCircle2 } from "lucide-react";

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

export default function UpcomingFeatures() {
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
                        className="relative flex flex-col md:flex-row items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                        style={{ background: '#f6f8fc' }}
                    >
                        <div className="p-2 bg-white rounded-xl shadow-sm shrink-0 mb-2 md:mb-0">
                            <div className="text-blue-500">{feature.icon}</div>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 text-sm md:text-base">{feature.title}</h4>
                            <p className="text-xs md:text-sm text-slate-600 mt-1">{feature.description}</p>
                        </div>
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-1 md:static absolute right-4 top-4" />
                    </div>
                ))}
            </div>
        </div>
    );
}
