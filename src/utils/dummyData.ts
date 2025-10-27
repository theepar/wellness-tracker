// src/utils/dummyData.ts
import { ChartData } from 'chart.js';

// 1. Definisikan tipe untuk sesi konseling
export interface CounselingSession {
    id: number;
    date: string;
    topic: string;
    duration: number;
}

export const counselingSessions: CounselingSession[] = [
    { id: 1, date: '2023-01-15', topic: 'Managing Stress', duration: 45 },
    { id: 2, date: '2023-02-01', topic: 'Coping with Anxiety', duration: 60 },
    { id: 3, date: '2023-03-10', topic: 'Building Resilience', duration: 30 },
    { id: 4, date: '2023-04-05', topic: 'Improving Sleep', duration: 45 },
];

// 2. Berikan tipe ChartData<'line'> untuk data chart
export const moodData: ChartData<'line'> = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
    datasets: [
        {
            label: 'Perubahan Mood',
            data: [7, 6, 8, 7, 9, 8], // Skala 1-10, 10=sangat baik
            fill: true,
            backgroundColor: 'rgba(179, 224, 242, 0.2)',
            borderColor: '#007ACC',
            tension: 0.4,
        },
    ],
};

// 3. Tipe data string array
export const motivationMessages: string[] = [
    "Setiap langkah kecil adalah kemajuan besar.",
    "Percayalah pada kekuatan dalam dirimu.",
    "Hadapi hari ini dengan senyuman dan keberanian.",
    "Kamu lebih kuat dari yang kamu kira.",
    "Istirahat bukan menyerah, tapi mengisi energi.",
];