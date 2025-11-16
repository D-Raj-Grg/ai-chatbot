'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl" />

          {/* Content card */}
          <div className="relative bg-gradient-to-br from-primary to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">Start Your Journey Today</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Experience the Future of AI?
              </h2>

              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join thousands of users already having intelligent conversations with our advanced AI chatbot. No credit card required to get started.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                >
                  <a href="/chat" className="flex items-center gap-2">
                    Start Chatting Now
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8"
                >
                  <a href="/#pricing">View Pricing</a>
                </Button>
              </div>

              <p className="text-sm text-white/70 mt-6">
                Free plan available • No credit card required • Start in seconds
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
