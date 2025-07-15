
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Shield, ExternalLink, Calendar, Building } from 'lucide-react';

const certifications = [
  {
    name: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    expiryDate: "2026",
    credentialId: "AWS-SAP-123456",
    logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
    skills: ["Cloud Architecture", "AWS Services", "DevOps", "Security"],
    verifyUrl: "#"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    expiryDate: "2025",
    credentialId: "GCP-PD-789012",
    logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
    skills: ["GCP Services", "Kubernetes", "Container Orchestration"],
    verifyUrl: "#"
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2022",
    expiryDate: "2025",
    credentialId: "CKA-345678",
    logo: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop",
    skills: ["Kubernetes", "Container Management", "Cluster Administration"],
    verifyUrl: "#"
  },
  {
    name: "MongoDB Developer Associate",
    issuer: "MongoDB University",
    date: "2022",
    expiryDate: "2025",
    credentialId: "MDB-DA-901234",
    logo: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop",
    skills: ["MongoDB", "Database Design", "Query Optimization"],
    verifyUrl: "#"
  },
  {
    name: "React Developer Certification",
    issuer: "Meta",
    date: "2021",
    expiryDate: "2024",
    credentialId: "META-RD-567890",
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop",
    skills: ["React", "JavaScript", "Frontend Development"],
    verifyUrl: "#"
  },
  {
    name: "Certified Ethical Hacker",
    issuer: "EC-Council",
    date: "2021",
    expiryDate: "2024",
    credentialId: "CEH-234567",
    logo: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100&h=100&fit=crop",
    skills: ["Cybersecurity", "Penetration Testing", "Security Auditing"],
    verifyUrl: "#"
  }
];

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Certifications</h2>
          <p className="text-muted-foreground text-lg">Professional credentials and expertise validation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <Card className="glass-effect border-white/20 hover:border-neon-green/50 transition-all duration-300 h-full group-hover:shadow-2xl group-hover:shadow-neon-green/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white/10 p-2 mr-4 flex-shrink-0">
                      <img
                        src={cert.logo}
                        alt={cert.issuer}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold group-hover:text-neon-green transition-colors duration-300 line-clamp-2">
                        {cert.name}
                      </h3>
                      <div className="flex items-center text-sm text-neon-blue">
                        <Building className="h-3 w-3 mr-1" />
                        {cert.issuer}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Issued:</span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {cert.date}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Expires:</span>
                      <span className={`${new Date(cert.expiryDate) > new Date() ? 'text-neon-green' : 'text-red-400'}`}>
                        {cert.expiryDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {cert.skills.slice(0, 2).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-neon-green/20 text-neon-green text-xs rounded-full border border-neon-green/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-2 py-1 bg-muted text-xs rounded-full text-muted-foreground">
                        +{cert.skills.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-neon-green/50 text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 text-xs"
                    >
                      <Shield className="h-3 w-3 mr-1" />
                      Verify
                    </Button>
                    <motion.div
                      className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: 10 }}
                      whileHover={{ x: 0 }}
                    >
                      Click for details
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certification Details Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-background border border-white/20 rounded-lg max-w-md w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  <div className="flex items-center mb-6">
                    <img
                      src={selectedCert.logo}
                      alt={selectedCert.issuer}
                      className="w-16 h-16 rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold gradient-text mb-1">
                        {selectedCert.name}
                      </h3>
                      <p className="text-neon-blue font-medium">{selectedCert.issuer}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Credential ID:</span>
                      <span className="font-mono text-sm">{selectedCert.credentialId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Issued:</span>
                      <span>{selectedCert.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expires:</span>
                      <span className={new Date(selectedCert.expiryDate) > new Date() ? 'text-neon-green' : 'text-red-400'}>
                        {selectedCert.expiryDate}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-neon-green/20 text-neon-green text-sm rounded-full border border-neon-green/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-neon-green hover:bg-neon-green/80 text-black">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Verify Credential
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;
