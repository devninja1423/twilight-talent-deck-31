
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/MaanyaRajan", label: "GitHub", color: "hover:text-neon-blue" },
    { icon: Linkedin, href: "https://linkedin.com/in/maanya-rajan", label: "LinkedIn", color: "hover:text-neon-purple" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-neon-green" },
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Connect</h2>
          <p className="text-muted-foreground text-lg">Ready to bring your ideas to life? Let's talk!</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-neon-blue/30 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-neon-blue" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">maanyarajan9@gmail.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-neon-purple/30 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-neon-purple" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+91 9390490799</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center group"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 bg-neon-green/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-neon-green/30 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-neon-green" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center border border-white/10 transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg hover:shadow-current/20`}
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect border-white/20 hover:border-neon-blue/30 transition-all duration-300">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative group">
                      <Input
                        type="text"
                        name="name"
                        placeholder=" "
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="peer bg-transparent border-white/20 focus:border-neon-blue transition-all duration-300"
                      />
                      <label className="absolute left-3 -top-2.5 bg-background px-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-blue">
                        Your Name
                      </label>
                    </div>

                    <div className="relative group">
                      <Input
                        type="email"
                        name="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="peer bg-transparent border-white/20 focus:border-neon-blue transition-all duration-300"
                      />
                      <label className="absolute left-3 -top-2.5 bg-background px-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-blue">
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="relative group">
                    <Input
                      type="text"
                      name="subject"
                      placeholder=" "
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="peer bg-transparent border-white/20 focus:border-neon-blue transition-all duration-300"
                    />
                    <label className="absolute left-3 -top-2.5 bg-background px-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-blue">
                      Subject
                    </label>
                  </div>

                  <div className="relative group">
                    <Textarea
                      name="message"
                      placeholder=" "
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="peer bg-transparent border-white/20 focus:border-neon-blue transition-all duration-300 resize-none"
                    />
                    <label className="absolute left-3 -top-2.5 bg-background px-2 text-sm text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-neon-blue">
                      Your Message
                    </label>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-semibold py-6 text-lg rounded-lg transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                      ) : (
                        <Send className="w-5 h-5 mr-2" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
