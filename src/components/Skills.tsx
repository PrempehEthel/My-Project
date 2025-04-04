
import { useEffect } from 'react';
import { Code, FileText, Briefcase, Cpu } from 'lucide-react';

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
    { category: "Programming", items: ["Python", "C++", "JavaScript", "HTML/CSS"] },
    { category: "Engineering", items: ["ETAP", "Circuit Design", "Electronics", "Power Systems"] },
    { category: "Tools", items: ["Git", "VS Code", "AutoCAD", "Microsoft Office"] }
  ];

  const skillCards = [
    {
      title: "Web Design",
      description: "Creating responsive and user-friendly websites with focus on user experience and modern design principles",
      icon: <Code size={24} className="text-accent" />
    },
    {
      title: "Software Development",
      description: "Building applications using Python and C++ with an emphasis on efficient and maintainable code",
      icon: <FileText size={24} className="text-accent" />
    },
    {
      title: "Electrical Engineering",
      description: "Applying electrical engineering principles to design and analyze power systems using tools like ETAP",
      icon: <Cpu size={24} className="text-accent" />
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
