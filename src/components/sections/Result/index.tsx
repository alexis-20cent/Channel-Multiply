import { Movies } from '@/modules/movies/infrastructure/components/Movies';
import { Series } from '@/modules/series/infrastructure/components/Series';
import { Page } from '../Page';
import { memo } from 'react';
import { useMovies } from '@/modules/movies/infrastructure/hooks/useMovies';
import { useSeries } from '@/modules/series/infrastructure/hooks/useSeries';
import { useSearch } from '@/hooks/useSearch';

function ResultComponent() {
  const [search, setSearch] = useSearch();
  const movies = useMovies(search);
  const series = useSeries(search);

  return (
    <Page onSearch={(value) => setSearch(value)} centeredLayout>
      {search && (
        <main>
          {(movies.error || series.error) && <p>An error occured while fetching contents.</p>}
          {(movies.loading || series.loading)
            ? (
              <p>Please wait...</p>
              )
            : (
              <>
                <Movies movies={movies.contents} />
                <Series series={series.contents} />
              </>
              )}
        </main>
      )}
    </Page>
  );
}

export const Result = memo(ResultComponent);
