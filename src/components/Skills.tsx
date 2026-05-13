import { PROFILE } from "@/data/profile";

const Skills = () => {
  return (
    <section
      id="skills"
      className="section-padding border-t border-border"
      aria-labelledby="skills-title"
    >
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3">02 / Toolkit</div>
            <h2 id="skills-title" className="font-serif text-4xl md:text-5xl leading-tight">
              What I reach for.
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xs">
              The technologies I use day-to-day for analysis, pipelines, and visualization.
            </p>
          </div>

          <div className="md:col-span-8">
            <ul className="divide-y divide-border border-t border-b border-border">
              {PROFILE.skills.map((skill, i) => (
                <li
                  key={skill.name}
                  className="group py-5 flex items-baseline justify-between gap-6 transition-colors hover:bg-muted/40 -mx-2 px-2"
                >
                  <div className="flex items-baseline gap-5 min-w-0">
                    <span className="mono text-xs text-muted-foreground tabular-nums shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-2xl md:text-3xl truncate">
                      {skill.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hidden sm:inline">
                      {skill.category}
                    </span>
                    {/* Slim proficiency bar */}
                    <div className="w-24 h-px bg-border relative">
                      <span
                        className="absolute inset-y-0 left-0 bg-foreground"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
