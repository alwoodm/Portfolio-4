const Header = () => {
  return (
    <header className="bg-slate-900/80 backdrop-blur-sm text-white fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">
            <a href="#" className="hover:text-blue-400 transition-colors">
              <span className="text-blue-400">&lt;</span>
              alwood
              <span className="text-blue-400">/&gt;</span>
            </a>
          </div>
          <ul className="flex space-x-8">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#projekty" className="hover:text-blue-400 transition-colors">Projekty</a></li>
            <li><a href="#omnie" className="hover:text-blue-400 transition-colors">O mnie</a></li>
            <li><a href="#kontakt" className="hover:text-blue-400 transition-colors">Kontakt</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 