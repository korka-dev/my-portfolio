import { useState, useEffect } from 'react';
import {  Mail, Phone, Sun, Moon, MapPin } from 'lucide-react'; 
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Skills />
      <Portfolio />

      {/* Section Contact */}
      <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-12">Contact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Email */}
            <div className="flex flex-col items-center text-gray-600 dark:text-gray-300">
              <Mail className="w-6 h-6 mb-2" />
              <span className="text-lg font-medium text-center">Envoyer-moi un email</span>
              <a href="mailto:diallo30amadoukorka@gmail.com" className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 text-center">
                diallo30amadoukorka@gmail.com
              </a>
            </div>

            {/* Adresse */}
            <div className="flex flex-col items-center text-gray-600 dark:text-gray-300">
              <MapPin className="w-6 h-6 mb-2" />
              <span className="text-lg font-medium text-center">Adresse</span>
              <p className="text-lg font-medium text-center">Senegal, Dakar, Fass Mbao</p>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-gray-600 dark:text-gray-300">
              <Phone className="w-6 h-6 mb-2" />
              <span className="text-lg font-medium text-center">Appeler</span>
              <a href="tel:+221777666733" className="text-lg font-medium hover:text-indigo-600 dark:hover:text-indigo-400 text-center">
                (+221) 77-766-67-33
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton de changement de mode */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-8 right-8 p-3 bg-gray-900 text-white rounded-full shadow-lg hover:bg-gray-700 transition-all"
      >
        {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
      </button>
    </div>
  );
}

export default App;
