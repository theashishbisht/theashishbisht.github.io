import { useState, useRef } from 'react';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { SOCIAL_LINKS } from '@/constants';
import { ContactFormData } from '@/types';
import { useToast } from '@/hooks/use-toast';

const RATE_LIMIT_DURATION = 60000; // 1 minute

const Contact = () => {
  const { toast } = useToast();
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: ContactFormData) => {
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
      // Email sending logic here using environment variables
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setLastSubmissionTime(now);
    } catch (error) {
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
    <ErrorBoundary>
      <section 
        id="contact" 
        className="section-padding"
        role="region"
        aria-labelledby="contact-title"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 id="contact-title" className="text-3xl font-bold mb-2 gradient-text">Get In Touch</h2>
            <div className="h-1 w-20 bg-brand-orange rounded-full mb-6"></div>
            <p className="text-center text-muted-foreground max-w-3xl">
              Have a question or want to work together? Feel free to contact me.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <ContactForm 
              onSubmit={handleSubmit} 
              isSubmitting={isSubmitting} 
            />
            <ContactInfo links={SOCIAL_LINKS} />
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Contact; 