'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">O mnie</h1>
          <div className="prose prose-invert">
            <p className="text-lg text-gray-300">
              Tutaj umieść swoją historię, doświadczenie i pasje...
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 