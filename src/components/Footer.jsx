export default function Footer() {
  return (
    <footer className="py-8 section-bg-alt border-t card-border">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-black font-black text-xs">
            A
          </div>
          <span className="font-bold text-sm gradient-text">Ayomipo.dev</span>
        </div>

        <p className="text-muted text-xs font-mono">
          © {new Date().getFullYear()} Bello Ayomipo Ridwan. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {[
            { label: 'GitHub', url: 'https://github.com/screaloal' },
            { label: 'LinkedIn', url: 'https://www.linkedin.com/in/belloayomipo' },
            { label: 'X', url: 'https://x.com/Isaacoal_' },
          ].map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-green-400 transition-colors text-xs font-mono"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
