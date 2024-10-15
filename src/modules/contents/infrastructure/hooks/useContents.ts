import { useCallback, useEffect, useState } from 'react';
import { ContentRepository } from '../../domain/ContentRepository';
import { Content } from '../../domain/Content';

export type useSearchResultType<T extends Content> = { error: boolean, loading: boolean, contents: T[] };
export type useSearchType<T extends Content> = (search: string, onSuccess: (results: T[]) => void) => Omit<useSearchResultType<T>, 'contents'>;

function createUseSearch<T extends Content>(repository: ContentRepository<T>) {
  return function(search: string, onSuccess: (results: T[]) => void) {
    const cleanSearch = search.trim();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
      (async() => {
        if (cleanSearch) {
          try {
            setLoading(true);
            const data = await repository.search(cleanSearch);
            onSuccess(data);
          } catch (error) {
            setError(true);
            console.error(error);
          } finally {
            setLoading(false);
          }
        } else {
          onSuccess([]);
        }
      })();
    }, [cleanSearch, onSuccess]);

    return { error, loading };
  };
}

function useContents<T extends Content>(useSearch: useSearchType<T>, search: string): useSearchResultType<T> {
  const [contents, setContents] = useState<T[]>([]);
  const saveContents = useCallback((results: T[]) => setContents(results), []);
  const { error, loading } = useSearch(search, saveContents);
  return { error, loading, contents };
}

export { createUseSearch, useContents };
