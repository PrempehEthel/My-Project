
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    
    // Simulate sending an email
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-on-scroll">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-slate-light mb-8">
              I'm currently looking for new opportunities to collaborate on interesting projects.
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-navy-light p-3 rounded-full">
                  <Mail size={20} className="text-accent" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Email</h4>
                  <a href="mailto:ethel.prempeh@example.com" className="text-slate hover:text-accent transition-colors">
                    ethel.prempeh@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-navy-light p-3 rounded-full">
                  <Phone size={20} className="text-accent" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Phone</h4>
                  <a href="tel:+11234567890" className="text-slate hover:text-accent transition-colors">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-navy-light p-3 rounded-full">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-slate">San Francisco, California</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-white font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-navy-light p-3 rounded-full hover:bg-accent/10 hover:text-accent transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-navy-light p-3 rounded-full hover:bg-accent/10 hover:text-accent transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-navy-light p-3 rounded-full hover:bg-accent/10 hover:text-accent transition-all"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-navy-light rounded-lg p-6 md:p-8 shadow-xl border border-slate-dark/30">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-navy border-slate-dark text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your email"
                    className="bg-navy border-slate-dark text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="bg-navy border-slate-dark text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                    className="min-h-[150px] bg-navy border-slate-dark text-white"
                  />
                </div>
                
                <Button type="submit" className="w-full bg-accent text-navy hover:bg-accent-light">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
