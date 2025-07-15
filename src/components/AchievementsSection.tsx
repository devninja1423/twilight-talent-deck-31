
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Trophy, Award, Star, Medal, Users, BookOpen } from 'lucide-react';

const achievements = [
  {
    title: "Knowledge Sharing Head",
    organization: "Fusion Tech Club",
    date: "Current",
    description: "Leading knowledge sharing initiatives, exchanging ideas, resources and fostering effective collaboration and productive learning environment for 300+ students.",
    icon: Users,
    color: "neon-blue"
  },
  {
    title: "Android App Development Workshop Leader",
    organization: "Fusion Tech Club",
    date: "2024",
    description: "Organized and conducted comprehensive Android App Development workshops, resulting in 25% increase in club participation and enhanced student engagement.",
    icon: Award,
    color: "neon-green"
  },
  {
    title: "1st Place - All India Football Tournament Championship",
    organization: "AOC Tournament",
    date: "2023",
    description: "Secured first place in the prestigious All India Football Tournament Championship held at AOC, demonstrating exceptional teamwork and athletic excellence.",
    icon: Trophy,
    color: "neon-purple"
  },
  {
    title: "Top Finalist - Project Presentation",
    organization: "Charles Babbage Day",
    date: "2023",
    description: "Achieved top finalist position out of 50+ teams for outstanding project presentation, showcasing innovative technical solutions and presentation skills.",
    icon: Medal,
    color: "neon-blue"
  },
  {
    title: "Telangana State Representative",
    organization: "All India Women's Football Championship",
    date: "2022",
    description: "Selected to represent Telangana State in the All India Women's Football Championship, demonstrating exceptional athletic ability and state-level recognition.",
    icon: Star,
    color: "neon-green"
  },
  {
    title: "Research Publication Author",
    organization: "IIP Proceedings",
    date: "2022",
    description: "Published research paper on 'Internet Of Things in Futuristic Trends in IoT' (ISBN – 978-93-6252-786-8), contributing to academic knowledge in emerging technologies.",
    icon: BookOpen,
    color: "neon-purple"
  }
];

const AchievementsSection = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Achievements & Leadership</h2>
          <p className="text-muted-foreground text-lg">Recognition for excellence and contributions in academics, leadership, and sports</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                scale: 1.05
              }}
              className="group perspective-1000"
            >
              <Card className="glass-effect border-white/20 hover:border-white/40 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-current/20 transform-gpu">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${achievement.color}/20 border-2 border-${achievement.color}/30 flex items-center justify-center group-hover:animate-bounce`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <achievement.icon className={`h-8 w-8 text-${achievement.color}`} />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-current group-hover:to-accent group-hover:bg-clip-text transition-all duration-300">
                    {achievement.title}
                  </h3>

                  <div className={`text-${achievement.color} font-medium mb-2`}>
                    {achievement.organization}
                  </div>

                  <div className="text-sm text-muted-foreground mb-3">
                    {achievement.date}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  <motion.div
                    className="mt-4 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
