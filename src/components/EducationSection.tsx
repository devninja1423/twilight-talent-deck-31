
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Aurora's Post Graduate College",
    university: "Osmania University",
    location: "Hyderabad, India",
    period: "Expected 2026",
    status: "Pursuing",
    description: "Advanced studies in computer applications with focus on modern software development, algorithms, and emerging technologies.",
    achievements: ["Currently Enrolled", "Focus on Full-Stack Development", "AI/ML Specialization"]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bhavan's Vivekananda College",
    location: "Hyderabad, India", 
    period: "2021 - 2024",
    status: "Completed",
    description: "Comprehensive study in computer applications, programming fundamentals, and software development principles.",
    achievements: ["Strong Academic Foundation", "Programming Excellence", "Project Leadership"]
  },
  {
    degree: "Telangana State Board of Intermediate Education (TSBIE)",
    institution: "St. Ann's Junior College",
    location: "Hyderabad, India",
    period: "2019 - 2021",
    status: "Completed",
    description: "Intermediate education with strong foundation in mathematics and computer science fundamentals.",
    achievements: ["Mathematics Excellence", "Computer Science Foundation", "Academic Achievement"]
  }
];

const EducationSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <p className="text-muted-foreground text-lg">Academic journey and continuous learning</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple hidden md:block" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-20 ${
                index % 2 === 0 ? 'md:pr-8 md:mr-8' : 'md:pl-8 md:ml-8'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-background hidden md:block z-10" />

              <Card className={`glass-effect border-white/20 hover:border-neon-blue/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/20 ${
                index % 2 === 0 ? 'md:ml-auto' : ''
              } md:w-5/12`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <GraduationCap className="h-6 w-6 text-neon-blue mr-2" />
                      <div className="bg-neon-blue/20 px-3 py-1 rounded-full">
                        <span className="text-sm font-medium text-neon-blue">{edu.status}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-foreground">{edu.degree}</h3>
                  <div className="flex items-center mb-2 text-neon-purple">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="font-medium">{edu.institution}</span>
                    {edu.university && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="text-muted-foreground">{edu.university}</span>
                      </>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">{edu.location}</div>

                  <p className="text-muted-foreground mb-4">{edu.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-neon-green">Key Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-neon-green/20 text-neon-green text-xs rounded-full border border-neon-green/30"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
