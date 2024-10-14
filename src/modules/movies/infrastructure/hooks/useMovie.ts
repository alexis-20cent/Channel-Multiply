import { useApplication } from '@/contexts/appContext/useApplication';
import { Movie } from '../../domain/Movie';
import { useEffect, useState } from 'react';

export function useMovie(id: number) {
  const { movieRepository } = useApplication();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    (async() => {
      try {
        setLoading(true);
        const result = await movieRepository.get(id);
        setMovie(result);
      } catch (error) {
        setError(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);
  return { error, loading, movie };
}
