
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    <form onSubmit={handleSubmit} className="bg-navy-light rounded-lg p-6 md:p-8 shadow-xl border border-slate-dark/30">
      <div className="space-y-4">
        <FormField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
        />
        
        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Your email"
        />
        
        <FormField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
        />
        
        <FormField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Your message"
          isTextarea
        />
        
        <Button type="submit" className="w-full bg-accent text-navy hover:bg-accent-light">
          Send Message
        </Button>
      </div>
    </form>
  );
};

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  type?: string;
  isTextarea?: boolean;
}

const FormField = ({ 
  label, 
  name, 
  value, 
  onChange, 
  required = false, 
  placeholder = '', 
  type = 'text',
  isTextarea = false 
}: FormFieldProps) => (
  <div>
    <label htmlFor={name} className="block text-white font-medium mb-2">{label}</label>
    {isTextarea ? (
      <Textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="min-h-[150px] bg-navy border-slate-dark text-white"
      />
    ) : (
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-navy border-slate-dark text-white"
      />
    )}
  </div>
);

export default ContactForm;
