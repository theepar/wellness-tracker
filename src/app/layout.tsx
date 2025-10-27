import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Wellness Tracker Dashboard',
  description: 'Wellness Tracker Dashboard for EmergencyyCall',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-brand-light-bg font-sans text-text-secondary">
        <header className="bg-brand-surface shadow-sm py-4 sticky top-0 z-10">
          <nav className="container mx-auto px-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-brand-blue">EmergencyyCall</h1>
              <p className="text-sm text-text-tertiary -mt-1">Wellness Tracker Dashboard</p>
            </div>
            <div className="w-10 h-10 bg-brand-blue-light rounded-full flex items-center justify-center text-brand-blue font-semibold">
              AK
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-6 py-8">
          {children}
        </main>

        <footer className="py-8 mt-8 text-center text-text-tertiary border-t border-slate-200">
          <p>&copy; {new Date().getFullYear()} EmergencyyCall. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
