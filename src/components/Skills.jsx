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
    <section id="skills" className="py-20 section-bg">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 font-mono text-xs tracking-widest uppercase mb-2">
            &gt; skills --list
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {skills.map(({ name, icon, level }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-bg card-border border rounded-xl p-5 card-hover"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <span className="font-semibold text-sm md:text-base">{name}</span>
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
