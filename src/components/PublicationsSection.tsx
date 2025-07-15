
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { BookOpen, ExternalLink, Calendar, Users } from 'lucide-react';

const publications = [
  {
    title: "Machine Learning Approaches for Real-time Data Processing",
    journal: "Journal of Computer Science",
    date: "2023",
    authors: ["Your Name", "Dr. Smith", "Dr. Johnson"],
    abstract: "This paper explores novel machine learning approaches for processing large-scale real-time data...",
    url: "#",
    citations: 24
  },
  {
    title: "Scalable Web Architecture Patterns for Modern Applications",
    journal: "IEEE Software Engineering",
    date: "2022",
    authors: ["Your Name", "Dr. Wilson"],
    abstract: "A comprehensive study of architectural patterns that enable web applications to scale...",
    url: "#",
    citations: 18
  },
  {
    title: "AI-Driven User Experience Optimization",
    journal: "ACM Transactions on Interactive Systems",
    date: "2022",
    authors: ["Your Name", "Dr. Brown", "Dr. Davis"],
    abstract: "Investigation into how artificial intelligence can be leveraged to optimize user experiences...",
    url: "#",
    citations: 31
  }
];

const PublicationsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Publications</h2>
          <p className="text-muted-foreground text-lg">Research contributions and academic work</p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-effect border-white/20 hover:border-neon-purple/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-neon-purple/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-6 w-6 text-neon-purple mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-bold mb-1 group-hover:text-neon-purple transition-colors duration-300">
                          {publication.title}
                        </h3>
                        <p className="text-neon-blue font-medium">{publication.journal}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <div className="flex items-center text-sm text-muted-foreground mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {publication.date}
                      </div>
                      <div className="text-sm text-neon-green">
                        {publication.citations} citations
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center mb-3 text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    {publication.authors.join(", ")}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {publication.abstract}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-neon-purple/50 text-neon-purple hover:bg-neon-purple hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Paper
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
