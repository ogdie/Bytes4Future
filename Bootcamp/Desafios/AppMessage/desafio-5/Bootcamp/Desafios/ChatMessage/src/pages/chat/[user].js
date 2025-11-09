import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ChatPage() {
    const router = useRouter();
    const { user } = router.query;

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchMessages = () => {
        if (!user) return;

        fetch(`http://localhost:5000/api/chat/${user}`)
            .then(res => res.json())
            .then(data => {
                setMessages(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Erro ao buscar mensagens:', err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchMessages();
    }, [user]);

    const handleSendMessage = async () => {
        if (!newMessage.trim()) return;

        const payload = {
            to: user,
            content: newMessage.trim(),
        };

        const res = await fetch('http://localhost:5000/api/chat/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (res.ok) {
            setNewMessage('');
            fetchMessages();
        } else {
            console.error('Erro ao enviar mensagem');
        }
    };

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <div className="w-full max-w-2xl mx-auto flex flex-col flex-1 shadow-lg rounded-md overflow-hidden bg-white">

                {/* Navbar fixa */}
                <div className="sticky top-0 z-20 bg-white border-b border-gray-200 flex items-center gap-4 px-4 py-3 shadow-sm">
                    <button
                        onClick={() => router.push('/')}
                        className="text-blue-600 hover:text-blue-800 font-bold text-2xl select-none transition-colors"
                        title="Voltar"
                        aria-label="Voltar"
                    >
                        ←
                    </button>

                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-500 shadow-md">
                        <img
                            src={`/img/${user}.jpg`}
                            alt={user}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <span className="text-xl font-semibold capitalize text-gray-900 truncate">
                        {user}
                    </span>
                </div>

                {/* Mensagens */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {loading ? (
                        <p className="text-center text-gray-500">A carregar mensagens...</p>
                    ) : messages.length === 0 ? (
                        <p className="text-center text-gray-500">Nenhuma mensagem ainda.</p>
                    ) : (
                        messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-[75%] p-3 rounded-lg break-words
                                    ${msg.from === 'beatriz'
                                        ? 'bg-blue-100 self-end text-right ml-auto'
                                        : 'bg-gray-200 self-start text-left'
                                    } shadow-sm`}
                            >
                                <div className="text-xs text-gray-600 font-medium select-none">
                                    {msg.from === 'beatriz' ? 'Você' : msg.from}
                                </div>
                                <div className="mt-1 text-gray-800 whitespace-pre-wrap">{msg.content}</div>
                                <div className="mt-1 text-xs text-gray-400 select-none">
                                    {new Date(msg.dateInMs).toLocaleString('pt-PT', {
                                        day: '2-digit',
                                        month: '2-digit',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit',
                                    })}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {/* Campo de envio de mensagem */}
                <div className="bg-white border-t border-gray-200 px-4 py-3 flex gap-3 items-center">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Digite sua mensagem..."
                        className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        onKeyDown={e => { if (e.key === 'Enter') handleSendMessage(); }}
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        aria-label="Enviar mensagem"
                    >
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}
