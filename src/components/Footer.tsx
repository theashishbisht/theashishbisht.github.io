
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/70 dark:bg-secondary/30 py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-6">
            <a 
              href="https://github.com/theashishbisht" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/theashishbisht" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:abisht129@gmail.com"
              className="p-2 rounded-full bg-background hover:bg-brand-blue hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-center text-sm text-muted-foreground mb-2">
            &copy; {currentYear} Ashish Bisht. All rights reserved.
          </p>
          <p className="text-center text-xs text-muted-foreground">
            Senior Data Analyst | SQL | Python | Azure | Power BI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
