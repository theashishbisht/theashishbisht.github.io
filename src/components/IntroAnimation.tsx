import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { YEARS_OF_EXPERIENCE, CURRENT_ROLE } from '@/constants';

interface IntroAnimationProps {
  open: boolean;
  onClose: () => void;
}

const lines = [
  { text: 'Hello.', delay: 400 },
  { text: "I'm Ashish.", delay: 1100 },
  { text: `${CURRENT_ROLE.title} at ${CURRENT_ROLE.company}.`, delay: 2000 },
  { text: `${YEARS_OF_EXPERIENCE}+ years turning complex data into decisions.`, delay: 3100 },
  { text: 'SQL · Python · Azure · SAP FICO · Power BI', delay: 4300 },
  { text: 'Welcome.', delay: 5400 },
];

const IntroAnimation = ({ open, onClose }: IntroAnimationProps) => {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!open) {
      setVisibleCount(0);
      return;
    }
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((line, i) => {
      timeouts.push(setTimeout(() => setVisibleCount(i + 1), line.delay));
    });
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Intro animation"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background/95 backdrop-blur-xl animate-fade-in"
    >
      {/* Animated background blobs - matches the brand palette */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-blue rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-orange rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <button
        type="button"
        onClick={onClose}
        aria-label="Close intro"
        className="absolute top-6 right-6 p-2 rounded-full hover:bg-muted/50 transition-colors z-10"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="relative max-w-3xl w-full text-center space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {lines.map((line, i) => {
          const visible = i < visibleCount;
          const isFirst = i === 0;
          const isLast = i === lines.length - 1;
          return (
            <div
              key={i}
              className={`transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <p
                className={
                  isFirst
                    ? 'text-4xl md:text-6xl font-bold gradient-text'
                    : isLast
                    ? 'text-3xl md:text-5xl font-bold gradient-text pt-4'
                    : i === 1
                    ? 'text-3xl md:text-5xl font-bold'
                    : 'text-lg md:text-2xl text-muted-foreground'
                }
              >
                {line.text}
              </p>
            </div>
          );
        })}

        {visibleCount >= lines.length && (
          <div className="pt-8 animate-fade-in">
            <button
              type="button"
              onClick={onClose}
              className="bg-brand-blue hover:bg-brand-darkblue text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Explore the site →
            </button>
          </div>
        )}

        {/* Progress dots */}
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
          {lines.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i < visibleCount ? 'w-6 bg-brand-blue' : 'w-1.5 bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
