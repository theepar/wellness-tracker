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
      <body className="min-h-screen bg-emergencyy-light-blue font-sans text-emergencyy-text-dark">
        <header className="bg-white shadow-sm py-4">
          <nav className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-emergencyy-dark-blue">EmergencyyCall</h1>
            <p className="text-lg text-emergencyy-text-light">Wellness Tracker Dashboard</p>
          </nav>
        </header>

        {/* 'children' di sini adalah 'page.tsx' Anda */}
        <main className="container mx-auto p-4 py-8">
          {children}
        </main>

        <footer className="bg-white shadow-inner py-4 mt-8 text-center text-emergencyy-text-light">
          <p>&copy; {new Date().getFullYear()} EmergencyyCall. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
