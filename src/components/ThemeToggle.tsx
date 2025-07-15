
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { Button } from './ui/button';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 1 }}
      className="fixed top-6 right-6 z-50"
    >
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="glass-effect border-white/20 hover:border-neon-blue/50 bg-background/80 backdrop-blur-lg transition-all duration-300 hover:scale-110"
      >
        <motion.div
          key={isDark ? 'moon' : 'sun'}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-neon-blue" />
          ) : (
            <Sun className="h-5 w-5 text-neon-green" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
};

export default ThemeToggle;
