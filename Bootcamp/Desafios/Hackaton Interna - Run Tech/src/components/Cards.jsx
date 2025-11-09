// src/components/Cards.jsx
export default function Card({ nome, horario, data, objetivo }) {
  return (
    <div className="w-full max-w-sm shadow-md rounded-lg p-4 mb-4 font-sans bg-gray-200 border border-gray-300 border-l-4 border-l-green-500">
      <h2 className="text-lg sm:text-xl font-black text-black mb-2">
        PRÓXIMA AULA
      </h2>

      <p className="text-base font-semibold text-black mb-1">
        <span className="font-bold">Aluno:</span> {nome || '----'}
      </p>
      <p className="text-sm text-black mb-0.5">
        <span className="font-bold">Horário:</span> {horario || '----'}
      </p>
      <p className="text-sm text-black mb-0.5">
        <span className="font-bold">Data:</span> {data || '----'}
      </p>
      <p className="text-sm text-black">
        <span className="font-bold">Objetivo:</span> {objetivo || '----'}
      </p>
    </div>
  );
}
