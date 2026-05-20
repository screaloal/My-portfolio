import { motion } from 'framer-motion'

const skills = [
  {
    name: 'Python',
    icon: '🐍',
    level: 75,
    color: 'from-green-400 to-emerald-500',
    desc: 'Scripting, automation & AI',
  },
  {
    name: 'Cybersecurity',
    icon: '🔐',
    level: 70,
    color: 'from-blue-400 to-cyan-500',
    desc: 'Security concepts & practices',
  },
  {
    name: 'Artificial Intelligence',
    icon: '🤖',
    level: 65,
    color: 'from-purple-400 to-violet-500',
    desc: 'ML concepts & AI tools',
  },
  {
    name: 'Git & GitHub',
    icon: '🗂️',
    level: 80,
    color: 'from-orange-400 to-amber-500',
    desc: 'Version control & collaboration',
  },
  {
    name: 'HTML & CSS',
    icon: '🌐',
    level: 85,
    color: 'from-pink-400 to-rose-500',
    desc: 'Web structure & styling',
  },
  {
    name: 'React & Vite',
    icon: '⚡',
    level: 60,
    color: 'from-cyan-400 to-blue-500',
    desc: 'Modern frontend development',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 section-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-green-400 font-mono text-xs tracking-widest uppercase">
            &gt; skills --list
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
            Technologies and concepts I work with to build secure and modern solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map(({ name, icon, level, color, desc }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-bg card-border border rounded-2xl p-5 card-hover"
            >
              {/* Top row */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                  {icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm">{name}</h3>
                    <span className={`text-xs font-bold font-mono bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                      {level}%
                    </span>
                  </div>
                  <p className="text-muted text-xs mt-0.5">{desc}</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`h-full rounded-full bg-gradient-to-r ${color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
