# 🤖 AI Chatbot - Powered by OpenAI GPT-4o

A modern, intelligent chatbot application with real-time streaming responses powered by OpenAI's latest models. Experience natural conversations with cutting-edge AI technology.

## 🌐 Live Demo

**[https://raj-ai-chatbot.vercel.app/](https://raj-ai-chatbot.vercel.app/)**

## ✨ Features

- 🚀 **Real-time Streaming Responses** - Watch AI responses appear as they're generated
- 🎯 **Multiple AI Models** - Switch between GPT-4o, GPT-4o-mini, GPT-4 Turbo, and GPT-3.5 Turbo
- 💬 **Conversation History** - Full context maintained throughout your chat session
- 🎨 **Modern UI/UX** - Beautiful, responsive design built with shadcn/ui
- 🌓 **Dark Mode** - System-aware theme with manual toggle
- ⚡ **Lightning Fast** - Built with Next.js 16 and Turbopack
- 📱 **Mobile Responsive** - Optimized for all devices
- ♿ **Accessible** - WCAG compliant interface

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **AI Integration:** [OpenAI API](https://openai.com/) via Vercel AI SDK
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or pnpm
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/D-Raj-Grg/ai-chatbot.git
   cd ai-chatbot
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
ai-chatbot/
├── app/                      # Next.js app directory
│   ├── api/                  # API routes
│   │   └── chat/            # Chat streaming endpoint
│   ├── icon.svg             # Favicon
│   ├── apple-icon.svg       # iOS icon
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage
├── components/              # React components
│   ├── ai-elements/         # AI chat UI components
│   │   ├── conversation.tsx
│   │   ├── message.tsx
│   │   ├── prompt-input.tsx
│   │   └── ...
│   ├── ui/                  # shadcn/ui components
│   ├── chatbot-demo.tsx     # Main chatbot component
│   ├── header.tsx
│   └── hero-section.tsx
├── hooks/                   # Custom React hooks
│   └── use-chat.ts         # Chat logic and API integration
├── lib/                     # Utility functions
│   └── utils.ts
├── public/                  # Static assets
├── .env.example            # Environment variables template
└── README.md               # You are here
```

## 🔧 Configuration

### Available Models

The chatbot supports multiple OpenAI models:

- **GPT-4o** - Latest and most capable model
- **GPT-4o-mini** - Fast and cost-effective
- **GPT-4 Turbo** - Previous generation flagship
- **GPT-3.5 Turbo** - Fast and economical

Configure in `components/chatbot-demo.tsx`:
```typescript
const models = [
  { name: 'GPT-4o', value: 'gpt-4o' },
  { name: 'GPT-4o Mini', value: 'gpt-4o-mini' },
  // ...
];
```

### API Route

The chat API is located at `app/api/chat/route.ts` and uses the Vercel AI SDK for streaming responses.

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com/new)
3. Add environment variable: `OPENAI_API_KEY`
4. Deploy!

Vercel will automatically:
- Detect Next.js framework
- Configure build settings
- Set up continuous deployment

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `OPENAI_API_KEY` | Your OpenAI API key | ✅ Yes |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [OpenAI](https://openai.com/) for the GPT models
- [Vercel](https://vercel.com/) for the AI SDK and hosting
- [shadcn](https://twitter.com/shadcn) for the amazing UI components
- [Next.js team](https://nextjs.org/) for the excellent framework

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using Next.js 16 and OpenAI GPT-4o**
