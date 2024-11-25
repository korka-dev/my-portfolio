import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "Drive Storage",
      description: "C'est une plateforme de gestion de fichiers qui offre une expérience utilisateur similaire à Google Drive.",
      github: "https://github.com/korka-dev/drive-storage-backend",
    },
    {
      title: "Internship Management System",
      description: "Il s'agit d'une plateforme de gestion des stages au sein d'une entreprise, développée avec une architecture microservices. ",
      github: "https://github.com/korka-dev/internship-management-system-microservices"
    },
    
    {
      title: "SmartEdu",
      description: "Une API REST d'une application mobile conçue pour offrir une expérience utilisateur fluide et moderne. Elle est principalement utilisée par les élèves du cycle secondaire pour accéder à des cours en ligne, et elle est développée en Python avec le framework FastAPI.",
      github: "https://github.com/korka-dev/axloutoth-fastapi"
    },
    
    {
      title: "TodoList",
      description: "C'est une plateforme de gestion de tâches conçue pour aider les utilisateurs à organiser leurs activités quotidiennes.",
      github: "https://github.com/korka-dev/todo_list_java"
    },


  ];

  return (
    <section id="portfolio" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-md border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-4 min-h-[60px]">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors text-sm"
              >
                Voir le projet
                <ArrowUpRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}