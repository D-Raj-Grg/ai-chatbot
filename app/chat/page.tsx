import ChatBotDemo from '@/components/chatbot-demo';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Chat | AI Chatbot',
  description: 'Chat with our advanced AI assistant powered by GPT models',
};

export default function ChatPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              AI Chat Assistant
            </h1>
            <p className="text-muted-foreground">
              Start a conversation with our intelligent AI chatbot
            </p>
          </div>
          <ChatBotDemo />
        </div>
      </main>

      <Footer />
    </div>
  );
}
