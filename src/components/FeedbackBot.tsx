"use client";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function FeedbackBot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [sent, setSent] = useState(false);

    function handleSend() {
        if (input.trim() === "") return;
        setResponse("Terimakasih sudah memberikan respon ke website kami!");
        setSent(true);
        // Simpan ke cache web (localStorage, tidak dikirim ke server)
        localStorage.setItem("feedback", input);
    }

    function handleClose() {
        setOpen(false);
        setInput("");
        setResponse("");
        setSent(false);
    }

    return (
        <>
            <button
                className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center gap-2"
                onClick={() => setOpen(true)}
                title="Beri Ulasan ke Bot CS"
            >
                <MessageCircle className="w-6 h-6" />
                <span className="hidden md:inline">CS Bot</span>
            </button>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-xs md:max-w-sm flex flex-col">
                        <h3 className="text-lg font-bold mb-2 text-blue-600">Bot CS Wellness</h3>
                        <p className="text-sm text-slate-600 mb-4">Kirim ulasan, kritik, atau saran Anda di bawah ini.</p>
                        {!sent ? (
                            <>
                                <textarea
                                    className="w-full h-20 p-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    placeholder="Tulis ulasan Anda..."
                                />
                                <button
                                    className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition mb-2"
                                    onClick={handleSend}
                                >
                                    Kirim
                                </button>
                            </>
                        ) : (
                            <div className="bg-blue-50 text-blue-700 rounded-lg p-3 text-center font-medium mb-2">
                                {response}
                            </div>
                        )}
                        <button
                            className="w-full py-1 px-4 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
                            onClick={handleClose}
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
