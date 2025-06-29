'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'AI-Powered E-commerce Platform',
    description: 'A modern e-commerce platform with AI-driven product recommendations, dynamic pricing, and intelligent inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Next.js', 'AI/ML', 'PostgreSQL', 'Stripe'],
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-time Collaboration Tool',
    description: 'A Slack-inspired collaboration platform with real-time messaging, file sharing, and video conferencing capabilities.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    demo: '#',
    github: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Smart Finance Dashboard',
    description: 'An intelligent financial dashboard with expense tracking, investment analysis, and predictive budgeting features.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Redis'],
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Cryptocurrency Analytics',
    description: 'A real-time Bitcoin insights dashboard, featuring current price, historical trends, 24-hour metrics, market cap volume, sentiment analysis, and quick stats on circulating supply.',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Reactjs', 'javascript', 'API', 'Html', 'Css'],
    demo: '#',
    github: 'https://github.com/tejaswaroop999/Cryptocurrency-Analytics-Dashboard',
    featured: false,
  },
  {
    id: 5,
    title: 'Blockchain Voting System',
    description: 'A secure, transparent voting platform built on blockchain technology with advanced cryptographic features.',
    image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Solidity', 'Web3.js', 'React', 'Ethereum', 'IPFS'],
    demo: '#',
    github: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'IoT Home Automation',
    description: 'A comprehensive home automation system with IoT device integration and intelligent energy management.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Python', 'MQTT', 'Raspberry Pi', 'AWS IoT'],
    demo: '#',
    github: '#',
    featured: false,
  },
];

export default function ProjectsSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of innovative solutions and cutting-edge applications I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(project)}
                    className="w-full"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedProject?.title}</DialogTitle>
            </DialogHeader>
            {selectedProject && (
              <div className="space-y-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-muted-foreground">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}