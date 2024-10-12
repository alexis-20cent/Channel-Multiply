import { createUseSearch, useContents } from '@/modules/contents/infrastructure/hooks/useContents';
import { useApplication } from '@/contexts/appContext/useApplication';
import { Movie } from '../../domain/Movie';

export function useMovies(search: string) {
  const { movieRepository } = useApplication();
  const useSearch = createUseSearch<Movie>(movieRepository);
  return useContents<Movie>(useSearch, search);
}
