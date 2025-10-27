"use client";

export default function Header() {
    return (
        <header className="bg-white border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shadow-lg">
                            <span className="text-red-500 font-bold text-xl">E</span>
                        </div>
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-red-500">EmergencyyCall</h1>
                            <p className="text-xs md:text-sm text-muted-foreground">Wellness Tracker Dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-black text-sm">Selamat Datang</span>
                            <span className="text-black font-semibold text-lg">DG</span>
                        </div>
                        <div className="sm:hidden text-black font-semibold text-lg">DG</div>
                    </div>
                </div>
            </div>
        </header>
    );
}
