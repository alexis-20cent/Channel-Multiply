import { createUseSearch, useContents } from '@/modules/contents/infrastructure/hooks/useContents';
import { Serie } from '../../domain/Serie';
import { serieTMDBRepository } from '../TMDB/serieTMDBRepository';

export function useSeries (search: string) {
  const useSearch = createUseSearch<Serie>(serieTMDBRepository);
  return useContents<Serie>(useSearch, search);
}
