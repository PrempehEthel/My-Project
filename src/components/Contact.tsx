
import { useEffect } from 'react';
import ContactInfo from './contact/ContactInfo';
import ContactForm from './contact/ContactForm';

const Contact = () => {
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
    <section id="contact" className="section">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title animate-on-scroll">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <div className="animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
