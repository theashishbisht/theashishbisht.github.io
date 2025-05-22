import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { Card, CardContent } from '@/components/ui/card';
import { EDUCATION_ITEMS } from '@/constants';
import { EducationItem } from '@/types';
import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const Education = dynamic(() => import('./Education'));
const Journey = dynamic(() => import('./Journey'));
const Approach = dynamic(() => import('./Approach'));

const About = () => {
  return (
    <ErrorBoundary>
      <section 
        id="about" 
        className="section-padding bg-secondary/50 dark:bg-secondary/10"
        role="region"
        aria-labelledby="about-title"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 id="about-title" className="text-3xl font-bold mb-2 gradient-text">About Me</h2>
            <div className="h-1 w-20 bg-brand-orange rounded-full mb-6"></div>
            <p className="text-center text-muted-foreground max-w-3xl">
              My journey, experience, and philosophy as a data professional
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Journey />
            <Education items={EDUCATION_ITEMS} />
            <Approach />
          </div>
        </div>
      </section>
    </ErrorBoundary>
  );
};

export default About; 