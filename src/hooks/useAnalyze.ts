import { useState } from 'react';
import type { Analysis } from '../types/analysis.types';

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000';

export function useAnalyze() {
  const [result, setResult] = useState<Analysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyze = async (url: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) throw new Error('Error analyzing site');
      setResult(await res.json());
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  return { analyze, result, loading, error };
}
