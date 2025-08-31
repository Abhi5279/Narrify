import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Chatbot Popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[500px] h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-2 bg-blue-600 text-white">
            <button onClick={toggleChat} className="hover:text-gray-200">
              <X size={20} />
            </button>
          </div>

          {/* Iframe with your deployed bot */}
          <iframe
            src="https://chat-bot-xpn7.vercel.app"
            title="ChatBot"
            className="w-full h-full border-none"
            allow="microphone; camera"
          />
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:bg-blue-700 transition-all z-50"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default ChatBot;
