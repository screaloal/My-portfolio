import { motion } from 'framer-motion'
import { useState } from 'react'

const socials = [
  { label: 'GitHub', url: 'https://github.com/screaloal', icon: '🐙', color: 'border-gray-400/20 hover:border-gray-400/40' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/belloayomipo', icon: '💼', color: 'border-blue-400/20 hover:border-blue-400/40' },
  { label: 'X / Twitter', url: 'https://x.com/Isaacoal_', icon: '🐦', color: 'border-sky-400/20 hover:border-sky-400/40' },
]

function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '40401e2b-eec8-4966-a2a5-06e4368fd85e',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New message from ${formData.name} - Portfolio`,
        }),
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card-bg card-border border rounded-2xl p-10 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center text-3xl mx-auto mb-4">
          ✅
        </div>
        <p className="font-bold text-xl mb-2">Message Sent!</p>
        <p className="text-muted text-sm mb-6">
          Thanks for reaching out. I will get back to you soon!
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-green-400 text-sm font-mono hover:text-green-300 transition-colors"
        >
          Send another message →
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-muted text-xs mb-2 font-mono uppercase tracking-wider">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full card-bg card-border border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-400/40 transition-colors placeholder-gray-600"
          />
        </div>
        <div>
          <label className="block text-muted text-xs mb-2 font-mono uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full card-bg card-border border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-400/40 transition-colors placeholder-gray-600"
          />
        </div>
      </div>

      <div>
        <label className="block text-muted text-xs mb-2 font-mono uppercase tracking-wider">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          className="w-full card-bg card-border border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-400/40 transition-colors placeholder-gray-600 resize-none"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-400 text-xs text-center">
          ❌ Something went wrong. Please try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full py-3.5 bg-gradient-to-r from-green-400 to-blue-500 text-black font-bold rounded-xl hover:opacity-90 transition-all duration-200 glow disabled:opacity-50 disabled:cursor-not-allowed text-sm"
      >
        {status === 'sending' ? '📤 Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-24 section-bg">
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
            &gt; contact --me
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl mx-auto">
            Open to collaborations, cybersecurity projects, and new opportunities.
            Let's build something great together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">
                Let's <span className="gradient-text">Connect</span>
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                Whether you have a project in mind, want to collaborate,
                or just want to say hi — my inbox is always open!
              </p>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              {socials.map(({ label, url, icon, color }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 card-bg border ${color} rounded-xl p-4 card-hover transition-all duration-200`}
                >
                  <span className="text-2xl">{icon}</span>
                  <span className="font-medium text-sm">{label}</span>
                  <span className="ml-auto text-green-400 text-sm">→</span>
                </a>
              ))}
            </div>

            {/* Email */}
            <div className="card-bg card-border border rounded-xl p-4">
              <p className="text-muted text-xs font-mono uppercase tracking-wider mb-2">
                Email
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
