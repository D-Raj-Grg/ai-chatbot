import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import ChatBotDemo from "@/components/chatbot-demo";
import { StatsSection } from "@/components/stats-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Why Choose Our{' '}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    AI Chatbot
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Powerful features designed to enhance your conversational experience
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Advanced AI Models',
                    description: 'Powered by OpenAI GPT-4o and other cutting-edge models',
                    icon: '🤖',
                  },
                  {
                    title: 'Web Search Integration',
                    description: 'Get real-time information with integrated web search capabilities',
                    icon: '🌐',
                  },
                  {
                    title: 'File Attachments',
                    description: 'Share images, documents, and files seamlessly in conversations',
                    icon: '📎',
                  },
                  {
                    title: 'Reasoning Transparency',
                    description: 'Understand AI thought process with visible reasoning steps',
                    icon: '🧠',
                  },
                  {
                    title: 'Source Citations',
                    description: 'Verify information with clickable source references',
                    icon: '📚',
                  },
                  {
                    title: 'Modern UI/UX',
                    description: 'Beautiful, responsive design built with Next.js and shadcn/ui',
                    icon: '✨',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Chatbot Section */}
        <section id="chat" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">
                  Try It{' '}
                  <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                    Yourself
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Experience real-time AI conversations powered by OpenAI&apos;s latest models. Ask me anything!
                </p>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl -z-10" />
                <div className="bg-background border rounded-3xl shadow-2xl overflow-hidden">
                  <ChatBotDemo />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <StatsSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Pricing Section */}
        <PricingSection />

        {/* FAQ Section */}
        <FAQSection />

        {/* About Section */}
        <section id="about" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Built with{' '}
                <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  Modern Tech
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                This chatbot is built using Next.js 16, React 19, TypeScript, Tailwind CSS,
                shadcn/ui, and Framer Motion. Designed to be fast, responsive, and beautiful.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-4">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'].map(
                  (tech) => (
                    <div
                      key={tech}
                      className="px-4 py-2 bg-background border rounded-full text-sm font-medium"
                    >
                      {tech}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
