import { useEffect, useState } from "react";
import { PROFILE } from "@/data/profile";

/**
 * Live visitor counter via GoatCounter (https://www.goatcounter.com/).
 *
 * Renders NOTHING until you set `goatcounter.code` in src/data/profile.ts.
 * When the code is set, this component:
 *   1. Injects the GoatCounter tracking script (one time)
 *   2. Fetches the total pageview count from their public endpoint
 *   3. Displays a small inline number
 */
const VisitorCount = () => {
  const code = PROFILE.goatcounter.code;
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (!code) return;

    // Inject tracking script once
    const existing = document.querySelector<HTMLScriptElement>(
      "script[data-goatcounter-injected]"
    );
    if (!existing) {
      const s = document.createElement("script");
      s.async = true;
      s.src = "//gc.zgo.at/count.js";
      s.setAttribute("data-goatcounter", `https://${code}.goatcounter.com/count`);
      s.setAttribute("data-goatcounter-injected", "true");
      document.head.appendChild(s);
    }

    // Fetch total visit count
    fetch(`https://${code}.goatcounter.com/counter/TOTAL.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: { count?: string }) => {
        const n = parseInt(data.count ?? "0", 10);
        if (!Number.isNaN(n)) setCount(n);
      })
      .catch(() => {
        // Silently fail — counter just won't show
      });
  }, [code]);

  if (!code || count === null) return null;

  return (
    <span
      className="mono text-xs text-muted-foreground"
      title="Visits — counted by GoatCounter"
    >
      {count.toLocaleString()} visits
    </span>
  );
};

export default VisitorCount;
