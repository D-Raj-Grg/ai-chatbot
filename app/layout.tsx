import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "AI Chatbot - Powered by OpenAI GPT-4o | Real-time AI Conversations",
  description: "Experience intelligent conversations with our advanced AI chatbot powered by OpenAI GPT-4o. Get instant answers, creative solutions, and personalized assistance. Built with Next.js 16 and modern web technologies for lightning-fast performance.",
  keywords: ["AI chatbot", "OpenAI", "GPT-4o", "ChatGPT", "artificial intelligence", "conversational AI", "Next.js", "chatbot online"],
  authors: [{ name: "AI Chatbot Team" }],
  openGraph: {
    title: "AI Chatbot - Powered by OpenAI GPT-4o",
    description: "Experience intelligent conversations with our advanced AI chatbot. Get instant answers and creative solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot - Powered by OpenAI GPT-4o",
    description: "Experience intelligent conversations with our advanced AI chatbot.",
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
