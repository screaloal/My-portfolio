import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 section-bg-alt">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 font-mono text-xs tracking-widest uppercase mb-2">
            &gt; whoami
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
            I am a <span className="text-green-400 font-semibold">cybersecurity enthusiast</span> passionate
            about building secure online communities and modern digital experiences.
          </p>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-4">
            I enjoy learning new technologies, exploring cybersecurity concepts, and developing
            <span className="text-green-400 font-semibold"> innovative web solutions</span> that
            combine security with great user experience.
          </p>
          <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
            When I am not coding, I am studying the latest trends in cybersecurity,
            contributing to open source, and building tools that make the web safer.
          </p>
          <a
            href="mailto:belloayomipo575@gmail.com"
            className="inline-flex items-center gap-2 text-green-400 font-mono text-xs hover:text-green-300 transition-colors"
          >
            📧 belloayomipo575@gmail.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3"
        >
          {[
            { label: 'Projects Built', value: '3+' },
            { label: 'GitHub Repos', value: '10+' },
            { label: 'Focus Area', value: 'Security' },
            { label: 'Status', value: 'Open to Work' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="card-bg card-border border rounded-xl p-4 card-hover"
            >
              <p className="text-2xl font-black gradient-text mb-1">{value}</p>
              <p className="text-muted text-xs">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
