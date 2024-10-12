import { createUseSearch, useContents } from '@/modules/contents/infrastructure/hooks/useContents';
import { Serie } from '../../domain/Serie';
import { useApplication } from '@/contexts/appContext/useApplication';

export function useSeries(search: string) {
  const { serieRepository } = useApplication();
  const useSearch = createUseSearch<Serie>(serieRepository);
  return useContents<Serie>(useSearch, search);
}
