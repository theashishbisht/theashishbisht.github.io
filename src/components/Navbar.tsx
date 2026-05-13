import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { PROFILE } from "@/data/profile";

const NAV = [
  { name: "About",     href: "#about" },
  { name: "Toolkit",   href: "#skills" },
  { name: "Work",      href: "#portfolio" },
  { name: "Contact",   href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <a href="#home" className="font-serif text-xl tracking-tight">
          {PROFILE.name.split(" ")[0]}{" "}
          <span className="italic text-muted-foreground">{PROFILE.name.split(" ")[1]}</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-muted-foreground hover:text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-tight flex flex-col py-4 gap-1">
            {NAV.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
