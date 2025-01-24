'use client'

import { motion } from 'framer-motion'

interface SkillBarProps {
  name: string
  level: number
  index: number
}

const SkillBar = ({ name, level, index }: SkillBarProps) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300">{name}</span>
        <span className="text-blue-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="h-full bg-blue-500 rounded-full"
        />
      </div>
    </div>
  )
}

export default SkillBar 