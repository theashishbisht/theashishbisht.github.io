import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-6">
      <div className="text-center max-w-md">
        <div className="mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-6">
          Error / 404
        </div>
        <h1 className="font-serif text-6xl md:text-7xl mb-4">
          Page not <em className="italic">found</em>.
        </h1>
        <p className="text-muted-foreground mb-8">
          That route doesn't exist on this site.
        </p>
        <a
          href="/"
          className="mono text-sm border-b border-foreground/40 hover:border-foreground pb-0.5 transition-colors"
        >
          ← Back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
