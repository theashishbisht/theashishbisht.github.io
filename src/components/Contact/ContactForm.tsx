import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { ContactFormData } from '@/types';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const RATE_LIMIT_DURATION = 60000; // 1 minute

export const ContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastSubmissionTime < RATE_LIMIT_DURATION) {
      toast({
        title: "Please wait",
        description: "You can only submit one message per minute.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_uxy3trb',
        'template_vym9bcw',
        formRef.current!,
        '5qSf2sVzSKBxABkR1'
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setLastSubmissionTime(now);
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Your Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="John Doe"
          required
          aria-required="true"
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
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="john@example.com"
          required
          aria-required="true"
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
          onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
          placeholder="Your message here..."
          rows={5}
          required
          aria-required="true"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-brand-blue hover:bg-brand-darkblue text-white font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <LoadingSpinner size="sm" className="mr-2" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}; 