import ChatBotDemo from '@/components/chatbot-demo'

export const metadata = {
  title: 'Chat | AI Chatbot',
  description: 'Chat with our advanced AI assistant powered by GPT models',
}

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">AI Chat Assistant</h1>
          <p className="text-muted-foreground">
            Start a conversation with our intelligent AI chatbot
          </p>
        </div>
        <ChatBotDemo />
      </div>
    </main>
  )
}
