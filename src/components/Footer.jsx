export default function Footer() {
  return (
    <footer className="py-8 bg-[#0a0a0a] border-t border-green-500/10 text-center">
      <p className="text-gray-600 font-mono text-sm">
        &gt; Built by{' '}
        <span className="text-green-400">Bello Ayomipo Ridwan</span>
        {' '}with Next.js & Tailwind CSS
      </p>
      <p className="text-gray-700 font-mono text-xs mt-2">
        © {new Date().getFullYear()} — All rights reserved
      </p>
    </footer>
  )
}
