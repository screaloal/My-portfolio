import { motion } from 'framer-motion'

const stats = [
  { value: '3+', label: 'Projects' },
  { value: '10+', label: 'GitHub Repos' },
  { value: '5+', label: 'Skills' },
  { value: '100%', label: 'Passion' },
]

const badges = ['Python', 'Cybersecurity', 'AI', 'Git & GitHub']

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center section-bg hero-bg relative overflow-hidden">

      {/* Background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-xl mx-auto px-12 md:px-16 pt-28 pb-20 text-center">

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/5 backdrop-blur-sm mb-10"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-xs font-mono tracking-wider">
            Available for work
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-black leading-tight mb-6"
        >
          <span className="block">Bello</span>
          <span className="block gradient-text">Ayomipo</span>
          <span className="block">Ridwan</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm font-mono text-blue-400 mb-6 tracking-wider"
        >
          {'>'} Cybersecurity Enthusiast
        </motion.p>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-muted text-sm leading-relaxed mb-10"
        >
          Passionate about building secure online communities and modern
          digital experiences. Exploring cybersecurity concepts and
          developing innovative web solutions.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold text-sm rounded-2xl hover:opacity-90 transition-all duration-200 glow"
          >
            View My Work →
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-white/10 text-sm font-semibold rounded-2xl hover:border-green-400/30 hover:bg-green-400/5 transition-all duration-200"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-2 justify-center mb-16"
        >
          {badges.map((badge) => (
            <span key={badge} className="tag">{badge}</span>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 gap-3 pt-8 border-t border-white/5"
        >
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="p-4 rounded-2xl bg-white/3 backdrop-blur-sm border border-white/5"
            >
              <p className="text-2xl font-black gradient-text">{value}</p>
              <p className="text-muted text-xs mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
