import React from 'react';
import { motion } from 'framer-motion';
import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Code className="w-6 h-6 text-white" />
              </motion.div>
              <span className="text-xl font-bold">TechBridge Africa</span>
            </motion.div>
            
            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Votre partenaire technologique de confiance pour la transformation digitale en Afrique. Nous formons, développons et connectons.
            </motion.p>
            
            <div className="flex space-x-4">
              {[
                { icon: Facebook, color: "hover:bg-blue-600", href: "#" },
                { icon: Twitter, color: "hover:bg-blue-400", href: "#" },
                { icon: Linkedin, color: "hover:bg-blue-700", href: "#" },
                { icon: Github, color: "hover:bg-gray-700", href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center ${social.color} transition-colors duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'À Propos', 'Contact'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    onClick={() => scrollToSection(item === 'Accueil' ? 'home' : item === 'À Propos' ? 'about' : item.toLowerCase())}
                    className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                    />
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {[
                "Formation React & Node.js",
                "Développement Web",
                "Applications Mobile",
                "Intégration API",
                "Conseil Technologique"
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"
                    />
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info & Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-4 mb-6">
              {[
                { icon: Mail, text: "contact@techbridge-africa.com", color: "text-blue-400" },
                { icon: Phone, text: "+237 6XX XXX XXX", color: "text-green-400" },
                { icon: MapPin, text: "Douala & Yaoundé, Cameroun", color: "text-purple-400" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                >
                  <contact.icon className={`w-5 h-5 ${contact.color}`} />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Newsletter */}
            <motion.div
              className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm text-gray-300 mb-3">Restez informé de nos dernières actualités</p>
              <div className="flex">
                <motion.input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-r-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="text-gray-400 text-sm flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              © 2024 TechBridge Africa. Tous droits réservés. Fait avec{' '}
              <motion.span
                className="mx-1"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              en Afrique
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-6 text-sm">
                {["Politique de confidentialité", "Conditions d'utilisation", "Mentions légales"].map((link, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                    whileHover={{ y: -2 }}
                  >
                    {link}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                    />
                  </motion.a>
                ))}
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;