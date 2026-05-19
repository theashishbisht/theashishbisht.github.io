import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Calendar,
  Target,
  Wrench,
  TrendingUp,
} from 'lucide-react';

// ============================================================
// Featured case studies — edit these any time
// ============================================================
const FEATURED_PROJECTS = [
  {
    title: 'Data Pipeline Automation',
    problem:
      'Manual ETL workflows were slowing down the analytics team. Each refresh took hours and needed someone to babysit it.',
    work: [
      'Built end-to-end ETL pipelines on Azure Data Factory',
      'Migrated heavy transformations to PySpark for parallel processing',
      'Added scheduling, retries, and Slack alerts on failure',
    ],
    outcome:
      'Cut total processing time by roughly 60% and reduced human intervention on daily runs to zero.',
    technologies: ['Azure Data Factory', 'PySpark', 'SQL', 'Python'],
    image:
      'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Customer Analytics Dashboard',
    problem:
      'Leadership needed faster visibility into customer behavior and sales trends. Existing reports were static and a day behind.',
    work: [
      'Designed a Power BI dashboard with real-time refresh',
      'Modeled the data layer in SQL with reusable DAX measures',
      'Surfaced KPIs that map directly to business decisions',
    ],
    outcome:
      'Gave stakeholders a single source of truth for daily decision-making and shrank report turnaround from days to minutes.',
    technologies: ['Power BI', 'SQL', 'DAX', 'Data Modeling'],
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Big Data Processing Framework',
    problem:
      'Consumer panel data was outgrowing traditional tooling. Jobs that worked fine at gigabyte scale started failing at terabyte scale.',
    work: [
      'Built a Hadoop + Spark framework for distributed processing',
      'Tuned partitioning, caching, and broadcast joins for throughput',
      'Wrote Python utilities that wrapped common patterns for the team',
    ],
    outcome:
      'Scaled to terabytes of consumer data without the cost of a full re-platforming, and gave colleagues reusable building blocks.',
    technologies: ['Hadoop', 'Spark', 'Python', 'HDFS'],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

// ============================================================
// GitHub repo display
// ============================================================
interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  size: number;
  fork: boolean;
  archived: boolean;
}

// Tiny color map for a few common languages — anything else uses brand-blue
const LANGUAGE_COLORS: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#F1E05A',
  TypeScript: '#3178C6',
  HTML: '#E34C26',
  CSS: '#563D7C',
  Jupyter: '#DA5B0B',
  'Jupyter Notebook': '#DA5B0B',
  Java: '#B07219',
  'C++': '#F34B7D',
  Go: '#00ADD8',
  Shell: '#89E051',
  SQL: '#E38C00',
};

function scoreRepo(repo: Repository): number {
  // Higher score = better match for "feature this on the portfolio"
  let score = 0;
  score += repo.stargazers_count * 10;
  score += repo.forks_count * 3;
  if (repo.description && repo.description.length > 10) score += 5;
  if (repo.topics && repo.topics.length > 0) score += 3 + repo.topics.length;
  if (repo.size > 50) score += 2; // not a one-file experiment
  // Recently updated bumps score
  const monthsSince =
    (Date.now() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24 * 30);
  if (monthsSince < 3) score += 4;
  else if (monthsSince < 12) score += 2;
  // Forks and archived repos get penalized
  if (repo.fork) score -= 5;
  if (repo.archived) score -= 3;
  return score;
}

function timeAgo(iso: string): string {
  const seconds = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  const days = Math.floor(seconds / 86400);
  if (days < 1) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  const years = Math.floor(months / 12);
  return `${years}y ago`;
}

