"use client";

import React, { useState } from 'react';
import { Poppins } from 'next/font/google';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import DayScheduleModal from '../components/DayScheduleModal';
import { FaCheckCircle, FaTimesCircle, FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

// --- Funções de data ---
const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();
const formatDateHeader = (date) => date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });

// --- Componente do calendário ---
const MonthlyCalendar = ({ schedule, onDayClick, currentDate, goToNextMonth, goToPrevMonth }) => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOffset = getFirstDayOfMonth(currentYear, currentMonth);
    const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const getDayKey = (day) => `${currentYear}-${currentMonth}-${day}`;
    const getDayStatus = (day) => schedule[getDayKey(day)] || 'unavailable';


    return (
        <div className="w-full">
            {/* Cabeçalho do mês */}
            <div className="flex justify-between items-center mb-4 px-2">
                <button
                    onClick={goToPrevMonth}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    title="Mês Anterior"
                >
                    <FaChevronLeft className="text-xl text-black dark:text-zinc-50" />
                </button>

                <h3 className="text-lg font-medium text-gray-100 dark:text-zinc-50 flex items-center whitespace-nowrap capitalize ">
                    <FaCalendarAlt className="mr-2 text-green-600" />
                    {formatDateHeader(currentDate)}
                </h3>

                <button
                    onClick={goToNextMonth}
                    className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    title="Próximo Mês"
                >
                    <FaChevronRight className="text-xl text-black dark:text-zinc-50" />
                </button>
            </div>

            {/* Dias da semana */}
            <div className="grid grid-cols-7 text-sm font-medium text-gray-100 dark:text-gray-400 mb-2 border-b dark:border-gray-700 pb-1">
                {weekdays.map(day => (
                    <div key={day} className="text-center">
                        {day}

                    </div>

                ))}
            </div>

            {/* Dias */}
            <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayOffset }, (_, i) => (
                    <div key={`empty-${i}`} className="p-2"></div>
                ))}

                {daysArray.map(day => {
                    const status = getDayStatus(day);
                    const dateObj = new Date(currentYear, currentMonth, day);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0); // zeraR hora pra comparação correta

                    const isPast = dateObj < today; // dia anterior ao atual
                    const isTodayOrFuture = !isPast;
                    const isAvailable = status === 'available';
                    const isFull = status === 'full'; // quando todos horários estiverem preenchidos

                    const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

                    return (
                        <div
                            key={day}
                            className={`flex flex-col items-center justify-center h-12 w-full rounded-lg transition duration-200 shadow-sm
                                ${isPast
                                    ? 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                                    : isAvailable
                                        ? 'bg-green-100 dark:bg-green-900/50 hover:bg-green-200 dark:hover:bg-green-800/50 border border-green-400/50 cursor-pointer'
                                        : isFull
                                            ? 'bg-red-100 dark:bg-red-900/50 hover:bg-red-200 dark:hover:bg-red-800/50 border border-red-400/50 cursor-pointer'
                                            : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-transparent cursor-pointer'
                                }`}
                            onClick={() => !isPast && onDayClick(dateString)}
                            title={isPast ? 'Data passada' : 'Clique para ver horários'}
                        >
                            <span className={`text-sm flex flex-col items-center ${isPast ? 'text-gray-400 dark:text-gray-500' : 'text-gray-600 dark:text-gray-300'}`}>
                                {day}
                            </span>

                            {/* Ícones apenas para hoje e futuras */}
                            {!isPast && (
                                <div className="mt-1">
                                    {isAvailable && (
                                        <FaCheckCircle className="text-xs text-green-600 dark:text-green-400" />
                                    )}
                                    {isFull && (
                                        <FaTimesCircle className="text-xs text-red-500 dark:text-red-400" />
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

// --- Componente principal ---
export default function Calendario() {
    const [schedule, setSchedule] = useState({
        '2025-09-23': {
            slots: {
                '09:00': true,  // true = ocupado
                '10:00': false, // false = livre
                '11:00': true,
            }
        },
        '2025-09-24': {
            slots: {
                '09:00': true,
                '10:00': true,
                '11:00': true,
            }
        }
    });
    const [currentDate, setCurrentDate] = useState(new Date());
    const [isSaving, setIsSaving] = useState(false);
    const [message, setMessage] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

const goToNextMonth = () => setCurrentDate(prev => {
  const newDate = new Date(prev.getTime()); // clona o objeto Date
  newDate.setMonth(newDate.getMonth() + 1);
  return newDate;
});

const goToPrevMonth = () => setCurrentDate(prev => {
  const newDate = new Date(prev.getTime());
  newDate.setMonth(newDate.getMonth() - 1);
  return newDate;
});


    const handleToggleAvailability = (key) => {
        setSchedule(prev => {
            const currentStatus = prev[key] || 'unavailable';
            return { ...prev, [key]: currentStatus === 'available' ? 'unavailable' : 'available' };
        });
        setMessage('');
    };

    const handleSave = async () => {
        setIsSaving(true);
        setMessage('');
        try {
            await fetch('/api/aulas/save-schedule', { // sua API de salvar
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(schedule),
            });
            setMessage('Agenda salva com sucesso!');
        } catch {
            setMessage('❌ Erro ao salvar a agenda. Tente novamente.');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className={`${poppins.className} flex min-h-screen items-center justify-center bg-transparent`}>
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
                <Header />
                <div className="flex flex-col items-center gap-6 text-center w-full">
                    <h1 className="text-3xl font-semibold leading-10 tracking-tight text-gray-100 dark:text-zinc-50">
                        Sua Agenda
                    </h1>

                    <div className="w-full mt-6 max-w-lg bg-gray-100/50 dark:bg-gray-800/50 p-6 rounded-2xl shadow-2xl border border-gray-200/30 dark:border-gray-700/30">
                        <MonthlyCalendar
                            schedule={schedule}
                            onDayClick={setSelectedDate}
                            currentDate={currentDate}
                            goToNextMonth={goToNextMonth}
                            goToPrevMonth={goToPrevMonth}
                        />
                    </div>
                    {message && (
                        <p className={`mt-4 text-md font-medium ${message.startsWith('❌') ? 'text-red-500' : 'text-green-600 dark:text-green-400'}`}>
                            {message}
                        </p>
                    )}
                </div>

                <Navbar />
            </main>

            {selectedDate && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 animate-fadeIn p-4">
                    <div className="animate-slideUp w-full flex justify-center">
                        <DayScheduleModal
                            date={selectedDate}
                            onClose={() => setSelectedDate(null)}
                        />
                    </div>
                </div>
            )}

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { transform: translateY(20px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease forwards;
                }
                .animate-slideUp {
                    animation: slideUp 0.3s ease forwards;
                }
            `}</style>
        </div>
    );
}