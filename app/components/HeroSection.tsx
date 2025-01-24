'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Animowane tło */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-blue-500/20 to-transparent rounded-full"
        />
      </div>

      <div className="text-center space-y-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white tracking-tight">
            <span className="text-blue-400">&lt;</span>
            <span className="relative inline-block">
              alwood
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </span>
            <span className="text-blue-400">/&gt;</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light">
            Software Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Pasjonat tworzenia oprogramowania, specjalizujący się w rozwiązaniach backendowych 
            i aplikacjach webowych. Skupiam się na pisaniu czystego, wydajnego kodu.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4"
        >
          <a
            href="#projekty"
            className="group relative px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 font-medium">Zobacz projekty</span>
            <motion.div
              className="absolute inset-0 bg-blue-400"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
          <a
            href="#kontakt"
            className="group relative px-8 py-3 border-2 border-blue-500 text-blue-400 hover:text-white rounded-lg transition-colors duration-300 overflow-hidden"
          >
            <span className="relative z-10 font-medium">Kontakt</span>
            <motion.div
              className="absolute inset-0 bg-blue-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-blue-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection 