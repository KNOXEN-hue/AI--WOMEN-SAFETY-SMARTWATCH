import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const botResponses = [
  "I'm your SafeGuard AI assistant! I can help with safety tips and product info.",
  "Our smartwatch features High-Intensity Flash Light, electric shock, and GPS tracking for your safety.",
  "In an emergency, press the SOS button on your SafeGuard watch to alert authorities and contacts.",
  "The AI system monitors your surroundings and alerts you to potential threats in real-time.",
  "You can customize emergency contacts and safe zones in the SafeGuard app.",
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hi! I'm your SafeGuard Safety Assistant 🛡️ How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user" as const, text: input };
    const botMsg = { role: "bot" as const, text: botResponses[Math.floor(Math.random() * botResponses.length)] };
    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full gradient-primary shadow-glow flex items-center justify-center animate-pulse-glow"
        >
          <MessageCircle className="h-6 w-6 text-primary-foreground" />
        </button>
      )}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-80 rounded-lg border border-border bg-card shadow-card flex flex-col overflow-hidden" style={{ height: 420 }}>
          <div className="gradient-primary px-4 py-3 flex items-center justify-between">
            <span className="font-display font-semibold text-primary-foreground text-sm">SafeGuard AI Assistant</span>
            <button onClick={() => setOpen(false)}><X className="h-4 w-4 text-primary-foreground" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`text-xs px-3 py-2 rounded-lg max-w-[85%] ${m.role === "bot" ? "bg-muted text-foreground" : "gradient-primary text-primary-foreground ml-auto"}`}>
                {m.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about safety..."
              className="flex-1 bg-muted text-foreground text-xs rounded-md px-3 py-2 outline-none focus:ring-1 focus:ring-primary"
            />
            <Button size="sm" className="gradient-primary text-primary-foreground border-0 h-8 w-8 p-0" onClick={sendMessage}>
              <Send className="h-3 w-3" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
