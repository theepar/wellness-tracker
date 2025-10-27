"use client";
import { useEffect, useState } from "react";

export default function Toast({ message, show }: { message: string; show: boolean }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (show) {
            timer = setTimeout(() => setVisible(false), 2000);
            setVisible(true);
        } else {
            setVisible(false);
        }
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [show]);

    // Only update visible state outside of effect when show changes
    useEffect(() => {
        if (show) setVisible(true);
    }, [show]);

    if (!visible) return null;
    return (
        <div className="fixed bottom-6 right-6 z-50 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
            {message}
        </div>
    );
}
