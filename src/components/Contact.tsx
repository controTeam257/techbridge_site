import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'envoi avec délai
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
    setFormData({ name: '', email: '', company: '', service: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Contactez-
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              nous
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Prêt à démarrer votre projet ? Notre équipe est là pour vous accompagner dans votre transformation digitale.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Form */}
          <motion.div
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <MessageSquare className="w-6 h-6 mr-2 text-blue-600" />
                Demande de Devis
              </motion.h3>
              
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: -20 }}
                    className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    </motion.div>
                    <span className="text-green-800">Votre message a été envoyé avec succès !</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <motion.input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nom de votre entreprise"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service souhaité *
                    </label>
                    <motion.select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="">Sélectionnez un service</option>
                      <option value="formation">Formation</option>
                      <option value="developpement">Développement logiciel</option>
                      <option value="api">Intégration API</option>
                      <option value="conseil">Conseil technologique</option>
                    </motion.select>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet ou vos besoins..."
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center group shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  {isLoading ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      Envoyer le message
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Send className="w-5 h-5" />
                      </motion.div>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Contact Details */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl"
              />
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/20">
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Globe className="w-6 h-6 mr-2 text-blue-600" />
                  Informations de Contact
                </motion.h3>
                
                <div className="space-y-6">
                  {[
                    { icon: Mail, title: "Email", details: ["contact@techbridge-africa.com", "info@techbridge-africa.com"], color: "blue" },
                    { icon: Phone, title: "Téléphone", details: ["+237 6XX XXX XXX", "+237 6XX XXX XXX"], color: "green" },
                    { icon: MapPin, title: "Adresse", details: ["Douala, Cameroun", "Yaoundé, Cameroun"], color: "purple" }
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start space-x-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br from-${contact.color}-500 to-${contact.color}-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <contact.icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors">
                          {contact.title}
                        </h4>
                        {contact.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 group-hover:text-gray-700 transition-colors">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-xl"
                animate={{
                  background: [
                    "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
                    "linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%)",
                    "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative rounded-3xl shadow-xl p-8 text-white">
                <motion.h3
                  className="text-2xl font-bold mb-6 flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Clock className="w-6 h-6 mr-2" />
                  Horaires d'ouverture
                </motion.h3>
                
                <div className="space-y-3">
                  {[
                    { day: "Lundi - Vendredi", hours: "8h00 - 18h00" },
                    { day: "Samedi", hours: "9h00 - 14h00" },
                    { day: "Dimanche", hours: "Fermé" }
                  ].map((schedule, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      <span>{schedule.day}</span>
                      <span className="font-semibold">{schedule.hours}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="mt-6 p-4 bg-white/20 backdrop-blur-sm rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-sm">
                    <strong>Support d'urgence :</strong> Disponible 24h/7j pour nos clients premium
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;