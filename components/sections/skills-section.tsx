'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Palette, Server, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    color: 'from-green-500 to-teal-600',
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Computer Vision', 'NLP', 'Data Analysis'],
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo', 'Mobile UI/UX'],
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    skills: ['AWS', 'Google Cloud', 'Docker', 'Kubernetes', 'Redis', 'Elasticsearch'],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Design & UX',
    icon: Palette,
    skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping', 'Design Systems', 'User Research'],
    color: 'from-pink-500 to-purple-600',
  },
];

export default function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-3`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="flex items-center p-2 rounded-md bg-background/50 group-hover:bg-primary/10 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                      <span className="text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}