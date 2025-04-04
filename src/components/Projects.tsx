
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  useEffect(() => {
    const observerOptions = {
      rootMargin: '-50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality, user authentication, and real-time updates using WebSockets.",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays current weather conditions and forecasts for any location using the OpenWeatherMap API.",
      technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800",
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-on-scroll">Projects</h2>
        
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative grid md:grid-cols-12 gap-4 md:gap-8 items-center animate-on-scroll`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="overflow-hidden rounded-md">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto transition-transform hover:scale-105 duration-300"
                    />
                  </a>
                </div>
              </div>
              
              <div className={`md:col-span-5 ${index % 2 === 1 ? 'md:order-1 text-right' : ''}`}>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <div className="bg-navy-light p-6 rounded-md shadow-xl mb-4">
                  <p className="text-slate">{project.description}</p>
                </div>
                
                <div className={`flex flex-wrap mb-6 gap-2 text-xs ${index % 2 === 1 ? 'justify-end' : ''}`}>
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded bg-navy-light/50 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={`flex gap-4 ${index % 2 === 1 ? 'justify-end' : ''}`}>
                  <Button 
                    asChild 
                    size="sm" 
                    variant="outline"
                    className="flex items-center gap-2 border-slate-dark text-slate-light hover:text-white hover:border-accent"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    size="sm" 
                    variant="outline"
                    className="flex items-center gap-2 border-slate-dark text-slate-light hover:text-white hover:border-accent"
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      <span>Live</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
