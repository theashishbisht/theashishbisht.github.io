
import { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
}

const Portfolio = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Featured projects with images
  const featuredProjects = [
    {
      title: "Data Pipeline Automation",
      description: "Automated ETL workflows using Azure Data Factory and PySpark, reducing processing time by 60%",
      technologies: ["Azure Data Factory", "PySpark", "SQL"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Customer Analytics Dashboard",
      description: "Interactive Power BI dashboard providing real-time insights into customer behavior and sales trends",
      technologies: ["Power BI", "SQL", "DAX"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Big Data Processing Framework",
      description: "Scalable data processing framework using Hadoop and Spark for handling terabytes of consumer data",
      technologies: ["Hadoop", "Spark", "Python"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch('https://api.github.com/users/theashishbisht/repos');
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        setRepos(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError('Failed to load GitHub repositories. Please check back later.');
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section id="portfolio" className="section-padding bg-secondary/50 dark:bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold mb-2 gradient-text">My Portfolio</h2>
          <div className="h-1 w-20 bg-brand-orange rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground max-w-3xl">
            Featured projects and work that showcase my data expertise
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="border-none shadow-md overflow-hidden card-hover">
              <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-brand-lightblue dark:bg-brand-blue/20 text-brand-blue dark:text-white rounded-full border border-brand-blue/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-center mb-8">
          <h3 className="text-2xl font-bold mb-2">GitHub Repositories</h3>
          <p className="text-center text-muted-foreground max-w-2xl mb-8">
            Explore my open-source work and code samples on GitHub
          </p>
          
          {loading && <p>Loading repositories...</p>}
          {error && <p className="text-destructive">{error}</p>}
          
          {!loading && !error && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {repos.slice(0, 6).map((repo) => (
                <Card key={repo.id} className="border-none shadow-md h-full card-hover">
                  <CardContent className="pt-6 pb-2">
                    <h4 className="font-semibold mb-2">{repo.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {repo.description || "No description available"}
                    </p>
                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {repo.topics.slice(0, 3).map((topic, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-brand-lightblue dark:bg-brand-blue/20 text-brand-blue dark:text-white rounded-full border border-brand-blue/20">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}
                    {repo.language && (
                      <div className="text-xs text-muted-foreground">
                        {repo.language}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter>
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-brand-darkblue text-sm flex items-center gap-1"
                    >
                      <Github className="h-4 w-4" />
                      View Repository
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
          
          <Button 
            asChild
            variant="outline" 
            className="mt-8 border-brand-blue text-brand-blue hover:text-brand-darkblue"
          >
            <a 
              href="https://github.com/theashishbisht" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View All Repositories
              <ExternalLink className="h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
