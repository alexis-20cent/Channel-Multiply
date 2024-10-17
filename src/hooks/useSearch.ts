import { useApplication } from '@/contexts/appContext/useApplication';
import { useEffect, Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useSearch(): [string, Dispatch<SetStateAction<string>>] {
  const { search: [search, setSearch] } = useApplication();
  const [,setSearchParams] = useSearchParams();

  useEffect(() => {
    if (search) {
      setSearchParams({ search }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  }, [search]);

  return [search, setSearch];
}
