
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Code2, Target, Award, Users, Briefcase, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Briefcase, label: "Years Experience", value: "3+" },
    { icon: Code2, label: "Projects Completed", value: "10+" },
    { icon: Users, label: "Workshop Students", value: "300+" },
    { icon: Award, label: "Leadership Roles", value: "5+" }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-muted-foreground text-lg">Passionate software developer dedicated to excellence</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect border-white/20 hover:border-neon-blue/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-neon-blue/20 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-neon-blue/20 border border-neon-blue/30 mr-4">
                    <GraduationCap className="h-6 w-6 text-neon-blue" />
                  </div>
                  <h3 className="text-2xl font-semibold">Professional Summary</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Detail-oriented software developer with a strong academic foundation and hands-on experience 
                    in full-stack and modern web technologies. Passionate about building scalable, user-focused 
                    solutions like Eventure, an AI-powered chatbot platform.
                  </p>
                  <p>
                    As Head of Fusion Tech Club, I've led workshops for 300+ students, fostering collaboration 
                    and continuous learning. I combine technical expertise with creativity to solve real-world 
                    problems effectively.
                  </p>
                  <p>
                    Currently pursuing Master of Computer Applications (MCA) at Aurora's Post Graduate College 
                    (Osmania University), building upon a solid foundation in Computer Applications with strong 
                    focus on emerging technologies and innovation.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {['Leadership', 'Problem Solving', 'Team Collaboration', 'Innovation', 'Communication', 'Adaptability'].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 text-sm bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Goals & Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-effect border-white/20 hover:border-neon-purple/50 transition-all duration-300 group hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-5 w-5 text-neon-purple mr-3" />
                  <h4 className="font-semibold">Mission</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Leveraging technology to create impactful solutions that streamline processes, 
                  enhance user experiences, and drive innovation in the tech community.
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-white/20 hover:border-neon-green/50 transition-all duration-300 group hover:scale-[1.02]">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-5 w-5 text-neon-green mr-3" />
                  <h4 className="font-semibold">Values</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Commitment to continuous learning, collaborative environments, ethical practices, 
                  and fostering innovation through knowledge sharing and mentorship.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="glass-effect border-white/20 hover:border-neon-blue/50 transition-all duration-300 text-center group hover:shadow-lg hover:shadow-neon-blue/20">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-neon-blue mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-neon-blue mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
