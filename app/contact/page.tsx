'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Kontakt</h1>
          <div className="bg-slate-800 p-8 rounded-xl">
            {/* Formularz kontaktowy będzie dodany później */}
            <p className="text-gray-300">
              Formularz kontaktowy w przygotowaniu...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 