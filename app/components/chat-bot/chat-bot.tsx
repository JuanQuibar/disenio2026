"use client";
import React, { useState, useEffect, useRef } from "react";
import { SendIcon } from "../icons";

interface Message {
  text: string;
  sender: "user" | "bot";
}

export const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hola, soy UNO. Puedo ayudarte a resumir noticias que nuestros periodistas hayan pulicado",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const textareaRef = useRef<null | HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const userMessage: Message = {
      sender: "user",
      text: inputValue,
    };

    const botResponse: Message = {
      sender: "bot",
      text: "Estoy en construcción. Aún no puedo contestar, pero te avisaré cuando esté listo",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, botResponse]);
    setInputValue("");

    // Reset textarea height after sending
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  // Auto-resize textarea based on content
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Send message on Enter, but allow new lines with Shift+Enter
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.requestSubmit();
      }
    }
  };

  return (
    <section className="p-1 bg-white rounded-lg  max-w-2xl mx-auto mb-2">
      <div className="flex flex-col justify-between h-[60vh] bg-white shadow-lg/30 rounded-lg border border-gray-300">
        <div className="grow p-4 space-y-4 overflow-y-auto ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`w-3/4 p-3 rounded-lg ${
                  msg.sender === "user"
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="p-2 bg-white">
          <form
            onSubmit={handleSendMessage}
            className="flex items-end space-x-2"
            suppressHydrationWarning
          >
            <textarea
              id="chat-input"
              ref={textareaRef}
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
              className="grow p-2 border border-gray-500 rounded-xl focus:outline-none resize-none max-h-24 overflow-y-hidden"
              aria-label="Chat input"
              suppressHydrationWarning
            />
            <button
              type="submit"
              className="bg-black text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black self-end"
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
