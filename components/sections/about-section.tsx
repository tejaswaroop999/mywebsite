'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const stats = [
  { value: 3, label: 'Years Experience', suffix: '+', emoji: '💼' },
  { value: 13, label: 'Projects Completed', suffix: '+', emoji: '🚀' },
  { value: 25, label: 'Happy Clients', suffix: '+', emoji: '😊' },
  { value: 6, label: 'Awards Won', suffix: '+', emoji: '🏆' },
];

function CounterAnimation({ value, duration = 2000 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = progress * value;

      // 1 decimal precision
      setCount(Number(current.toFixed(1)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, duration]);

  return (
    <motion.span
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {count}
    </motion.span>
  );
}

export default function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative solutions that bridge technology and user experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                <img
                  src="/images/profilepic.jpg"
                  alt="Teja Swaroop"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Full Stack Developer & AI Specialist</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 3 years of experience in web development and artificial intelligence, 
                I specialize in creating scalable, user-centric applications that solve real-world problems. 
                My expertise spans from modern frontend frameworks to complex backend architectures and AI integration.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about staying at the forefront of technology trends and continuously 
                learning new tools and methodologies to deliver exceptional results.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Python', 'AI/ML', 'Node.js'].map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition">
                  <div className="text-4xl font-bold text-primary mb-2 flex items-center justify-center gap-1">
                    <span>{stat.emoji}</span>
                    {inView && <CounterAnimation value={stat.value} />}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
