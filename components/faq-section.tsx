'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: 'What AI models are available?',
    answer:
      'We offer access to multiple state-of-the-art AI models including GPT-4o, GPT-4o Mini, GPT-4 Turbo, and GPT-3.5 Turbo. Each model has different capabilities and response speeds, allowing you to choose the best option for your needs.',
  },
  {
    question: 'How does web search integration work?',
    answer:
      'Our web search integration allows the AI to access real-time information from the internet. When enabled, the chatbot can provide up-to-date facts, news, and information beyond its training data. All sources are cited and clickable for verification.',
  },
  {
    question: 'Can I upload files and images?',
    answer:
      'Yes! You can upload various file types including images, documents, and PDFs. The AI can analyze images, extract text from documents, and provide insights based on the content you share.',
  },
  {
    question: 'Is my data secure and private?',
    answer:
      'Absolutely. We take privacy seriously. Your conversations are encrypted in transit and at rest. We do not use your data to train models, and you have full control over your conversation history. You can delete your data at any time.',
  },
  {
    question: 'What is the difference between pricing plans?',
    answer:
      'The Free plan gives you 100 messages per month with GPT-3.5 Turbo. The Pro plan offers unlimited messages, access to all models, web search, file attachments, and priority support. Enterprise plans include custom solutions, dedicated support, and SLA guarantees.',
  },
  {
    question: 'Can I use this for commercial purposes?',
    answer:
      'Yes, both Pro and Enterprise plans allow commercial use. The Free plan is intended for personal use and evaluation. For high-volume commercial applications, we recommend our Enterprise plan with custom rate limits and dedicated infrastructure.',
  },
  {
    question: 'How accurate are the AI responses?',
    answer:
      'Our AI models are highly sophisticated but not perfect. They can occasionally make mistakes or provide outdated information. We recommend verifying critical information, especially when web search is disabled. With web search enabled, responses include citations for fact-checking.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time with no penalties. If you cancel, you\'ll continue to have access to paid features until the end of your billing period. You can also downgrade to the Free plan instead of canceling completely.',
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border rounded-lg overflow-hidden bg-background"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-lg pr-4">{question}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 flex-shrink-0 transition-transform duration-200',
            isOpen && 'transform rotate-180'
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 text-muted-foreground border-t">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our AI chatbot
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
