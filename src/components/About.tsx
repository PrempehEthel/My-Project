
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
            Hello! My name is Ethel and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try editing 
            custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          
          <p className="text-lg mb-4 animate-on-scroll">
            Fast-forward to today, and I've had the privilege of working at an advertising agency, 
            a start-up, a huge corporation, and a student-led design studio. My main focus these days 
            is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
          </p>
          
          <p className="text-lg mb-8 animate-on-scroll">
            I also recently launched a course that covers everything you need to build a web app with the 
            Spotify API using Node & React.
          </p>
          
          <div className="animate-on-scroll">
            <p className="text-accent mb-2 font-bold">Current position:</p>
            <p className="text-white text-xl">Senior Frontend Developer at TechCorp Inc.</p>
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
