import { PROFILE } from "@/data/profile";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-24 md:pt-44 md:pb-32"
      aria-labelledby="hero-title"
    >
      <div className="container-tight">
        {/* Eyebrow */}
        <div className="eyebrow mb-10 fade-up fade-up-1">
          {PROFILE.role} &nbsp;·&nbsp; {PROFILE.company} &nbsp;·&nbsp; {PROFILE.location}
        </div>

        {/* Headline */}
        <h1
          id="hero-title"
          className="fade-up fade-up-2 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight max-w-4xl"
        >
          Hello, I'm <em className="italic text-primary">{PROFILE.name}.</em>
          <br />
          <span className="text-muted-foreground">{PROFILE.tagline}</span>
        </h1>

        {/* Image — small, off to the side, no big halo */}
        <div className="mt-16 fade-up fade-up-3 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="flex items-center gap-5">
            <img
              src={PROFILE.profileImage}
              alt={`${PROFILE.name} — ${PROFILE.role}`}
              loading="eager"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover ring-1 ring-border"
            />
            <div>
              <div className="mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Currently
              </div>
              <div className="font-serif text-2xl md:text-3xl mt-1">
                Building data systems at {PROFILE.company}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#portfolio"
              className="mono text-sm border-b border-foreground/40 hover:border-foreground pb-0.5 transition-colors"
            >
              View work →
            </a>
            <a
              href="#contact"
              className="mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Stat strip — the "counts" live here */}
        <div className="mt-24 fade-up fade-up-4 grid grid-cols-2 md:grid-cols-4 border-t border-border">
          {PROFILE.stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 md:py-8 px-1 ${
                i !== PROFILE.stats.length - 1 ? "md:border-r border-border" : ""
              } ${i % 2 === 0 ? "border-r md:border-r" : ""} ${
                i < 2 ? "border-b md:border-b-0" : ""
              }`}
            >
              <div className="font-serif text-3xl md:text-4xl">{s.value}</div>
              <div className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex justify-center fade-up fade-up-5">
          <a
            href="#about"
            aria-label="Scroll to about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
