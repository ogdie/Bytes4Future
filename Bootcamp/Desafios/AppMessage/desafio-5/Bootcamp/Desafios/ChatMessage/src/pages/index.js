import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar usuários:', err);
        setLoading(false);
      });
  }, []);

  const handleSelectUser = (user) => {
    router.push(`/chat/${user}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-10 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800">Mensagens</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 shadow-sm">
          <Image
            src="/img/beatriz.jpg"
            alt="Beatriz"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-4 max-w-xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-600 mt-10">A carregar...</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-600 mt-10">Nenhuma conversa encontrada.</p>
        ) : (
          <div className="grid gap-4 mt-4">
            {users.map((user, index) => (
              <div
                key={index}
                onClick={() => handleSelectUser(user)}
                className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg hover:bg-blue-100/60 border border-gray-200 transition-all duration-300 cursor-pointer"
              >
                <div className="relative flex items-center mr-4 w-14 h-14">
                  {/* Foto do usuário */}
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src={`/img/${user}.jpg`}
                      alt={user}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>

                  {/* Bolinha verde - status online fora da foto */}
                  <span className="absolute bottom-1.5 right-2 translate-x-1/2 translate-y-1/2 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-md" />
                </div>

                {/* Nome e mensagem */}
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-gray-800 capitalize">{user}</span>
                  <p className="text-sm text-gray-500">Toca aqui para abrir conversa</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
