import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Globe, TrendingUp, Users, Lightbulb, Heart, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons la perfection dans chaque projet avec des standards de qualité élevés.",
      color: "blue"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Nous adoptons les dernières technologies pour offrir des solutions avant-gardistes.",
      color: "green"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "Notre mission est de contribuer à la transformation digitale de l'Afrique.",
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Croissance",
      description: "Nous accompagnons nos clients dans leur développement et leur réussite.",
      color: "orange"
    }
  ];

  const team = [
    {
      initials: "DA",
      title: "Développeurs Experts",
      description: "Une équipe de développeurs seniors maîtrisant les technologies modernes",
      color: "blue",
      icon: Users
    },
    {
      initials: "FC",
      title: "Formateurs Certifiés",
      description: "Des experts pédagogiques avec une expérience terrain solide",
      color: "green",
      icon: Lightbulb
    },
    {
      initials: "CP",
      title: "Consultants Projet",
      description: "Accompagnement stratégique pour la réussite de vos projets",
      color: "purple",
      icon: Heart
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

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-0 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                À Propos de{' '}
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
                  TechBridge Africa
                </motion.span>
              </motion.h2>
              
              <motion.p
                className="text-lg text-gray-600 leading-relaxed mb-6"
                variants={itemVariants}
              >
                TechBridge Africa est une entreprise technologique innovante basée en Afrique, spécialisée dans la formation professionnelle, le développement de logiciels et l'intégration d'API. Nous sommes passionnés par la transformation digitale du continent africain.
              </motion.p>
              
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                variants={itemVariants}
              >
                Depuis notre création, nous avons formé plus de 500 professionnels, développé plus de 100 applications et aidé des dizaines d'entreprises à digitaliser leurs processus. Notre équipe d'experts combine expertise technique et connaissance du marché local pour offrir des solutions parfaitement adaptées.
              </motion.p>
            </div>

            {/* Mission & Vision */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div
                className="border-l-4 border-blue-600 pl-6 bg-blue-50/50 p-4 rounded-r-lg"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-blue-600" />
                  Notre Mission
                </h3>
                <p className="text-gray-600">
                  Démocratiser l'accès aux technologies modernes en Afrique et former la nouvelle génération de talents technologiques.
                </p>
              </motion.div>
              
              <motion.div
                className="border-l-4 border-green-600 pl-6 bg-green-50/50 p-4 rounded-r-lg"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-green-600" />
                  Notre Vision
                </h3>
                <p className="text-gray-600">
                  Devenir le partenaire technologique de référence pour les entreprises africaines en croissance.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Values */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
              variants={itemVariants}
            >
              Nos Valeurs
            </motion.h3>
            
            <div className="grid gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    className="group relative"
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, x: 10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId={`value-bg-${index}`}
                    />
                    
                    <div className="relative flex items-start space-x-4 p-6 bg-gray-50 rounded-xl group-hover:bg-transparent transition-colors duration-300">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-lg flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                          {value.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Team Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Notre Équipe
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-${member.color}-50 to-${member.color}-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  
                  <div className={`relative bg-gradient-to-br from-${member.color}-50 to-${member.color}-100 rounded-2xl p-8 group-hover:bg-transparent transition-colors duration-300`}>
                    <motion.div
                      className="flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <motion.div
                        className={`w-20 h-20 bg-gradient-to-br from-${member.color}-600 to-${member.color}-700 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden`}
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <span className="text-white font-bold text-xl relative z-10">
                          {member.initials}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                      
                      <motion.div
                        className={`absolute w-8 h-8 bg-${member.color}-600 rounded-full flex items-center justify-center -top-2 -right-2 shadow-lg`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 200 }}
                        viewport={{ once: true }}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.h4
                      className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-gray-800 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {member.title}
                    </motion.h4>
                    
                    <motion.p
                      className="text-gray-600 text-center group-hover:text-gray-700 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      viewport={{ once: true }}
                    >
                      {member.description}
                    </motion.p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;