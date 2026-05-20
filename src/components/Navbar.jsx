import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../ThemeContext'

const navLinks = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-[#060912]/80 backdrop-blur-xl border-b border-white/5'
            : 'bg-white/80 backdrop-blur-xl border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-black font-black text-sm">
            A
          </div>
          <span className="font-bold text-lg gradient-text">
            Ayomipo.dev
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm font-medium transition-all duration-200 hover:text-green-400 relative group ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-white/5 hover:bg-white/10 text-gray-400'
                : 'bg-black/5 hover:bg-black/10 text-gray-600'
            }`}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold text-sm rounded-lg hover:opacity-90 transition-all duration-200 glow"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-lg"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`w-9 h-9 rounded-lg flex flex-col items-center justify-center gap-1.5 ${
              theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
            }`}
          >
            <span className={`block w-5 h-0.5 transition-all duration-300 ${
              menuOpen
                ? 'rotate-45 translate-y-2 bg-green-400'
                : theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'
            }`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${
              menuOpen
                ? 'opacity-0'
                : theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'
            }`} />
            <span className={`block w-5 h-0.5 transition-all duration-300 ${
              menuOpen
                ? '-rotate-45 -translate-y-2 bg-green-400'
                : theme === 'dark' ? 'bg-gray-400' : 'bg-gray-600'
            }`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`md:hidden px-4 pb-4 ${
            theme === 'dark'
              ? 'bg-[#060912]/95 border-b border-white/5'
              : 'bg-white/95 border-b border-black/5'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-between py-3 text-sm border-b transition-colors hover:text-green-400 ${
                theme === 'dark'
                  ? 'text-gray-400 border-white/5'
                  : 'text-gray-600 border-black/5'
              }`}
            >
              {link}
              <span className="text-green-400">→</span>
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full py-2.5 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold text-sm rounded-lg flex items-center justify-center"
          >
            Hire Me
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
