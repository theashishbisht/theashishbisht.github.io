import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

const Contact = () => {
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
            <h2 id="contact-title" className="text-3xl font-bold mb-2 gradient-text">
              Get In Touch
            </h2>
            <div className="h-1 w-20 bg-brand-orange rounded-full mb-6"></div>
            <p className="text-center text-muted-foreground max-w-3xl">
              Have a question or want to work together? Feel free to contact me.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default Contact; 