import { useState } from "react";
import "../styles/Chat.css";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setLoading(true);

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);

    try {
      const res = await fetch(
        "https://my-helper-server.netlify.app/.netlify/functions/chat",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: input }),
        }
      );

      const data = await res.json();
      setMessages([...newMessages, { role: "ai", content: data.reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        { role: "ai", content: "⚠️ Помилка генерації" },
      ]);
      console.error(err);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="widget">
      {!open && (
        <button className="toggle-button" onClick={() => setOpen(true)}>
          🤖
        </button>
      )}

      {open && (
        <div className="window">
          <div className="header">
            <span>AI Чат</span>
            <button className="close-chat" onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          <div className="chatWindow">
            <div className="chat">
              {messages.map((m, i) => (
                <p
                  key={i}
                  style={{
                    color: m.role === "user" ? "#2563eb" : "#16a34a",
                    margin: "4px 0",
                  }}
                >
                  <b>{m.role === "user" ? "Ви:" : "Бот:"}</b> {m.content}
                </p>
              ))}
              {loading && <p style={{ color: "#6b7280" }}>Бот думає...</p>}
            </div>
          </div>

          <div style={{ display: "flex", marginTop: "8px" }}>
            <input
              type="text"
              className="input-field"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Напишіть повідомлення..."
              disabled={loading}
            />
            <button className="SendButton" onClick={sendMessage} disabled={loading}>
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
