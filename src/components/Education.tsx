
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
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      period: "2018 - 2020",
      description: "Specialized in Machine Learning and Artificial Intelligence. Thesis on Neural Networks for Natural Language Processing."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Massachusetts Institute of Technology",
      period: "2014 - 2018",
      description: "Graduated with honors. Focused on Software Engineering and Data Structures."
    },
    {
      degree: "Web Development Bootcamp",
      school: "Coding Academy",
      period: "2013 - 2014",
      description: "Intensive 12-week program covering full-stack development with JavaScript, React, and Node.js."
    }
  ];

  const experienceData = [
    {
      position: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2021 - Present",
      description: "Leading a team of developers to build enterprise web applications. Implementing CI/CD pipelines and mentoring junior developers."
    },
    {
      position: "Frontend Developer",
      company: "Digital Solutions",
      period: "2018 - 2021",
      description: "Built responsive web applications using React and TypeScript. Improved website performance by 40% through code optimization."
    },
    {
      position: "Junior Web Developer",
      company: "WebStart Studios",
      period: "2016 - 2018",
      description: "Developed and maintained client websites. Collaborated with designers to implement responsive designs."
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
