import { useState } from "react";
import Chatbot from "./ChatBot";
import { MessageCircle } from "lucide-react"; 
import "../styles/Chat.css";

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="widget">
      {isOpen && (
        <div className="window">
          <div className="header">
            <span>🤖 Chat Bot</span>
            <button onClick={() => setIsOpen(false)} className="close-chat">✖</button>
          </div>
          <Chatbot />
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="toggle-button"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}