
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="animate-on-scroll">
      <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
      <p className="text-slate-light mb-8">
        I'm currently looking for new opportunities to collaborate on interesting projects.
        Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      
      <div className="space-y-6">
        <ContactInfoItem 
          icon={<Mail size={20} className="text-accent" />}
          title="Email"
          content={
            <a href="mailto:ethel.prempeh@example.com" className="text-slate hover:text-accent transition-colors">
              ethel.prempeh@example.com
            </a>
          }
        />
        
        <ContactInfoItem 
          icon={<Phone size={20} className="text-accent" />}
          title="Phone"
          content={
            <a href="tel:+11234567890" className="text-slate hover:text-accent transition-colors">
              +1 (123) 456-7890
            </a>
          }
        />
        
        <ContactInfoItem 
          icon={<MapPin size={20} className="text-accent" />}
          title="Location"
          content={<p className="text-slate">San Francisco, California</p>}
        />
      </div>
      
      <div className="mt-10">
        <h4 className="text-white font-medium mb-4">Connect with me</h4>
        <div className="flex space-x-4">
          <SocialLink href="#" icon={<Github size={20} />} ariaLabel="GitHub" />
          <SocialLink href="#" icon={<Linkedin size={20} />} ariaLabel="LinkedIn" />
          <SocialLink href="#" icon={<Twitter size={20} />} ariaLabel="Twitter" />
        </div>
      </div>
    </div>
  );
};

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const ContactInfoItem = ({ icon, title, content }: ContactInfoItemProps) => (
  <div className="flex items-center">
    <div className="bg-navy-light p-3 rounded-full">
      {icon}
    </div>
    <div className="ml-4">
      <h4 className="text-white font-medium">{title}</h4>
      {content}
    </div>
  </div>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const SocialLink = ({ href, icon, ariaLabel }: SocialLinkProps) => (
  <a 
    href={href} 
    className="bg-navy-light p-3 rounded-full hover:bg-accent/10 hover:text-accent transition-all"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);

export default ContactInfo;
