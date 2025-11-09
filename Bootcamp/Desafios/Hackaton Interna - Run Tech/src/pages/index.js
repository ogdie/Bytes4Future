"use client";

import Link from 'next/link';


export default function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center mb-20 md:mb-24 lg:mb-32">
          <h1 className="text-white text-7xl md:text-10xl font-extrabold tracking-widest uppercase">
            RUN
          </h1>
          <p className="text-white text-xs md:text-sm font-light tracking-widest mt-1">
            TECH SOLUTIONS
          </p>
        </div>
        <Link 
          href="/home" 
          className="px-6 py-3 bg-green-500 text-gray-100 text-md font-semibold rounded-lg shadow-xl transition duration-300"
        >
            Clique aqui para iniciar
        </Link>
      </main>
    </div>
  );
}