import { useCallback, useEffect, useState } from 'react';
import { ContentRepository } from '../../domain/ContentRepository';
import { Content } from '../../domain/Content';

type useSearchType<T extends Content> = (search: string, onSuccess: (results: T[]) => void) => void;

function createUseSearch<T extends Content> (repository: ContentRepository<T>) {
  return function (search: string, onSuccess: (results: T[]) => void) {
    const cleanSearch = search.trim();

    useEffect(() => {
      (async () => {
        if (cleanSearch) {
          try {
            const data = await repository.search(cleanSearch);
            onSuccess(data);
          } catch (error) {
            // todo
            console.error(error);
          }
        } else {
          onSuccess([]);
        }
      })();
    }, [cleanSearch, onSuccess]);
  };
}

function useContents<T extends Content> (useSearch: useSearchType<T>, search: string): T[] {
  const [contents, setContents] = useState<T[]>([]);
  const saveContents = useCallback((results: T[]) => setContents(results), []);
  useSearch(search, saveContents);
  return contents;
}

export { createUseSearch, useContents };
