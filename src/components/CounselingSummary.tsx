"use client";
import { Heart } from "lucide-react";

interface CounselingSummaryProps {
    sessionCount: number;
    lastSession: string;
    lastDate: string;
}

export default function CounselingSummary({ sessionCount, lastSession, lastDate }: CounselingSummaryProps) {
    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <p className="text-sm font-medium text-slate-500 mb-2">Ringkasan Sesi</p>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">{sessionCount}</h3>
                    <p className="text-sm text-slate-600 mt-1">Total Sesi Selesai</p>
                </div>
                <div className="p-3 bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl">
                    <Heart className="w-6 h-6 text-blue-500" />
                </div>
            </div>
            <div className="pt-6 border-t border-slate-100">
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-2">Sesi Terakhir</p>
                <p className="text-lg font-semibold text-slate-900 mb-1">“{lastSession}”</p>
                <p className="text-sm text-slate-600">{lastDate}</p>
            </div>
        </div>
    );
}
