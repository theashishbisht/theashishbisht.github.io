import { useEffect, useState } from "react";
import { PROFILE } from "@/data/profile";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

interface Repository {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

const Portfolio = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/theashishbisht/repos?sort=updated&per_page=6`)
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch repositories");
        return r.json();
      })
      .then((data: Repository[]) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Couldn't load GitHub repositories right now.");
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="portfolio"
      className="section-padding border-t border-border"
      aria-labelledby="portfolio-title"
    >
      <div className="container-tight">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-6 mb-16">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3">03 / Selected work</div>
            <h2 id="portfolio-title" className="font-serif text-4xl md:text-5xl leading-tight">
              A few things I've shipped.
            </h2>
          </div>
          <div className="md:col-span-8 self-end">
            <p className="text-muted-foreground text-lg max-w-xl">
              Pipelines, dashboards, and the data infrastructure underneath them.
            </p>
          </div>
        </div>

        {/* Featured projects */}
        <ol className="border-t border-border">
          {PROFILE.projects.map((project, i) => (
            <li
              key={project.title}
              className="group border-b border-border py-8 md:py-10 grid md:grid-cols-12 gap-x-12 gap-y-3 items-baseline"
            >
              <div className="md:col-span-1 mono text-xs text-muted-foreground tabular-nums">
                /{String(i + 1).padStart(2, "0")}
              </div>
              <div className="md:col-span-5">
                <h3 className="font-serif text-2xl md:text-3xl group-hover:italic transition-all">
                  {project.title}
                </h3>
              </div>
              <div className="md:col-span-4">
                <p className="text-muted-foreground leading-relaxed">{project.blurb}</p>
              </div>
              <div className="md:col-span-2 flex flex-wrap gap-1.5 md:justify-end">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="mono text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-2 py-0.5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>

        {/* GitHub repos */}
        <div className="mt-24">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <div className="eyebrow mb-2">Open source</div>
              <h3 className="font-serif text-2xl md:text-3xl">From GitHub</h3>
            </div>
            <a
              href={PROFILE.contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              All repos <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {loading && (
            <p className="mono text-sm text-muted-foreground">Loading…</p>
          )}
          {error && (
            <p className="mono text-sm text-destructive">{error}</p>
          )}

          {!loading && !error && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.slice(0, 6).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 border border-border hover:border-foreground/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="font-serif text-xl">{repo.name}</h4>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4 min-h-[2.5rem]">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex items-center justify-between mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    <span>{repo.language || "—"}</span>
                    <span>★ {repo.stargazers_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
