"use client";
import Link from "next/link";
import Image from "next/image";
import { IoIosNotificationsOutline } from "react-icons/io";
import Notification from "./Notification"; // <-- import do sino funcional

export default function Header() {
  const nome = "Ramom Dinamo";

  return (
    <div
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        z-[9999] pointer-events-auto
        bg-gray-200 backdrop-blur-md
        border border-gray-200 shadow-lg rounded-2xl
        flex justify-between items-center
        w-[90%] max-w-md py-2 px-4 isolate
      "
    >
      <div className="flex items-center gap-3">
          <Image
            src="/img/foto ramom.jpg"
            alt="Foto de perfil"
            width={80}
            height={80}
            className="rounded-full"
          />

        <div className="flex flex-col text-[#37474F]">
          <h1 className="text-md">
            Olá, <span className="font-bold text-base text-[#FF7043]">{nome}!</span>
          </h1>
          <p className="text-sm text-black">Personal Trainer</p>
        </div>
      </div>

      {/* Sino de notificações fake */}
      <div className="text-black">
        <Notification />
      </div>
    </div>
  );
}
