import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "AI Chatbot - Powered by OpenAI GPT-4o | Real-time AI Conversations",
  description: "Experience intelligent conversations with our advanced AI chatbot powered by OpenAI GPT-4o. Get instant answers, creative solutions, and personalized assistance. Built with Next.js 16 and modern web technologies for lightning-fast performance.",
  keywords: ["AI chatbot", "OpenAI", "GPT-4o", "ChatGPT", "artificial intelligence", "conversational AI", "Next.js", "chatbot online"],
  authors: [{ name: "AI Chatbot Team" }],
  metadataBase: new URL("https://raj-ai-chatbot.vercel.app"),
  openGraph: {
    title: "AI Chatbot - Powered by OpenAI GPT-4o",
    description: "Experience intelligent conversations with our advanced AI chatbot. Get instant answers and creative solutions.",
    url: "https://raj-ai-chatbot.vercel.app",
    siteName: "AI Chatbot",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot - Powered by OpenAI GPT-4o",
    description: "Experience intelligent conversations with our advanced AI chatbot.",
    creator: "@AIchatbot",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
