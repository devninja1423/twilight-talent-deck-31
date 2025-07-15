
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Code, Database, Globe, Smartphone, Brain, Wrench, Users, Target } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "neon-blue",
    skills: [
      { name: "Python", level: 85 },
      { name: "C & C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "TypeScript", level: 90 }
    ]
  },
  {
    title: "Web Development", 
    icon: Globe,
    color: "neon-purple",
    skills: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 88 },
      { name: "TailwindCSS", level: 85 }
    ]
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "neon-green",
    skills: [
      { name: "Shadcn-UI", level: 80 },
      { name: "SQL Database", level: 85 },
      { name: "GitHub", level: 90 },
      { name: "Backend APIs", level: 75 }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    color: "neon-blue",
    skills: [
      { name: "Microsoft Office", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Google Firebase", level: 80 },
      { name: "Git & GitHub", level: 88 }
    ]
  },
  {
    title: "Technical Concepts",
    icon: Brain,
    color: "neon-purple",
    skills: [
      { name: "OOPS", level: 85 },
      { name: "Data Structures & Algorithms", level: 80 },
      { name: "Unix", level: 75 },
      { name: "Distributed Systems", level: 70 }
    ]
  },
  {
    title: "Soft Skills",
    icon: Users,
    color: "neon-green",
    skills: [
      { name: "Leadership", level: 95 },
      { name: "Communication", level: 90 },
      { name: "Problem Solving", level: 88 },
      { name: "Team Collaboration", level: 92 }
    ]
  },
  {
    title: "Additional Skills",
    icon: Target,
    color: "neon-blue",
    skills: [
      { name: "Creativity", level: 85 },
      { name: "Adaptability", level: 90 },
      { name: "Critical Thinking", level: 88 },
      { name: "Time Management", level: 85 }
    ]
  },
  {
    title: "Specialized Areas",
    icon: Smartphone,
    color: "neon-purple",
    skills: [
      { name: "Cyber Security", level: 75 },
      { name: "DBMS", level: 80 },
      { name: "Course Work Projects", level: 85 },
      { name: "Research & Development", level: 78 }
    ]
  }
];

const SkillCard = ({ category, index }: { category: any, index: number }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, index * 200 + 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  if (!isLoaded && isInView) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group"
      >
        <Card className="glass-effect border-white/20 h-full">
          <CardContent className="p-6">
            <div className="flex items-center mb-6">
              <Skeleton className="h-12 w-12 rounded-lg mr-4" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-8" />
                  </div>
                  <Skeleton className="h-2 w-full rounded-full" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (!isLoaded) {
    return <div ref={ref} className="h-80" />;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group"
    >
      <Card className="glass-effect border-white/20 hover:border-white/40 transition-all duration-500 h-full group-hover:shadow-2xl group-hover:shadow-current/20 relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br from-${category.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          initial={false}
        />
        
        <CardContent className="p-6 relative z-10">
          <motion.div 
            className="flex items-center mb-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          >
            <motion.div 
              className={`p-3 rounded-lg bg-${category.color}/20 border border-${category.color}/30 mr-4 group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 5 }}
            >
              <category.icon className={`h-6 w-6 text-${category.color}`} />
            </motion.div>
            <h3 className="text-xl font-semibold">{category.title}</h3>
          </motion.div>

          <div className="space-y-4">
            {category.skills.map((skill: any, skillIndex: number) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1 + skillIndex * 0.1 + 0.5
                }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <motion.span 
                    className="text-xs text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.1 + 0.8 }}
                  >
                    {skill.level}%
                  </motion.span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/70 rounded-full relative`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ 
                      duration: 1.2, 
                      delay: index * 0.1 + skillIndex * 0.1 + 0.7,
                      ease: "easeOut"
                    }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      animate={{ x: "200%" }}
                      transition={{
                        duration: 1.5,
                        delay: index * 0.1 + skillIndex * 0.1 + 1.2,
                        ease: "easeInOut",
                        repeat: 1
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Technical proficiency and soft skills developed through academic and practical experience
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
