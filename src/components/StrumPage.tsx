import React from "react";
import { Link } from "react-router-dom";

import ThemeButton from "./ThemeButton"; // Import the ThemeButton component




const StrumPage: React.FC = () => {
  const [history, setHistory] = React.useState<{ question:string; answer:string }[]>([]);
  const [input, setInput] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  // Actually sends the message to the backend
  const sendMessagetoStrum = async (message: string, history: { question: string; answer: string }[]) => {
    const BACKEND_URL = 'https://strum-backend.onrender.com/query';
    // console.log(message, history);
    const response = await fetch(`${BACKEND_URL}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: message, history: history }),
    });

    if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
    }

    return response.json();
  }

  // Is activated upon input
  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const currentHistory = history;
    const currentInput = input;
    // Append locally to add the current answer until we hear back
    setHistory((prev => [
      ...prev,
      {question: currentInput, answer: '...'}
    ]))
    setInput('');
    setLoading(true);
    try {
      const response = await sendMessagetoStrum(currentInput, currentHistory);
      // console.log('Response from backend: ', response, '\n and history: ', response.history);
      setHistory(response.history);
      // setInput('');
    } catch (error) {
      // If we get an error, change last history entry to show that
      console.error("Error sending message:", error);
      setHistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].answer = "Error retrieving response";
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto"; // reset height
    e.target.style.height = e.target.scrollHeight + "px"; // expand to fit content
    setInput(e.target.value);
  };


  return (
    <div className ="min-h-screen bg-[var(--bg-main)] text-[var(--text-main)] p-3">
      <div className="flex justify-center">
        <Link
          to="/"
          className="hover:text-[var(--text-third)] text-4xl font-bold mt-6 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
        >
          Christian Wylie
        </Link>
      </div>
      {/* Fading in line */}
      <div
        className="h-px w-80 bg-[var(--accent-main)] mx-auto opacity-0 animate-fade-in my-3"
        style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
      ></div>
      <div
        className="flex justify-center text-3xl font-bold opacity-0 animate-fade-in mb-2"
        style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
      >
        Strum
      </div>

      <div 
        className="opacity-0 animate-fade-in"
        style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <div className="flex flex-col bg-[var(--accent-main)] text-[var(--text-main)] text-lg items-center max-w-3xl w-full mx-auto bg-opacity-100 p-6 rounded-lg shadow-lg h-[600px]">
          {/* Message history */}
          <div className="flex-1 overflow-y-auto w-full">
            {history.map((h, i) => (
            <div key={i} className="flex flex-col space-y-2 mb-3">
              <div className="self-end bg-[var(--text-third)] px-4 py-2 rounded-2xl shadow-sm max-w-[70%] break-words">
                {h.question}
              </div>
              <div className="self-start bg-[var(--text-third)] px-4 py-2 rounded-2xl shadow-sm max-w-[70%] break-words mb-1 whitespace-pre-wrap">
                {h.answer}
              </div>
            </div>
            ))}
          </div>
        </div>

        {/* Message input */}
        <div className ="flex items-center mx-auto p-3 max-w-2xl w-full gap-2">
          <textarea
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask anything..."
            className="flex-[8] text-lg max-w-full overflow-hidden resize-none break-words p-2 rounded-lg shadow-md bg-[var(--bg-secondary)] text-[var(--text-main)] border border-[var(--accent-main)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-main)] mb-2"
            rows={1}
          />
          <button 
          onClick={sendMessage}
          disabled={loading}
          className= "flex-[1] mb-1 h-full p-2 rounded-full bg-[var(--accent-main)] text-[var(--text-third)] shadow-md hover:opacity-90 disabled:opacity-50 items-center justify-center">
            {loading ? "..." : "➤"}
          </button>
        </div>
        <ThemeButton />
      </div>
    </div>
  );
}

export default StrumPage;
