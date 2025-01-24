'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="omnie" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-center">O mnie</h2>
          <div className="bg-slate-700 rounded-2xl p-8 shadow-xl">
            <p className="text-gray-300 leading-relaxed">
              Tutaj będzie Twój opis...
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 