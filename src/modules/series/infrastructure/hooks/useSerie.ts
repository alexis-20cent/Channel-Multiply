import { useApplication } from '@/contexts/appContext/useApplication';
import { Serie } from '../../domain/Serie';
import { useEffect, useState } from 'react';

export function useSerie(id: number) {
  const { serieRepository } = useApplication();
  const [serie, setSerie] = useState<Serie | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async() => {
      try {
        setLoading(true);
        const result = await serieRepository.get(id);
        setSerie(result);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);
  return { error, loading, serie };
}
