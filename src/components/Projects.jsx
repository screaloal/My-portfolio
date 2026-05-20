import { motion } from 'framer-motion'

const projects = [
  {
    title: 'DR SREAL',
    description:
      'A premium cybersecurity-focused community web app featuring VIP systems, real-time interactions, and secure user management.',
    tags: ['Cybersecurity', 'Web App', 'VIP System', 'Secure Auth'],
    icon: '🔐',
    gradient: 'from-green-400 to-emerald-600',
    bg: 'from-green-400/10 to-emerald-600/5',
    border: 'border-green-400/20',
    status: 'Featured',
    statusColor: 'text-green-400 bg-green-400/10 border-green-400/20',
  },
  {
    title: 'AY Autos Website',
    description:
      'A luxury automotive brand website with a sleek modern UI and premium branding experience.',
    tags: ['UI/UX', 'Branding', 'Web Design', 'Next.js'],
    icon: '🚗',
    gradient: 'from-blue-400 to-cyan-600',
    bg: 'from-blue-400/10 to-cyan-600/5',
    border: 'border-blue-400/20',
    status: 'Completed',
    statusColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects, technical skills, and contact information with dark/light mode.',
    tags: ['Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub'],
    icon: '💼',
    gradient: 'from-purple-400 to-pink-600',
    bg: 'from-purple-400/10 to-pink-600/5',
    border: 'border-purple-400/20',
    status: 'Live',
    statusColor: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 section-bg-alt">
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
            &gt; ls ./projects
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
            A selection of projects I have built — from cybersecurity platforms
            to premium web experiences.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-6">
          {projects.map(({ title, description, tags, icon, gradient, bg, border, status, statusColor }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card-hover rounded-2xl border ${border} bg-gradient-to-br ${bg} overflow-hidden`}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl flex-shrink-0`}>
                    {icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold">{title}</h3>
                      <span className={`text-xs font-mono px-2 py-1 rounded-full border ${statusColor}`}>
                        {status}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className={`hidden md:flex w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} items-center justify-center text-black font-bold flex-shrink-0`}>
                    →
                  </div>
                </div>
              </div>

              {/* Bottom gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${gradient}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
