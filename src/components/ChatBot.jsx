import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, SendHorizontal, X } from "lucide-react";
import "../styles/ChatBot.css";

const Message = ({ role, content }) => (
  <div
    className={`message ${role === "user" ? "user-message" : "bot-message"}`}
  >
    {content}
  </div>
);


export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", content: "Привіт! Я AI-помічник. Чим можу допомогти з математики чи хімії?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const BACKEND_DOMAIN = "https://my-helper-server-clear.netlify.app";

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
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
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-widget-container">
      
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="chat-toggle-button"
          title="Відкрити чат-бота"
        >
          <MessageCircle size={32} />
        </button>
      )}

      {isOpen && (
        <div className="chat-window">
          
          <div className="chat-header">
            <span className="chat-title">🤖 AI Помічник</span>
            <button
              onClick={() => setIsOpen(false)}
              className="chat-close-button"
              title="Закрити чат"
            >
              <X size={20} />
            </button>
          </div>

          <div className="chat-messages-window">
            {messages.map((m, i) => (
              <Message key={i} role={m.role} content={m.content} />
            ))}
            
            {loading && (
              <div className="loading-indicator">
                <span className="loading-dot"></span>
                <span className="loading-dot"></span>
                <span className="loading-dot"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              className="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Запитайте щось..."
              disabled={loading}
            />
            <button
              className="chat-send-button"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              title="Надіслати"
            >
              <SendHorizontal size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
