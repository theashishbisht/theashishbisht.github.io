
import { useState, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    emailjs.sendForm(
      'service_uxy3trb',  // Service ID
      'template_vym9bcw', // Template ID
      formRef.current!, 
      '5qSf2sVzSKBxABkR1'  // Public Key
    )
    .then((result) => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Get In Touch</h2>
          <div className="h-1 w-20 bg-brand-orange rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground max-w-3xl">
            Have a question or want to work together? Feel free to contact me.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-none shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={5}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-brand-blue hover:bg-brand-darkblue text-white font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col space-y-6">
            <Card className="border-none shadow-md h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-lightblue dark:bg-brand-blue/20 p-3 rounded-full">
                      <Mail className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <a 
                        href="mailto:abisht129@gmail.com" 
                        className="text-muted-foreground hover:text-brand-blue transition-colors"
                      >
                        abisht129@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-lightblue dark:bg-brand-blue/20 p-3 rounded-full">
                      <Linkedin className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/theashishbisht" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-brand-blue transition-colors"
                      >
                        linkedin.com/in/theashishbisht
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-lightblue dark:bg-brand-blue/20 p-3 rounded-full">
                      <Github className="h-5 w-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a 
                        href="https://github.com/theashishbisht" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-brand-blue transition-colors"
                      >
                        github.com/theashishbisht
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
