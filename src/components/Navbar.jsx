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

  const bg = theme === 'dark'
    ? 'bg-black/90 border-green-500/20'
    : 'bg-white/90 border-green-500/30'

  const menuBg = theme === 'dark'
    ? 'bg-black/95 border-green-500/20'
    : 'bg-white/95 border-green-500/20'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? `${bg} backdrop-blur-md border-b` : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold gradient-text cursor-pointer"
        >
          Ayomipo.dev
        </motion.span>

        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`transition-colors duration-200 text-sm font-medium hover:text-green-400 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
          {/* Theme Toggle */}
          <li>
            <button
              onClick={toggleTheme}
              className="text-xl hover:scale-110 transition-transform"
              title="Toggle theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="text-xl hover:scale-110 transition-transform"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="text-green-400 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden ${menuBg} border-t px-6 py-4`}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 hover:text-green-400 transition-colors border-b ${
                theme === 'dark'
                  ? 'text-gray-300 border-gray-800'
                  : 'text-gray-600 border-gray-200'
              }`}
            >
              {link}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
