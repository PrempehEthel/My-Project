
import { useEffect } from 'react';
import { Code, FileText, Briefcase } from 'lucide-react';

const Skills = () => {
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

  const skills = [
    { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "GraphQL"] },
    { category: "Tools", items: ["Git", "Docker", "Webpack", "Figma", "AWS", "CI/CD"] }
  ];

  const skillCards = [
    {
      title: "Web Development",
      description: "Building responsive, modern websites and web applications with React, TypeScript and Next.js",
      icon: <Code size={24} className="text-accent" />
    },
    {
      title: "UI/UX Design",
      description: "Creating intuitive, accessible user interfaces with a focus on seamless user experience",
      icon: <FileText size={24} className="text-accent" />
    },
    {
      title: "Project Management",
      description: "Leading teams through Agile methodology to deliver high-quality products on schedule",
      icon: <Briefcase size={24} className="text-accent" />
    }
  ];

  return (
    <section id="skills" className="section bg-navy-dark">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-on-scroll">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16">
          {skillCards.map((card, index) => (
            <div 
              key={index} 
              className="bg-navy-light p-6 rounded-md border border-slate-dark/30 hover:border-accent/30 transition-all shadow-lg animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {card.icon}
                <h3 className="text-xl font-bold text-white ml-3">{card.title}</h3>
              </div>
              <p className="text-slate">{card.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((category, index) => (
            <div 
              key={index} 
              className="animate-on-scroll"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <h3 className="text-white text-xl font-bold mb-4">{category.category}</h3>
              <ul className="space-y-2">
                {category.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