const Portfolio = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/theashishbisht/repos?per_page=100'
        );
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data: Repository[] = await response.json();
        setRepos(data);
      } catch (err) {
        console.error('Error fetching repositories:', err);
        setError('Could not load GitHub repositories right now.');
      } finally {
        setLoading(false);
      }
    };
    fetchRepositories();
  }, []);

  // Auto-pick the 6 best repos based on the scoring function
  const topRepos = useMemo(() => {
    return [...repos]
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => scoreRepo(b) - scoreRepo(a))
      .slice(0, 6);
  }, [repos]);

  return (
    <section id="portfolio" className="section-padding bg-secondary/50 dark:bg-secondary/10">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold mb-2 gradient-text">My Portfolio</h2>
          <div className="h-1 w-20 bg-brand-orange rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground max-w-3xl">
            Selected case studies, plus my open-source work on GitHub
          </p>
        </div>

        {/* ============ FEATURED CASE STUDIES ============ */}
        <div className="space-y-12 mb-20">
          {FEATURED_PROJECTS.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <Card
                key={project.title}
                className="border-none shadow-md overflow-hidden card-hover"
              >
                <div className={`grid md:grid-cols-2 ${reversed ? 'md:[direction:rtl]' : ''}`}>
                  {/* Image side */}
                  <div className="relative h-56 md:h-auto md:min-h-[340px] overflow-hidden md:[direction:ltr]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-background/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                      Case Study {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content side */}
                  <CardContent className="p-6 md:p-8 md:[direction:ltr]">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">{project.title}</h3>

                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 text-brand-orange font-semibold text-sm mb-1">
                          <Target className="h-4 w-4" /> The Problem
                        </div>
                        <p className="text-muted-foreground text-sm">{project.problem}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm mb-1">
                          <Wrench className="h-4 w-4" /> What I Did
                        </div>
                        <ul className="text-muted-foreground text-sm space-y-1 pl-1">
                          {project.work.map((w) => (
                            <li key={w} className="flex gap-2">
                              <span className="text-brand-blue mt-1 shrink-0">•</span>
                              <span>{w}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-brand-orange font-semibold text-sm mb-1">
                          <TrendingUp className="h-4 w-4" /> The Outcome
                        </div>
                        <p className="text-muted-foreground text-sm">{project.outcome}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-brand-lightblue dark:bg-brand-blue/20 text-brand-blue dark:text-white rounded-full border border-brand-blue/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* ============ GITHUB REPOS — auto-curated ============ */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h3 className="text-2xl font-bold mb-2">From My GitHub</h3>
          <p className="text-center text-muted-foreground max-w-2xl mb-8">
            Auto-curated highlights from my open-source work
          </p>

          {loading && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <Card key={i} className="border-none shadow-md animate-pulse">
                  <CardContent className="pt-6 pb-6">
                    <div className="h-5 bg-muted rounded w-2/3 mb-3"></div>
                    <div className="h-3 bg-muted rounded w-full mb-2"></div>
                    <div className="h-3 bg-muted rounded w-4/5 mb-4"></div>
                    <div className="flex gap-2">
                      <div className="h-5 bg-muted rounded-full w-16"></div>
                      <div className="h-5 bg-muted rounded-full w-12"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {error && (
            <div className="bg-destructive/10 text-destructive rounded-lg p-6 text-center max-w-md">
              <p className="text-sm">{error}</p>
              <a
                href="https://github.com/theashishbisht"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-sm font-medium underline"
              >
                Visit GitHub directly <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          )}

          {!loading && !error && topRepos.length === 0 && (
            <p className="text-muted-foreground">No public repositories to show yet.</p>
          )}

          {!loading && !error && topRepos.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 w-full">
              {topRepos.map((repo) => {
                const langColor = repo.language
                  ? LANGUAGE_COLORS[repo.language] || '#4E67E5'
                  : null;
                return (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="border-none shadow-md h-full card-hover">
                      <CardContent className="pt-6 pb-6 flex flex-col h-full">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <h4 className="font-semibold text-base group-hover:text-brand-blue transition-colors flex items-center gap-2 min-w-0">
                            <Github className="h-4 w-4 text-muted-foreground shrink-0" />
                            <span className="truncate">{repo.name}</span>
                          </h4>
                          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground group-hover:text-brand-blue transition-colors shrink-0 mt-1" />
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 min-h-[3.75rem]">
                          {repo.description || 'No description provided.'}
                        </p>

                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-4">
                            {repo.topics.slice(0, 4).map((topic) => (
                              <span
                                key={topic}
                                className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-brand-lightblue dark:bg-brand-blue/20 text-brand-blue dark:text-white rounded-full"
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Footer metadata strip */}
                        <div className="mt-auto pt-3 border-t border-border flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          {repo.language && langColor && (
                            <span className="flex items-center gap-1.5">
                              <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ backgroundColor: langColor }}
                              />
                              {repo.language}
                            </span>
                          )}
                          {repo.stargazers_count > 0 && (
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3" /> {repo.stargazers_count}
                            </span>
                          )}
                          {repo.forks_count > 0 && (
                            <span className="flex items-center gap-1">
                              <GitFork className="h-3 w-3" /> {repo.forks_count}
                            </span>
                          )}
                          <span className="flex items-center gap-1 ml-auto">
                            <Calendar className="h-3 w-3" /> {timeAgo(repo.updated_at)}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                );
              })}
            </div>
          )}

          <Button
            asChild
            variant="outline"
            className="mt-10 border-brand-blue text-brand-blue hover:text-brand-darkblue hover:border-brand-darkblue"
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
