import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a] px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-[600px] md:h-[600px] bg-green-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 pt-16 pb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-green-400 font-mono text-xs mb-4 tracking-widest uppercase"
        >
          &gt; Hello, World! I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-7xl font-black mb-4 leading-tight"
        >
          Bello{' '}
          <span className="gradient-text">Ayomipo</span>
          <br />
          Ridwan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-2xl text-green-400 font-mono mb-4"
        >
          Cybersecurity Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 max-w-xl mx-auto text-sm md:text-lg mb-8 leading-relaxed"
        >
          Passionate about building secure online communities and modern digital experiences.
          Exploring cybersecurity concepts and developing innovative web solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all duration-200 glow text-sm"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-green-500 text-green-400 font-bold rounded-lg hover:bg-green-500/10 transition-all duration-200 text-sm"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-6"
        >
          {[
            { label: 'GitHub', url: 'https://github.com/screaloal' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/belloayomipo' },
            { label: 'X/Twitter', url: 'https://x.com/Isaacoal_' },
          ].map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-400 transition-colors text-xs font-mono"
            >
              {label}
            </a>
          ))}
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-10 text-gray-600 text-xl"
        >
          ↓
        </motion.div>
      </div>
    </section>
  )
}
