"use client";
import { useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";

export default function Notification() {
  const [open, setOpen] = useState(false);

  const [notificacoes, setNotificacoes] = useState([
    { id: 1, mensagem: "Nova aula marcada: Diego às 08:00", lida: false, data: new Date() },
    { id: 2, mensagem: "Aula cancelada: Bruna às 10:00", lida: false, data: new Date() },
    { id: 3, mensagem: "Nova aula marcada: Emi às 11:30", lida: true, data: new Date() },
  ]);

  const naoLidas = notificacoes.filter(n => !n.lida).length;

  const getMensagemCor = (mensagem) => {
    if (mensagem.startsWith("Nova aula marcada")) return "text-green-800 dark:text-green-300";
    if (mensagem.startsWith("Aula cancelada")) return "text-red-800 dark:text-red-300";
    return "text-zinc-900 dark:text-zinc-200";
  };

  const toggleDropdown = () => {
    // Se estamos fechando o dropdown, marca todas como lidas
    if (open) {
      setNotificacoes(prev => prev.map(n => ({ ...n, lida: true })));
    }
    setOpen(prev => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="relative p-2 text-zinc-700 dark:text-zinc-100 hover:text-yellow-500 transition"
      >
        <IoIosNotificationsOutline size={26} />
        {naoLidas > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500/90 text-white text-xs font-bold rounded-full px-2 animate-pulse">
            {naoLidas}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-zinc-800 rounded-xl shadow-2xl border border-zinc-200 dark:border-zinc-700 z-50">
          <div className="flex justify-between items-center p-3 border-b border-zinc-200 dark:border-zinc-700">
            <span className="font-bold text-sm">Notificações</span>
            <span className="text-xs text-zinc-500">{naoLidas} novas</span>
          </div>

          <div className="max-h-64 overflow-y-auto p-2 space-y-2">
            {notificacoes.map(n => (
              <div
                key={n.id}
                className={`p-3 rounded-xl transition transform hover:scale-105 ${
                  n.lida
                    ? "bg-zinc-100 dark:bg-zinc-700"
                    : "bg-red-100 dark:bg-red-800/50 shadow-md border border-red-300 dark:border-red-600"
                }`}
              >
                <p className={`text-sm font-semibold ${getMensagemCor(n.mensagem)}`}>
                  {n.mensagem}
                </p>
                <span className="text-xs text-zinc-700 dark:text-zinc-300">
                  {n.data.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
