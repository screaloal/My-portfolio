'use client'
import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', icon: '🐍', level: 75 },
  { name: 'Cybersecurity', icon: '🔐', level: 70 },
  { name: 'Artificial Intelligence', icon: '🤖', level: 65 },
  { name: 'Git & GitHub', icon: '🗂️', level: 80 },
  { name: 'HTML & CSS', icon: '🌐', level: 85 },
  { name: 'Next.js', icon: '⚡', level: 60 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-2">
            &gt; skills --list
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map(({ name, icon, level }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-green-500/20 rounded-xl p-6 card-hover"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <span className="text-white font-semibold">{name}</span>
                </div>
                <span className="text-green-400 font-mono text-sm">{level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
