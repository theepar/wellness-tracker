"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        if (username.trim() === "") {
            setError("Username wajib diisi");
            return;
        }
        setError("");
        localStorage.setItem("isLoggedIn", "true");
        router.push("/");
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-50">
            <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">Login Wellness Tracker</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 text-slate-700">Username</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-1 text-slate-700">Password</label>
                    <input
                        type="password"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition mb-2">Login</button>
            </form>
        </div>
    );
}
