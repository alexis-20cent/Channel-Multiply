import { createUseSearch, useContents } from '@/modules/contents/infrastructure/hooks/useContents';
import { Movie } from '../../domain/Movie';
import { movieTMDBRepository } from '../TMDB/movieTMDBRepository';

export function useMovies (search: string) {
  const useSearch = createUseSearch<Movie>(movieTMDBRepository);
  return useContents<Movie>(useSearch, search);
}
