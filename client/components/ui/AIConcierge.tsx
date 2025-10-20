import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, X, Minimize2, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Good evening. How may I assist you with your luxury experience today?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/claude/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response || "I apologize, but I need a moment to gather my thoughts.",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize for the inconvenience. Please allow me a moment to reconnect.",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating trigger button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-50 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-luxury-gold/20 blur-2xl group-hover:bg-luxury-gold/30 transition-colors duration-luxury" />
              <div className="relative bg-luxury-black text-luxury-white px-6 py-4 rounded-full shadow-luxury-lg hover:shadow-luxury-xl transition-all duration-luxury flex items-center gap-3 luxury-hover">
                <Sparkles className="w-5 h-5" />
                <span className="font-serif text-body tracking-luxury-wide">AI Concierge</span>
              </div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={cn(
              "fixed z-50 bg-luxury-white shadow-luxury-xl",
              isMinimized
                ? "bottom-8 right-8 w-96 h-16 rounded-full"
                : "bottom-8 right-8 w-[450px] h-[600px] rounded-lg"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-luxury-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
                <h3 className="font-serif text-heading-4 tracking-luxury">AI Concierge</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 hover:bg-luxury-gray-100 rounded transition-colors duration-luxury-fast"
                >
                  {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-luxury-gray-100 rounded transition-colors duration-luxury-fast"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-6 space-y-6 h-[calc(100%-160px)] luxury-scrollbar">
                  <AnimatePresence initial={false}>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                          "flex",
                          message.role === "user" ? "justify-end" : "justify-start"
                        )}
                      >
                        <div
                          className={cn(
                            "max-w-[80%] px-5 py-3 rounded-lg",
                            message.role === "user"
                              ? "bg-luxury-black text-luxury-white"
                              : "bg-luxury-gray-100 text-luxury-black"
                          )}
                        >
                          <p className={cn(
                            "text-body leading-relaxed",
                            message.role === "assistant" && "luxury-thin"
                          )}>
                            {message.content}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-luxury-gray-100 px-5 py-3 rounded-lg">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 bg-luxury-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                          <span className="w-2 h-2 bg-luxury-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                          <span className="w-2 h-2 bg-luxury-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-6 border-t border-luxury-gray-200">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      sendMessage();
                    }}
                    className="flex gap-3"
                  >
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="How may I assist you..."
                      className="flex-1 px-4 py-3 bg-luxury-gray-50 border border-luxury-gray-200 rounded-lg focus:outline-none focus:border-luxury-gold transition-colors duration-luxury-fast text-body tracking-wide"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isTyping}
                      className="px-5 py-3 bg-luxury-black text-luxury-white rounded-lg hover:bg-luxury-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-luxury-fast luxury-hover"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
