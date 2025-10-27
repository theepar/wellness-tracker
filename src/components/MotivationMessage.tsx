"use client";
import { useState } from "react";
import { Sparkles } from "lucide-react";

const quotes = [
    { text: "Kamu lebih kuat dari yang kamu kira.", author: "Deva" },
    { text: "Setiap hari adalah kesempatan baru untuk tumbuh.", author: "EmergencyyCall" },
    { text: "Kesehatan mental sama pentingnya dengan kesehatan fisik.", author: "Deva" },
    { text: "Kamu tidak sendirian dalam perjalanan ini.", author: "EmergencyyCall" },
];

export default function MotivationMessage() {
    const [currentQuote, setCurrentQuote] = useState(0);
    const [animate, setAnimate] = useState(false);
    const nextQuote = () => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 500);
        setTimeout(() => setCurrentQuote((prev) => (prev + 1) % quotes.length), 250);
    };
    return (
        <div className="rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-amber-100" style={{ background: 'linear-gradient(135deg, #fef9c3 0%, #ffe4e6 100%)' }}>
            <div className="flex flex-col md:flex-row items-start justify-between mb-6 gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                    <Sparkles className="w-6 h-6 text-amber-500" />
                </div>
            </div>
            <div className="mb-6">
                <p className="text-sm font-medium text-amber-700 mb-3">Motivasi Harian Anda</p>
                <p className={`text-lg md:text-xl font-semibold text-slate-900 italic mb-2 transition-all duration-500 ${animate ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>“{quotes[currentQuote].text}”</p>
                <p className={`text-sm text-amber-700 font-medium mb-4 transition-all duration-500 ${animate ? 'opacity-0 blur-sm' : 'opacity-100 blur-0'}`}>— {quotes[currentQuote].author}</p>
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
