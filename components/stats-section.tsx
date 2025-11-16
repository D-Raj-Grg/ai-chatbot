'use client';

import { motion } from 'framer-motion';
import { Users, MessageSquare, Clock, Zap } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Active Users',
    description: 'Trusted by users worldwide',
  },
  {
    icon: MessageSquare,
    value: '10M+',
    label: 'Messages Sent',
    description: 'Conversations powered daily',
  },
  {
    icon: Clock,
    value: '< 2s',
    label: 'Average Response',
    description: 'Lightning-fast AI replies',
  },
  {
    icon: Zap,
    value: '99.9%',
    label: 'Uptime',
    description: 'Reliable and always available',
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

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 mb-4">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-muted-foreground text-sm">
                  {stat.description}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
