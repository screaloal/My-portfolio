export default function Footer() {
  return (
    <footer className="py-8 section-bg-alt border-t card-border">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <p className="text-muted font-mono text-sm">
          &gt; Built by{' '}
          <span className="text-green-400">Bello Ayomipo Ridwan</span>
          {' '}with React + Vite & Tailwind CSS
        </p>
        <p className="text-muted font-mono text-xs mt-2 opacity-50">
          © {new Date().getFullYear()} — All rights reserved
        </p>
      </div>
    </footer>
  )
}
