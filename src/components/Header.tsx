import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export default function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
  return (
    <nav className="fixed w-full text-white shadow-sm z-50 dark:bg-gray-800 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-gray-900 dark:text-gray-100 hover:text-indigo-600">AKD</span>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#accueil" className="text-gray-900 dark:text-gray-100 hover:text-indigo-600">Accueil</a>
            <a href="#about" className="text-gray-900 dark:text-gray-100 hover:text-indigo-600">À propos</a>
            <a href="#skills" className="text-gray-900 dark:text-gray-100 hover:text-indigo-600">Compétences</a>
            <a href="#portfolio" className="text-gray-900 dark:text-gray-100 hover:text-indigo-600">Projets</a>
            <a href="#contact" className="text-gray-900 dark:text-gray-100 hover:text-indigo-600">Contact</a>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 dark:bg-gray-800`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#accueil" className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-indigo-600">Accueil</a>
          <a href="#about" className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-indigo-600">À propos</a>
          <a href="#skills" className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-indigo-600">Compétences</a>
          <a href="#portfolio" className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-indigo-600">Projets</a>
          <a href="#contact" className="block px-3 py-2 text-gray-900 dark:text-gray-100 hover:text-indigo-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}
