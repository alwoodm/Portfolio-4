'use client'

import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import SkillBar from './SkillBar'

const SkillsSection = () => {
  return (
    <section id="umiejetnosci" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center">Umiejętności</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Języki programowania */}
            <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Języki programowania
              </h3>
              {skills.languages.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>

            {/* Frontend */}
            <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Frontend
              </h3>
              {skills.frontend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>

            {/* Backend */}
            <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Backend
              </h3>
              {skills.backend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>

            {/* Narzędzia */}
            <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                Narzędzia
              </h3>
              {skills.tools.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection 