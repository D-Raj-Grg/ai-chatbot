'use client';

import { useState } from 'react';

export interface MessagePart {
  type: 'text' | 'reasoning' | 'source-url';
  text?: string;
  url?: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  parts: MessagePart[];
}

interface SendMessageOptions {
  body?: {
    model?: string;
    webSearch?: boolean;
  };
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<'idle' | 'submitted' | 'streaming'>('idle');

  const sendMessage = async (
    message: { text?: string; files?: File[] },
    options?: SendMessageOptions
  ) => {
    if (!message.text && !message.files?.length) return;

    setStatus('submitted');

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      parts: [{ type: 'text', text: message.text || 'Sent attachments' }],
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      setStatus('streaming');

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: `This is a demo response to: "${message.text}". To connect to a real AI model, you'll need to set up an API route with your preferred AI provider (OpenAI, Anthropic, etc.) and update the useChat hook.`,
          },
        ],
      };

      setMessages((prev) => [...prev, aiMessage]);
      setStatus('idle');
    }, 1000);
  };

  const regenerate = () => {
    if (messages.length > 0) {
      const lastUserMessage = messages
        .filter((m) => m.role === 'user')
        .pop();

      if (lastUserMessage) {
        const text = lastUserMessage.parts.find((p) => p.type === 'text')?.text;
        setMessages((prev) => prev.filter((m) => m.role === 'user'));
        sendMessage({ text });
      }
    }
  };

  return {
    messages,
    sendMessage,
    status,
    regenerate,
  };
}
