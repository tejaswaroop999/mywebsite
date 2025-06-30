"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/80" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Teja Swaroop
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Full Stack Developer & AI Specialist crafting exceptional digital
          experiences with cutting-edge technology and innovative solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a href="#projects">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            View My Work
          </Button>
          </a>
          <a href="doc/tejaswaroop.pdf" download>
          <Button variant="outline" size="lg" >
            Download Resume
          </Button>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href="https://github.com/tejaswaroop999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/10 backdrop-blur-sm"
            >
              <Github className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/tejaswaroop999/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/10 backdrop-blur-sm"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
          </a>
          <a
            href="mailto:ktejaswaroop999@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full bg-background/10 backdrop-blur-sm"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="animate-bounce"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
