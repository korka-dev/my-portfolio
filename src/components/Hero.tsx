import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="pt-20 pb-10 md:pt-32 md:pb-20 bg-white text-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://avatars.githubusercontent.com/u/159094472?s=400&u=22c3baf0e80498eea7facce4e7d279126ae04a18&v=4"
              alt="Profile"
              className="rounded-full w-48 h-48 mx-auto border-4 border-white shadow-xl"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold mb-4 animate-fade-in">
              AMADOU KORKA DIALLO
            </h1>
            <h2 className="text-2xl mb-8 font-light">
              <span className="pb-1">Développeur Fullstack</span>
            </h2>
            <div className="max-w-3xl mx-auto text-lg leading-relaxed">
              <p className="animate-fade-in-up">
                Passionné par le développement web, spécialisé dans la création d’applications modernes, performantes et intuitives. Je transforme vos idées en solutions digitales innovantes tout en restant à la pointe des technologies🚀.
                👉N'hésitez pas à me contacter.
              </p>
              <div className="pt-8">
                <a 
                  href="#portfolio" 
                  className="inline-flex items-center px-6 py-3 bg-[#4169E1] text-white rounded-full font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
                >
                  Découvrir mes projets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
