
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 section">
      <div className={`transition-all duration-700 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
        <p className="text-accent mb-4 tracking-wider">Hello, my name is</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
          John Doe.
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate mb-8">
          I build things for the web.
        </h2>
        <p className="max-w-xl text-lg text-slate mb-10">
          I'm a software developer specializing in building exceptional digital experiences.
          Currently focused on building accessible, human-centered products.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-transparent border border-accent text-accent hover:bg-accent/10">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild className="bg-accent text-navy hover:bg-accent-light">
            <a href="#projects">View Projects</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-slate-light hover:text-accent flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
