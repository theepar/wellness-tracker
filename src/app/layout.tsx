import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: 'Wellness Tracker Dashboard',
  description: 'Wellness Tracker Dashboard for EmergencyyCall',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-foreground">
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
