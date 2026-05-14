import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { EXPERIENCE } from '@/constants';

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Experience</h2>
          <div className="h-1 w-20 bg-brand-orange rounded-full mb-6"></div>
          <p className="text-center text-muted-foreground max-w-3xl">
            Where I've worked and what I've built
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-brand-blue via-brand-orange to-brand-blue md:-translate-x-1/2" />

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => {
              const onLeft = i % 2 === 0;
              return (
                <div
                  key={`${job.company}-${i}`}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-start ${
                    onLeft ? '' : 'md:[direction:rtl]'
                  }`}
                >
                  {/* Marker dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6">
                    <div
                      className={`w-4 h-4 rounded-full ring-4 ring-background shadow ${
                        job.current ? 'bg-brand-orange animate-pulse' : 'bg-brand-blue'
                      }`}
                    />
                  </div>

                  {/* Spacer for the side that's empty */}
                  <div className="hidden md:block" />

                  {/* Card */}
                  <div
                    className={`pl-12 md:pl-0 ${onLeft ? 'md:pr-8' : 'md:pl-8'} md:[direction:ltr]`}
                  >
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Briefcase className="h-4 w-4 text-brand-blue" />
                          <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                            {job.period}
                          </span>
                          {job.current && (
                            <span className="ml-auto text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-orange/15 text-brand-orange">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-1">{job.role}</h3>
                        <div className="text-brand-blue dark:text-brand-orange font-medium mb-3">
                          {job.company}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {job.summary}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-xs px-2 py-1 rounded-full bg-brand-lightblue dark:bg-brand-blue/15 text-brand-darkblue dark:text-brand-blue"
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
