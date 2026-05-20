import { motion } from 'framer-motion'

const projects = [
  {
    title: 'DR SREAL',
    description:
      'A premium cybersecurity-focused community web app featuring VIP systems, real-time interactions, and secure user management.',
    tags: ['Cybersecurity', 'Web App', 'VIP System', 'Secure Auth'],
    icon: '🔐',
    color: 'from-green-500 to-emerald-700',
  },
  {
    title: 'AY Autos Website',
    description:
      'A luxury automotive brand website with a sleek modern UI and premium branding experience.',
    tags: ['UI/UX', 'Branding', 'Web Design', 'Next.js'],
    icon: '🚗',
    color: 'from-blue-500 to-cyan-700',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio website showcasing projects, technical skills, and contact information.',
    tags: ['Vite', 'Tailwind CSS', 'Framer Motion', 'GitHub'],
    icon: '💼',
    color: 'from-purple-500 to-pink-700',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 section-bg-alt">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 font-mono text-xs tracking-widest uppercase mb-2">
            &gt; ls ./projects
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map(({ title, description, tags, icon, color }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-bg card-border border rounded-2xl overflow-hidden card-hover"
            >
              <div className={`h-1.5 bg-gradient-to-r ${color}`} />
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="text-lg font-bold">{title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
