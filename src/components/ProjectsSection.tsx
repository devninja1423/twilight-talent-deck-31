
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye, Code, Bot, Leaf, Atom } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Eventure - Event Management System with AI Chatbot",
    description: "Full-stack web application designed to streamline, plan, schedule and organize events with AI assistance",
    longDescription: "Eventure is a comprehensive Event Management System that combines traditional event planning with cutting-edge AI technology. The platform features a built-in AI Chatbot Assistant that provides real-time updates and user-customizable features. Built with modern web technologies including Vite, TailwindCSS, TypeScript, React, Shadcn-UI, and GitHub, deployed on Vercel for optimal performance and scalability.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    tech: ["Vite", "TailwindCSS", "TypeScript", "React", "Shadcn-UI", "GitHub", "Vercel"],
    liveUrl: "https://vibrant-eventure.vercel.app/",
    githubUrl: "#",
    category: "Full Stack",
    icon: Bot
  },
  {
    id: 2,
    title: "O2 Plants - Web Application",
    description: "Online resource platform providing scientific data and guidance for plant health and wellness",
    longDescription: "O2 Plants is an innovative web application that serves as a comprehensive online resource for plant enthusiasts. The platform provides detailed scientific data, proper guidance on plant health and wellness, and growth optimization insights for plant care and maintenance. Features include a store functionality enabling users to purchase and manage a variety of oxygen plants with detailed information for each species.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop",
    tech: ["HTML", "CSS", "JavaScript", "React", "Firebase", "Node.js", "MySQL"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Application",
    icon: Leaf
  },
  {
    id: 3,
    title: "Graphical H2O Model - C Programming",
    description: "Interactive educational representation of water cycle using graphical programming",
    longDescription: "An innovative C programming project that visually stimulates the stages of the water cycle using advanced graphical representation techniques. This educational tool provides an interactive and engaging way to understand the water cycle processes through visual simulation. The project demonstrates proficiency in C graphics programming and educational software development, making complex scientific concepts accessible through interactive visualization.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=500&h=300&fit=crop",
    tech: ["C Programming", "Graphics Library", "Educational Design"],
    liveUrl: "#",
    githubUrl: "#",
    category: "Educational Software",
    icon: Atom
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="py-20 px-6 bg-slate-900/20">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">Showcasing technical expertise through real-world applications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <Card className="glass-effect border-white/20 hover:border-neon-blue/50 transition-all duration-300 overflow-hidden h-full group-hover:shadow-2xl group-hover:shadow-neon-blue/20">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <project.icon className="h-8 w-8 text-neon-blue" />
                  </div>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-2 py-1 bg-neon-blue/80 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-neon-blue transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-muted text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-muted text-xs rounded-full text-muted-foreground">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 border-neon-blue/50 text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      View More
                    </Button>
                    {project.liveUrl !== "#" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-neon-green/50 text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-background border border-white/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <selectedProject.icon className="h-8 w-8 text-neon-blue mr-3" />
                    <h3 className="text-2xl font-bold gradient-text">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    {selectedProject.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map((tech: string, i: number) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-sm rounded-full border border-neon-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {selectedProject.liveUrl !== "#" && (
                      <Button 
                        className="bg-neon-blue hover:bg-neon-blue/80 text-black"
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white">
                      <Code className="h-4 w-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
