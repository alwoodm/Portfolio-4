'use client'

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} alwood. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer