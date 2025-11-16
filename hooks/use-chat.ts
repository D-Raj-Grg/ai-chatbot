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

interface UseChatOptions {
  initialMessages?: Message[];
}

export function useChat(options?: UseChatOptions) {
  const [messages, setMessages] = useState<Message[]>(options?.initialMessages || []);
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

    try {
      // Call the API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map((msg) => ({
              role: msg.role,
              content: msg.parts.find((p) => p.type === 'text')?.text || '',
            })),
            {
              role: 'user',
              content: message.text || '',
            },
          ],
          model: options?.body?.model || 'gpt-4o',
          webSearch: options?.body?.webSearch || false,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from API');
      }

      setStatus('streaming');

      // Read the streaming response
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = '';

      const aiMessageId = (Date.now() + 1).toString();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          // Decode the chunk - it's plain text, not JSON
          const chunk = decoder.decode(value, { stream: true });

          if (chunk) {
            accumulatedText += chunk;

            // Update the message immediately with accumulated text
            setMessages((prev) => {
              const filtered = prev.filter((m) => m.id !== aiMessageId);
              return [
                ...filtered,
                {
                  id: aiMessageId,
                  role: 'assistant',
                  parts: [{ type: 'text', text: accumulatedText }],
                },
              ];
            });
          }
        }
      }

      setStatus('idle');
    } catch (error) {
      console.error('Error sending message:', error);

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        parts: [
          {
            type: 'text',
            text: 'Sorry, I encountered an error processing your request. Please try again.',
          },
        ],
      };

      setMessages((prev) => [...prev, errorMessage]);
      setStatus('idle');
    }
  };

  const regenerate = () => {
    if (messages.length > 0) {
      const lastUserMessage = messages
        .filter((m) => m.role === 'user')
        .pop();

      if (lastUserMessage) {
        const text = lastUserMessage.parts.find((p) => p.type === 'text')?.text;
        // Remove the last assistant message
        setMessages((prev) => {
          const lastAssistantIndex = [...prev].reverse().findIndex((m) => m.role === 'assistant');
          if (lastAssistantIndex !== -1) {
            const actualIndex = prev.length - 1 - lastAssistantIndex;
            return prev.slice(0, actualIndex);
          }
          return prev;
        });
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
