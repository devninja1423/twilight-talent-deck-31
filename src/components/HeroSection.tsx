
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Elegant Floating Background Elements */}
      <div className="absolute inset-0">
        {/* Slow floating orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-4 h-4 bg-neon-blue/20 rounded-full blur-sm"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-3 h-3 bg-neon-purple/20 rounded-full blur-sm"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-5 h-5 bg-neon-green/15 rounded-full blur-sm"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.15, 0.5, 0.15]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-6 h-6 bg-neon-blue/10 rounded-full blur-md"
          animate={{ 
            y: [0, -30, 0],
            x: [0, -15, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        />

        {/* Additional subtle geometric shapes */}
        <motion.div 
          className="absolute top-1/3 left-1/4 w-2 h-8 bg-gradient-to-b from-neon-purple/10 to-transparent"
          animate={{ 
            rotate: [0, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/3 w-8 h-2 bg-gradient-to-r from-neon-blue/10 to-transparent"
          animate={{ 
            rotate: [0, -360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        />
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Maanya Rajan
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer & Software Engineer
            <br />
            <span className="text-neon-blue">Building Scalable Solutions with Modern Technologies</span>
          </motion.p>

          <motion.div 
            className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="leading-relaxed">
              Aspiring Software Engineer with expertise in full-stack development, specializing in React, Node.js, and cloud technologies. 
              Passionate about creating innovative solutions and delivering high-quality software products with strong problem-solving skills 
              and collaborative teamwork experience.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="https://github.com/MaanyaRajan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect border border-white/20 hover:border-neon-blue/50 transition-all duration-300 group hover:scale-110 hover:shadow-2xl hover:shadow-neon-blue/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-neon-blue transition-colors duration-300" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/maanya-rajan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-effect border border-white/20 hover:border-neon-blue/50 transition-all duration-300 group hover:scale-110 hover:shadow-2xl hover:shadow-neon-blue/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-neon-blue transition-colors duration-300" />
            </motion.a>
            
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="p-3 rounded-full glass-effect border border-white/20 hover:border-neon-blue/50 transition-all duration-300 group hover:scale-110 hover:shadow-2xl hover:shadow-neon-blue/50"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-neon-blue transition-colors duration-300" />
            </motion.button>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/50"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/50 group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            className="animate-bounce cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={() => scrollToSection('about')}
          >
            <ChevronDown className="mx-auto h-8 w-8 text-neon-blue hover:text-neon-purple transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
