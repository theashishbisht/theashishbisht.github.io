import { PROFILE } from "@/data/profile";
import VisitorCount from "./VisitorCount";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-12">
      <div className="container-tight flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-serif text-xl">{PROFILE.name}</div>
          <div className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground mt-1">
            {PROFILE.role} · {PROFILE.company}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mono text-xs text-muted-foreground">
          <a href={`mailto:${PROFILE.contact.email}`} className="hover:text-foreground transition-colors">
            Email
          </a>
          <a href={PROFILE.contact.linkedin.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            LinkedIn
          </a>
          <a href={PROFILE.contact.github.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
            GitHub
          </a>
          <span>·</span>
          <span>© {year}</span>
          <VisitorCount />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
