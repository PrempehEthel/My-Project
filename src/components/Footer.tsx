
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-dark/30 bg-navy-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate text-sm">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-4 items-center">
            <p className="text-slate text-sm">
              Designed & Built by <span className="text-accent">John Doe</span>
            </p>
            
            <a 
              href="#" 
              className="bg-navy-light p-2 rounded-full hover:bg-accent/10 hover:text-accent transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
