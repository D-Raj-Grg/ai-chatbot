'use client';

import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    avatar: '/avatars/sarah.jpg',
    initials: 'SJ',
    content:
      'This AI chatbot has revolutionized how our team handles customer inquiries. The response quality is exceptional and it integrates seamlessly with our workflow.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    company: 'DevStudio',
    avatar: '/avatars/michael.jpg',
    initials: 'MC',
    content:
      'As a developer, I appreciate the multiple model options and the transparency in reasoning. It has become an indispensable tool for debugging and brainstorming.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    company: 'Creative Media',
    avatar: '/avatars/emily.jpg',
    initials: 'ER',
    content:
      'The web search integration is a game-changer! I can get real-time information while maintaining natural conversations. Absolutely love it!',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Data Scientist',
    company: 'Analytics Pro',
    avatar: '/avatars/david.jpg',
    initials: 'DK',
    content:
      'The different AI models give me flexibility for various tasks. From quick queries to complex analysis, this chatbot handles it all with ease.',
    rating: 5,
  },
  {
    name: 'Jessica Taylor',
    role: 'Marketing Director',
    company: 'Brand Boost',
    avatar: '/avatars/jessica.jpg',
    initials: 'JT',
    content:
      'Our team productivity has increased significantly since we started using this AI assistant. The interface is intuitive and the responses are incredibly helpful.',
    rating: 5,
  },
  {
    name: 'Alex Thompson',
    role: 'Startup Founder',
    company: 'InnovateTech',
    avatar: '/avatars/alex.jpg',
    initials: 'AT',
    content:
      'This is exactly what we needed for our startup. The modern UI and powerful AI capabilities help us punch above our weight in customer support.',
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their
            workflow with our AI chatbot
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-white">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
