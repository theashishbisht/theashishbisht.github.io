import { PROFILE } from "@/data/profile";

const About = () => {
  return (
    <section
      id="about"
      className="section-padding border-t border-border"
      aria-labelledby="about-title"
    >
      <div className="container-tight">
        <div className="grid md:grid-cols-12 gap-x-12 gap-y-10">
          {/* Eyebrow + title */}
          <div className="md:col-span-4">
            <div className="eyebrow mb-3">01 / About</div>
            <h2 id="about-title" className="font-serif text-4xl md:text-5xl leading-tight">
              The shape of the work.
            </h2>
          </div>

          {/* Body */}
          <div className="md:col-span-8 space-y-6">
            <p className="text-lg md:text-xl leading-relaxed">
              {PROFILE.about.journey}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              {PROFILE.about.approach}
            </p>
          </div>
        </div>

        {/* Education block */}
        <div className="mt-24 grid md:grid-cols-12 gap-x-12 gap-y-10">
          <div className="md:col-span-4">
            <div className="eyebrow">Education</div>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-border">
              {PROFILE.about.education.map((item) => (
                <li
                  key={item.title}
                  className="py-5 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
                >
                  <div>
                    <div className="font-serif text-xl">{item.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {item.institution}
                    </div>
                  </div>
                  <div className="mono text-xs uppercase tracking-[0.14em] text-muted-foreground sm:whitespace-nowrap">
                    {item.year}
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

export default About;
