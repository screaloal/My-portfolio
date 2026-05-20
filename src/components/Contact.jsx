import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

const socials = [
  { label: 'GitHub', url: 'https://github.com/screaloal', icon: '🐙' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/belloayomipo', icon: '💼' },
  { label: 'X / Twitter', url: 'https://x.com/Isaacoal_', icon: '🐦' },
]

function ContactForm() {
  const [state, handleSubmit] = useForm('mqejewjg')

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-bg card-border border rounded-2xl p-8 text-center"
      >
        <p className="text-4xl mb-4">✅</p>
        <p className="text-green-400 font-bold text-xl mb-2">Message Sent!</p>
        <p className="text-muted text-sm">
          Thanks for reaching out. I will get back to you soon!
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-muted text-sm mb-1 font-mono">
          Your Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="John Doe"
          className="w-full card-bg card-border border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors placeholder-gray-600"
        />
      </div>

      <div>
        <label className="block text-muted text-sm mb-1 font-mono">
          Your Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="john@example.com"
          className="w-full card-bg card-border border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors placeholder-gray-600"
        />
        <ValidationError
          field="email"
          prefix="Email"
          errors={state.errors}
          className="text-red-400 text-xs mt-1"
        />
      </div>

      <div>
        <label className="block text-muted text-sm mb-1 font-mono">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          className="w-full card-bg card-border border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 transition-colors placeholder-gray-600 resize-none"
        />
        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
          className="text-red-400 text-xs mt-1"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all duration-200 glow disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {state.submitting ? '📤 Sending...' : '📧 Send Message'}
      </button>

      <ValidationError
        errors={state.errors}
        className="text-red-400 text-xs text-center"
      />
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-20 section-bg">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-green-400 font-mono text-xs tracking-widest uppercase mb-2">
            &gt; contact --me
          </p>
          <h2 className="text-3xl md:text-5xl font-black">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted text-sm md:text-base mt-4 leading-relaxed">
            Open to collaborations, cybersecurity projects, and new opportunities.
            Send me a message and I will get back to you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-4"
          >
            <p className="text-muted text-sm font-mono mb-2">
              &gt; Or find me on:
            </p>
            {socials.map(({ label, url, icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 card-bg card-border border rounded-xl p-4 card-hover"
              >
                <span className="text-2xl">{icon}</span>
                <span className="font-medium text-sm">{label}</span>
                <span className="ml-auto text-green-400 text-sm">→</span>
              </a>
            ))}

            <div className="card-bg card-border border rounded-xl p-4 mt-2">
              <p className="text-muted text-xs font-mono mb-1">
                &gt; email
              </p>
              <p className="text-green-400 text-sm font-mono">
                belloayomipo575
                <span className="text-muted">[@]</span>
                gmail
                <span className="text-muted">[.]</span>
                com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
