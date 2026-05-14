import { useEffect, useState } from 'react';
import { GOATCOUNTER_CODE } from '@/constants';

/**
 * Returns visitor count from GoatCounter, or null while loading/disabled.
 * Also injects the GoatCounter tracking script once on mount.
 */
export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'disabled' | 'error'>(
    GOATCOUNTER_CODE ? 'loading' : 'disabled'
  );

  useEffect(() => {
    if (!GOATCOUNTER_CODE) {
      setStatus('disabled');
      return;
    }

    // Inject tracking script once
    if (!document.querySelector('script[data-goatcounter-injected]')) {
      const s = document.createElement('script');
      s.async = true;
      s.src = '//gc.zgo.at/count.js';
      s.setAttribute('data-goatcounter', `https://${GOATCOUNTER_CODE}.goatcounter.com/count`);
      s.setAttribute('data-goatcounter-injected', 'true');
      document.head.appendChild(s);
    }

    // Fetch total visit count
    fetch(`https://${GOATCOUNTER_CODE}.goatcounter.com/counter/TOTAL.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: { count?: string }) => {
        const n = parseInt(data.count ?? '0', 10);
        if (!Number.isNaN(n)) {
          setCount(n);
          setStatus('ready');
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  }, []);

  return { count, status };
}
