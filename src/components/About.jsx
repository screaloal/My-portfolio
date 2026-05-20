import { motion } from 'framer-motion'

const features = [
  {
    icon: '🔐',
    title: 'Cybersecurity',
    desc: 'Passionate about securing systems and building safe digital environments.',
    color: 'from-green-400/20 to-green-400/5',
    border: 'border-green-400/20',
  },
  {
    icon: '🌐',
    title: 'Web Development',
    desc: 'Building modern, responsive, and performant web applications.',
    color: 'from-blue-400/20 to-blue-400/5',
    border: 'border-blue-400/20',
  },
  {
    icon: '🤖',
    title: 'AI & Python',
    desc: 'Exploring artificial intelligence and automation with Python.',
    color: 'from-purple-400/20 to-purple-400/5',
    border: 'border-purple-400/20',
  },
  {
    icon: '🛡️',
    title: 'Secure by Design',
    desc: 'Every project built with security as a core principle, not an afterthought.',
    color: 'from-orange-400/20 to-orange-400/5',
    border: 'border-orange-400/20',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 section-bg-alt">
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
            &gt; whoami
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            I am a cybersecurity enthusiast passionate about building secure online
            communities and modern digital experiences. I enjoy learning new
            technologies and developing innovative web solutions.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {features.map(({ icon, title, desc, color, border }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card-hover p-6 rounded-2xl border ${border} bg-gradient-to-br ${color} backdrop-blur-sm`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1">{title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio + Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Bio */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              My <span className="gradient-text">Story</span>
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              I am a cybersecurity enthusiast passionate about building secure
              online communities and modern digital experiences.
            </p>
            <p className="text-muted text-sm leading-relaxed mb-4">
              I enjoy learning new technologies, exploring cybersecurity
              concepts, and developing innovative web solutions that combine
              security with great user experience.
            </p>
            <p className="text-muted text-sm leading-relaxed">
              When I am not coding, I am studying the latest trends in
              cybersecurity, contributing to open source, and building tools
              that make the web safer.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Projects Built', value: '3+', icon: '🚀' },
              { label: 'GitHub Repos', value: '10+', icon: '💻' },
              { label: 'Focus Area', value: 'Security', icon: '🔐' },
              { label: 'Status', value: 'Open to Work', icon: '✅' },
            ].map(({ label, value, icon }) => (
              <div
                key={label}
                className="card-bg card-border border rounded-2xl p-4 card-hover text-center"
              >
                <div className="text-2xl mb-2">{icon}</div>
                <p className="text-lg font-black gradient-text">{value}</p>
                <p className="text-muted text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
