import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Sparkles, Zap, Code } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="home" className="relative pt-16 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-32 right-20 text-white/20"
        animate={floatingAnimation}
      >
        <Code className="w-8 h-8" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 text-white/20"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 1 }
        }}
      >
        <Zap className="w-6 h-6" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-32 text-white/20"
        animate={{
          ...floatingAnimation,
          transition: { ...floatingAnimation.transition, delay: 2 }
        }}
      >
        <Sparkles className="w-7 h-7" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Leader en solutions technologiques en Afrique
              </motion.div>
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-white leading-tight"
                variants={itemVariants}
              >
                Transformez votre entreprise avec{' '}
                <motion.span
                  className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent"
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
              </motion.h1>
              
              <motion.p 
                className="text-xl text-blue-100 leading-relaxed"
                variants={itemVariants}
              >
                Nous offrons des formations de pointe, développons des logiciels sur mesure et facilitons l'intégration d'API pour propulser votre business vers le futur numérique.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold text-lg group shadow-2xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Démarrer votre projet
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              
              <motion.button
                onClick={scrollToServices}
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg group backdrop-blur-sm hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Play className="mr-2 w-5 h-5" />
                Découvrir nos services
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20"
              variants={itemVariants}
            >
              {[
                { number: "100+", label: "Projets réalisés", color: "text-blue-400" },
                { number: "500+", label: "Étudiants formés", color: "text-green-400" },
                { number: "50+", label: "Entreprises clientes", color: "text-purple-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className={`text-3xl font-bold ${stat.color}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div
              className="relative"
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-green-400 rounded-3xl transform rotate-6 opacity-20"
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="space-y-6">
                  {[
                    { icon: CheckCircle, title: "Formation Certifiante", desc: "Programmes adaptés au marché", color: "blue" },
                    { icon: CheckCircle, title: "Développement Sur Mesure", desc: "Solutions personnalisées", color: "green" },
                    { icon: CheckCircle, title: "Intégration d'API", desc: "Connectivité optimale", color: "purple" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + index * 0.3 }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div
                        className={`w-12 h-12 bg-${item.color}-500/20 rounded-lg flex items-center justify-center backdrop-blur-sm`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                      </motion.div>
                      <div>
                        <div className="font-semibold text-white">{item.title}</div>
                        <div className="text-sm text-blue-200">{item.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;