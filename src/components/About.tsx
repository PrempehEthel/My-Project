import { useEffect } from 'react';

const About = () => {
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

  return (
    <section id="about" className="section">
      <h2 className="section-title animate-on-scroll">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="md:col-span-2">
          <p className="text-lg mb-4 animate-on-scroll">
            Hi, I'm a final-year Electrical and Electronics Engineering student based in Ghana, with a strong passion for technology and innovation. My interests lie at the intersection of software development, web development, and artificial intelligence.
          </p>
          
          <p className="text-lg mb-4 animate-on-scroll">
            Over the years, I've developed a deep curiosity for how things work — from circuits to code — and that's what led me to explore programming alongside my engineering studies. I'm particularly fascinated by the potential of AI and machine learning to solve real-world problems, and I'm actively building my skills in this space.
          </p>
          
          <p className="text-lg mb-8 animate-on-scroll">
            Currently, I'm working on improving my web development skills while also diving deeper into machine learning frameworks and tools. I'm always open to collaborating on projects, internships, or anything that helps me grow and contribute to the tech space in Ghana and beyond.
          </p>
          
          <div className="animate-on-scroll">
            <p className="text-accent mb-2 font-bold">Current position:</p>
            <p className="text-white text-xl">Student at University of Mines and Technology, Tarkwa</p>
          </div>
        </div>
        
        <div className="animate-on-scroll">
          <div className="overflow-hidden rounded-md bg-navy-light/50 border border-slate-dark/20 p-1">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
              alt="Ethel Prempeh portrait" 
              className="rounded w-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
