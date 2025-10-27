"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    // Nama user dummy
    const userName = "DG";

    return (
        <header className="bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <button
                            className="flex items-center gap-3 group focus:outline-none"
                            onClick={() => window.location.reload()}
                            title="Refresh Dashboard"
                        >
                            <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shadow-lg">
                                <span className="text-red-500 font-bold text-xl">E</span>
                            </div>
                            <div>
                                <h1 className="text-2xl md:text-3xl font-bold text-red-500 text-left">
                                    EmergencyyCall
                                </h1>
                                <p className="text-xs md:text-sm text-muted-foreground text-left">
                                    Wellness Tracker Dashboard
                                </p>
                            </div>
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        {pathname !== "/login" ? (
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="flex items-center gap-4 cursor-pointer focus:outline-none"
                                >
                                    <div className="hidden sm:flex flex-col items-end">
                                        <span className="text-black text-sm">
                                            Selamat Datang
                                        </span>
                                        <span className="text-black font-semibold text-lg">
                                            {userName}
                                        </span>
                                    </div>
                                    <div className="sm:hidden text-black font-semibold text-lg">
                                        {userName}
                                    </div>
                                    {/* Icon dropdown */}
                                    <svg
                                        className={`ml-2 w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-border">
                                        <button
                                            onClick={() => {
                                                localStorage.removeItem("isLoggedIn");
                                                window.location.href = "/login";
                                            }}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-600"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
}
