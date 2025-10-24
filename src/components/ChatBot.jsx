import React, { useState, useRef, useEffect } from "react";
// Для забезпечення адаптивності та гарного вигляду використано Tailwind CSS.
// Припустимо, Tailwind доступний у вашому середовищі GitHub Pages.

export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    // Референс для автоматичної прокрутки вікна чату
    const messagesEndRef = useRef(null);

    // 💡 ОНОВЛЕНО: Твоя НОВА URL-адреса бекенду!
    const BACKEND_DOMAIN = "https://my-helper-server-clear.netlify.app"; 

    // Прокрутка вниз при оновленні повідомлень
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, open]);

    const sendMessage = async () => {
        if (!input.trim() || loading) return;

        const userMessage = { role: "user", content: input };
        const newMessages = [...messages, userMessage];
        setMessages(newMessages);
        setInput(""); 
        setLoading(true);

        try {
            // 🟢 ЛОГІКА ДЛЯ ДВОХ ОКРЕМИХ ДОМЕНІВ: 
            // Якщо локально (localhost), використовуємо відносний шлях.
            // Інакше використовуємо повний URL бекенду.
            const isLocal = window.location.hostname === 'localhost';
            const basePath = isLocal ? '' : BACKEND_DOMAIN;
            const functionPath = `${basePath}/.netlify/functions/chat`;
            
            console.log("📤 Sending request to:", functionPath);

            const res = await fetch(functionPath, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage.content }),
            });

            const data = await res.json();
            console.log("📥 Response:", data);

            if (!res.ok) {
                const errorMessage = data.error || (data.details && JSON.stringify(data.details)) || "Невідома помилка сервера.";
                throw new Error(`[Status ${res.status}] ${errorMessage}`);
            }

            setMessages([...newMessages, { role: "ai", content: data.reply }]);
        } catch (err) {
            console.error("💥 Fetch error:", err);
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    role: "ai",
                    content: `⚠️ Помилка: ${err.message}`,
                },
            ]);
        }

        setLoading(false);
    };
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Запобігаємо переходу на новий рядок
            sendMessage();
        }
    };

    // === СТИЛІЗОВАНИЙ КОМПОНЕНТ З ВИКОРИСТАННЯМ TAILWIND (якщо доступний) АБО ІНЛАЙН ===

    const Message = ({ role, content }) => (
        <div 
            className={`max-w-[80%] my-1 p-3 rounded-xl shadow-md ${
                role === "user" 
                    ? "bg-blue-50 text-blue-800 ml-auto rounded-br-none" 
                    : "bg-green-50 text-green-800 mr-auto rounded-tl-none"
            }`}
        >
            <b className="font-semibold">{role === "user" ? "Ви:" : "Бот:"}</b> {content}
        </div>
    );


    return (
        <div className="fixed bottom-5 right-5 z-[1000] font-sans">
            {!open && (
                <button 
                    className="w-16 h-16 rounded-full bg-blue-600 text-white text-3xl font-bold shadow-lg hover:bg-blue-700 transition duration-200"
                    onClick={() => setOpen(true)}
                    title="Відкрити чат-бота"
                >
                    🤖
                </button>
            )}

            {open && (
                <div className="w-80 h-[500px] flex flex-col rounded-xl shadow-2xl bg-gray-50 overflow-hidden">
                    {/* Header */}
                    <div className="p-3 bg-green-600 text-white flex justify-between items-center font-bold">
                        <span>AI Помічник</span>
                        <button 
                            className="text-xl opacity-80 hover:opacity-100 transition" 
                            onClick={() => setOpen(false)}
                            title="Закрити чат"
                        >
                            ✖
                        </button>
                    </div>

                    {/* Chat Window */}
                    <div className="flex-grow p-3 overflow-y-auto flex flex-col space-y-2 bg-white">
                        {messages.map((m, i) => (
                            <Message key={i} role={m.role} content={m.content} />
                        ))}
                        {loading && (
                            <div className="text-gray-500 text-sm p-3">
                                Бот думає...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Container */}
                    <div className="flex p-3 border-t border-gray-200 bg-gray-50">
                        <input
                            type="text"
                            className="flex-grow p-2 rounded-lg border border-gray-300 mr-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Напишіть повідомлення..."
                            disabled={loading}
                        />
                        <button
                            className={`p-3 rounded-lg text-white font-semibold transition duration-200 ${
                                loading || !input.trim() 
                                    ? 'bg-gray-400 cursor-not-allowed' 
                                    : 'bg-blue-600 hover:bg-blue-700'
                            }`}
                            onClick={sendMessage}
                            disabled={loading || !input.trim()}
                            title="Надіслати"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}