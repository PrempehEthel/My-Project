import { useEffect } from 'react';

const Education = () => {
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

  const educationData = [
    {
      degree: "BSc. Electrical and Electronics Engineering",
      school: "University of Mines and Technology, Tarkwa",
      period: "2020 - Present",
      description: "Final year student focusing on electrical systems, power engineering, and supplementary studies in programming and software development."
    }
  ];

  const experienceData = [
    {
      position: "Engineering Intern",
      company: "Dannex Aryton Starwin PLC",
      period: "2024 (2 months)",
      description: "Assisted with engineering projects, gained practical experience in industrial settings, and applied theoretical knowledge in real-world scenarios."
    },
    {
      position: "Engineering Intern",
      company: "Electricity Company of Ghana",
      period: "2023 (3 months)",
      description: "Worked on power distribution systems, assisted with maintenance and troubleshooting of electrical equipment, and gained exposure to national grid operations."
    }
  ];

  return (
    <section id="education" className="section">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-on-scroll">Education & Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 animate-on-scroll">Education</h3>
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l border-slate-dark animate-on-scroll"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-accent"></div>
                  <span className="inline-block py-1 px-3 rounded text-xs font-medium bg-navy-light text-accent mb-2">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-white">{item.degree}</h4>
                  <p className="text-accent-light mb-2">{item.school}</p>
                  <p className="text-slate">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 animate-on-scroll">Experience</h3>
            <div className="space-y-12">
              {experienceData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 border-l border-slate-dark animate-on-scroll"
                  style={{ animationDelay: `${(index + 3) * 150}ms` }}
                >
                  <div className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-accent"></div>
                  <span className="inline-block py-1 px-3 rounded text-xs font-medium bg-navy-light text-accent mb-2">
                    {item.period}
                  </span>
                  <h4 className="text-xl font-bold text-white">{item.position}</h4>
                  <p className="text-accent-light mb-2">{item.company}</p>
                  <p className="text-slate">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
