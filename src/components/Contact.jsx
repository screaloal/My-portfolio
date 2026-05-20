import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react'

import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
} from 'lucide-react'

const socials = [
  {
    label: 'GitHub',
    url: 'https://github.com/screaloal',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/belloayomipo',
    icon: Linkedin,
  },
  {
    label: 'X / Twitter',
    url: 'https://x.com/Isaacoal_',
    icon: Twitter,
  },
]

function ContactForm() {
  const [state, handleSubmit] = useForm('mqejewjg')

  const inputStyles = `
    w-full
    bg-[#101010]
    border
    border-green-500/10
    rounded-2xl
    px-5
    py-4
    text-white
    text-sm
    transition-all
    duration-300
    outline-none
    placeholder:text-gray-600
    focus:border-green-400
    focus:bg-[#151515]
    focus:shadow-[0_0_20px_rgba(34,197,94,0.15)]
    hover:border-green-500/30
  `

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          bg-[#101010]
          border
          border-green-500/20
          rounded-3xl
          p-10
          text-center
          backdrop-blur-xl
          shadow-[0_0_40px_rgba(34,197,94,0.08)]
        "
      >
        <div className="
          mx-auto
          mb-4
          flex
          items-center
          justify-center
          w-16
          h-16
          rounded-2xl
          bg-green-500/10
          border
          border-green-500/20
          text-green-400
        ">
          <Mail size={30} />
        </div>

        <p className="text-green-400 font-bold text-2xl mb-2">
          Message Sent!
        </p>

        <p className="text-gray-400 text-sm leading-relaxed">
          Thanks for reaching out. I will get back to you soon!
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-gray-400 text-sm mb-2 font-mono">
          Your Name
        </label>

        <input
          type="text"
          name="name"
          required
          placeholder="John Doe"
          className={inputStyles}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-400 text-sm mb-2 font-mono">
          Your Email
        </label>

        <input
          type="email"
          name="email"
          required
          placeholder="john@example.com"
          className={inputStyles}
        />

        <ValidationError
          field="email"
          prefix="Email"
          errors={state.errors}
          className="text-red-400 text-xs mt-2"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-gray-400 text-sm mb-2 font-mono">
          Message
        </label>

        <textarea
          name="message"
          required
          rows={6}
          placeholder="Tell me about your project or opportunity..."
          className={`${inputStyles} resize-none`}
        />

        <ValidationError
          field="message"
          prefix="Message"
          errors={state.errors}
          className="text-red-400 text-xs mt-2"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state.submitting}
        className="
          group
          relative
          overflow-hidden
          w-full
          py-4
          rounded-2xl
          bg-green-500
          text-black
          font-bold
          text-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-[0_10px_30px_rgba(34,197,94,0.35)]
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        <span className="
          absolute
          inset-0
          bg-white/10
          translate-y-full
          group-hover:translate-y-0
          transition-transform
          duration-500
        " />

        <span className="relative z-10 flex items-center justify-center gap-2">
          <Mail size={18} />

          {state.submitting ? 'Sending...' : 'Send Message'}
        </span>
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
    <section
      id="contact"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="
          absolute
          top-0
          left-1/3
          w-96
          h-96
          bg-green-500/10
          blur-[140px]
          rounded-full
        " />

        <div className="
          absolute
          bottom-0
          right-1/4
          w-80
          h-80
          bg-emerald-400/5
          blur-[120px]
          rounded-full
        " />
      </div>

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#22c55e_1px,transparent_1px),linear-gradient(to_bottom,#22c55e_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="
            text-green-400
            font-mono
            text-xs
            tracking-[0.3em]
            uppercase
            mb-3
          ">
            &gt; contact --me
          </p>

          <h2 className="
            text-4xl
            md:text-6xl
            font-black
            tracking-tight
            leading-none
          ">
            Get In <span className="gradient-text">Touch</span>
          </h2>

          <p className="
            text-gray-400
            text-sm
            md:text-base
            mt-5
            leading-relaxed
            max-w-xl
          ">
            Open to collaborations, cybersecurity projects,
            and new opportunities.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              bg-[#0f0f0f]/80
              border
              border-green-500/10
              rounded-3xl
              p-6
              md:p-8
              backdrop-blur-xl
            "
          >
            <ContactForm />
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-5"
          >
            <p className="text-gray-400 text-sm font-mono mb-1">
              &gt; Or find me on:
            </p>

            {socials.map(({ label, url, icon: Icon }, index) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  bg-[#111]
                  border
                  border-green-500/10
                  rounded-2xl
                  p-5
                  transition-all
                  duration-300
                  hover:border-green-400/30
                  hover:bg-[#151515]
                  hover:-translate-y-1
                  hover:shadow-[0_10px_30px_rgba(34,197,94,0.08)]
                "
              >
                <div className="
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                  rounded-xl
                  bg-green-500/10
                  border
                  border-green-500/20
                  text-green-400
                  group-hover:bg-green-500/20
                  transition-all
                  duration-300
                ">
                  <Icon size={22} strokeWidth={2} />
                </div>

                <span className="text-gray-300 font-medium">
                  {label}
                </span>

                <ArrowUpRight
                  size={18}
                  className="
                    ml-auto
                    text-green-400
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </motion.a>
            ))}

            {/* Email Card */}
            <div className="
              bg-[#111]
              border
              border-green-500/10
              rounded-2xl
              p-5
              mt-2
              backdrop-blur-xl
            ">
              <div className="flex items-center gap-3 mb-3">
                <div className="
                  flex
                  items-center
                  justify-center
                  w-10
                  h-10
                  rounded-xl
                  bg-green-500/10
                  border
                  border-green-500/20
                  text-green-400
                ">
                  <Mail size={18} />
                </div>

                <p className="text-gray-400 text-sm font-medium">
                  Email Address
                </p>
              </div>

              <p className="
                text-green-400
                text-sm
                font-mono
                break-all
              ">
                belloayomipo575@gmail.com
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
