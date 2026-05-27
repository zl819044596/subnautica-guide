"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const suggestions = [
  "Where do I find diamonds?",
  "How to build a base at 200m?",
  "What's the best early game food?",
  "How to avoid Reaper Leviathans?",
  "What do I need for a Seamoth?",
];

export default function AskAiPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello, diver! I'm your Subnautica 2 AI helper. Ask me anything about creatures, resources, crafting, or survival tips.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!res.ok) throw new Error("API error");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = "";

      setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantContent += chunk;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: assistantContent,
          };
          return updated;
        });
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#0a1628] flex flex-col">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 border-b border-[rgba(0,212,255,0.1)]">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center">
            <Bot className="w-5 h-5 text-[#00d4ff]" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">AI Helper</h1>
            <p className="text-xs text-[#e6f7ff]/50">Powered by DeepSeek AI</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0 mt-1">
                  <Sparkles className="w-4 h-4 text-[#00d4ff]" />
                </div>
              )}
              <div
                className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#00d4ff] text-[#0a1628]"
                    : "bg-[#0f2642] border border-[rgba(0,212,255,0.1)] text-[#e6f7ff]/90"
                }`}
              >
                {msg.content}
              </div>
              {msg.role === "user" && (
                <div className="w-8 h-8 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center shrink-0 mt-1">
                  <User className="w-4 h-4 text-[#ff6b35]" />
                </div>
              )}
            </div>
          ))}
          {loading && messages[messages.length - 1]?.role === "user" && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#00d4ff]/10 flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#00d4ff]" />
              </div>
              <div className="bg-[#0f2642] border border-[rgba(0,212,255,0.1)] rounded-xl px-4 py-3">
                <Loader2 className="w-4 h-4 text-[#00d4ff] animate-spin" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <div className="px-4 pb-3">
          <div className="max-w-3xl mx-auto flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setInput(s);
                }}
                className="text-xs px-3 py-1.5 rounded-lg bg-[#0f2642] border border-[rgba(0,212,255,0.15)] text-[#e6f7ff]/60 hover:border-[rgba(0,212,255,0.4)] hover:text-[#e6f7ff]/90 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-4 border-t border-[rgba(0,212,255,0.1)]">
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything about Subnautica 2..."
            className="flex-1 bg-[#0f2642] border border-[rgba(0,212,255,0.2)] rounded-xl px-4 py-3 text-sm text-[#e6f7ff] placeholder:text-[#e6f7ff]/30 focus:outline-none focus:border-[#00d4ff]/60"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="w-11 h-11 bg-[#00d4ff] rounded-xl flex items-center justify-center text-[#0a1628] hover:bg-[#00d4ff]/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </main>
  );
}
