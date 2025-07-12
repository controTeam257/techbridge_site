import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Zap, ArrowRight, Users, Laptop, Database, Star, Award, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Formations Professionnelles",
      description: "Programmes de formation certifiants en développement web, mobile et data science adaptés aux besoins du marché africain.",
      features: [
        "Formation React, Node.js, Python",
        "Certification internationale",
        "Projets pratiques",
        "Suivi personnalisé"
      ],
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Développement de Logiciels",
      description: "Création d'applications web et mobile sur mesure pour digitaliser et optimiser vos processus métier.",
      features: [
        "Applications web responsive",
        "Apps mobiles natives",
        "Systèmes de gestion",
        "E-commerce"
      ],
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Intégration d'API",
      description: "Connectez vos systèmes et automatisez vos workflows avec nos solutions d'intégration API robustes.",
      features: [
        "API REST & GraphQL",
        "Intégrations tierces",
        "Automatisation workflow",
        "Documentation complète"
      ],
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    }
  ];

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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
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
            Nos Services{' '}
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
              Expertises
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            TechBridge Africa vous accompagne dans votre transformation digitale avec des solutions innovantes et adaptées à vos besoins spécifiques.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <div className="relative p-8 h-full">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className={`inline-flex items-center text-${service.color}-600 font-semibold group-hover:text-${service.color}-700 transition-colors`}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    En savoir plus
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="grid md:grid-cols-3 gap-8 text-center relative">
            {[
              { icon: Users, title: "Équipe Experte", desc: "Développeurs seniors et formateurs certifiés", color: "blue" },
              { icon: Laptop, title: "Technologies Modernes", desc: "Stack technologique à jour et performant", color: "green" },
              { icon: Database, title: "Support 24/7", desc: "Accompagnement continu de vos projets", color: "purple" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}
                  whileHover={{ rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </motion.div>
                <motion.div
                  className="text-2xl font-bold text-gray-900 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {item.title}
                </motion.div>
                <div className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Preview */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex justify-center items-center space-x-2 mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              >
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </motion.div>
            ))}
          </motion.div>
          <p className="text-lg text-gray-600 italic">
            "TechBridge Africa a transformé notre entreprise avec des solutions innovantes"
          </p>
          <p className="text-sm text-gray-500 mt-2">- Client satisfait</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;