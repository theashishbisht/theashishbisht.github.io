import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((v) => !v)}
      aria-label="Toggle theme"
      className="p-2 text-muted-foreground hover:text-foreground transition-colors"
    >
      {dark ? <Sun className="h-[1.05rem] w-[1.05rem]" /> : <Moon className="h-[1.05rem] w-[1.05rem]" />}
    </button>
  );
};

export default ThemeToggle;
