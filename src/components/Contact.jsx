'use client'
import { motion } from 'framer-motion'

const socials = [
  { label: 'GitHub', url: 'https://github.com/screaloal', icon: '🐙' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/belloayomipo', icon: '💼' },
  { label: 'X / Twitter', url: 'https://x.com/Isaacoal_', icon: '🐦' },
  { label: 'Email', url: 'mailto:belloayomipo575@gmail.com', icon: '📧' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-green-400 font-mono text-sm tracking-widest uppercase mb-2">
            &gt; contact --me
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            I am open to collaborations, cybersecurity projects, and new opportunities.
            Feel free to reach out — I will get back to you as soon as possible!
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.a
          href="mailto:belloayomipo575@gmail.com"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="inline-block px-10 py-4 bg-green-500 text-black font-bold text-lg rounded-xl hover:bg-green-400 transition-all duration-200 glow mb-14"
        >
          📧 Say Hello
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {socials.map(({ label, url, icon }, index) => (
            <motion.a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111] border border-green-500/20 rounded-xl p-4 flex flex-col items-center gap-2 card-hover"
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-gray-300 text-sm font-medium">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
