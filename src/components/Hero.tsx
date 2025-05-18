
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Database, Cloud, Code, Server } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex flex-col space-y-4 md:w-1/2 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Hello, I'm <span className="gradient-text">Ashish Bisht</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">
              Senior Data Analyst at Numerator
            </h2>
            <p className="text-muted-foreground md:text-lg max-w-[600px]">
              Over 4.5 years of experience transforming complex data into actionable 
              business insights using SQL, Python, and modern data technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button 
                asChild
                className="bg-brand-blue hover:bg-brand-darkblue text-white font-medium px-6 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <a href="#portfolio">View My Work</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-brand-blue text-brand-blue hover:text-brand-darkblue hover:border-brand-darkblue px-6 transition-all duration-300"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-brand-blue rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -z-10 -bottom-4 -left-4 w-60 h-60 bg-brand-orange rounded-full blur-3xl opacity-20"></div>
              
              {/* Profile image container with gradient border */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-brand-blue to-brand-orange shadow-xl relative">
                {/* Inner white or dark-mode-adjusted container */}
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  <Avatar className="w-full h-full">
                    <AvatarImage 
                      src="https://i.postimg.cc/CKMtPmQK/DP.jpg" 
                      alt="Ashish Bisht"
                      className="object-cover"
                    />
                    <AvatarFallback className="text-6xl font-bold gradient-text">AB</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Decorative dots around the circle */}
                <span className="absolute w-4 h-4 bg-brand-blue rounded-full -top-1 left-1/2 transform -translate-x-1/2"></span>
                <span className="absolute w-4 h-4 bg-brand-orange rounded-full -bottom-1 left-1/2 transform -translate-x-1/2"></span>
                <span className="absolute w-4 h-4 bg-brand-blue rounded-full top-1/2 -right-1 transform -translate-y-1/2"></span>
                <span className="absolute w-4 h-4 bg-brand-orange rounded-full top-1/2 -left-1 transform -translate-y-1/2"></span>
              </div>
              
              {/* Updated floating skill badges with better positioning and styling */}
              <div className="absolute -top-3 -right-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md text-sm font-bold border border-brand-lightblue/50 flex items-center gap-2 dark:border-brand-blue/30">
                <Database className="h-4 w-4 text-brand-blue" />
                <span className="text-brand-darkblue dark:text-white">Big Data</span>
              </div>
              <div className="absolute -bottom-6 right-10 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md text-sm font-bold border border-brand-orange/30 flex items-center gap-2">
                <Server className="h-4 w-4 text-brand-orange" />
                <span className="text-brand-orange dark:text-white">Data Engineering</span>
              </div>
              <div className="absolute top-1/2 -left-14 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md text-sm font-bold border border-brand-lightblue/50 flex items-center gap-2 dark:border-brand-blue/30">
                <Code className="h-4 w-4 text-brand-darkblue dark:text-brand-blue" />
                <span className="text-brand-darkblue dark:text-white">&lt;Coding&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 animate-bounce transition-all">
          <a 
            href="#about" 
            aria-label="Scroll down"
            className="p-2 rounded-full bg-background shadow-md border border-border hover:border-brand-blue transition-all duration-300"
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
