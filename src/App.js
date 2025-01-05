import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code, Database, Server } from 'lucide-react';
import CustomCursor from './CustomCursor';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    'Technologies': ['Java SE', 'Java EE', 'Python', 'SQL', 'MongoDB', 'React.js'],
    'Frameworks': ['Spring Boot', 'SDK', 'GraphQL', 'Express.js', 'Node.js'],
    'Tools': ['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Git']
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0f172a]/95 backdrop-blur-md' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold gradient-text hover-effect"
            >
              SM
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover-effect text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="network-bg absolute inset-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              Shweta Mate
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              Software Engineer & Full Stack Developer
            </p>
            <div className="flex justify-center space-x-6">
              {[
                { Icon: Github, link: 'https://github.com/yourusername' },
                { Icon: Linkedin, link: 'https://linkedin.com/in/yourusername' },
                { Icon: Mail, link: 'mailto:smate2@depaul.edu' }
              ].map(({ Icon, link }, index) => (
                <motion.a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover-effect glass-effect rounded-full"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 relative" id="skills">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-effect rounded-xl p-6 hover-effect"
              >
                <div className="flex items-center mb-6">
                  {index === 0 && <Code className="w-6 h-6 mr-3" />}
                  {index === 1 && <Database className="w-6 h-6 mr-3" />}
                  {index === 2 && <Server className="w-6 h-6 mr-3" />}
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={skill} className="glass-effect p-3 rounded-lg">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More sections can be added here */}
    </div>
  );
};

export default App;
