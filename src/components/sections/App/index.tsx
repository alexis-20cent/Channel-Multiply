import { useState } from 'react';
import { SearchInput } from '@/components/shared/SearchInput';
import { Movies } from '@/modules/movies/infrastructure/components/Movies';
import { Series } from '@/modules/series/infrastructure/components/Series';
import { useMovies } from '@/modules/movies/infrastructure/hooks/useMovies';
import { useSeries } from '@/modules/series/infrastructure/hooks/useSeries';

function App() {
  const [search, setSearch] = useState<string>('');

  const movies = useMovies(search);
  const series = useSeries(search);

  return (
    <main>
      <h1>Channel*</h1>
      <SearchInput
        value={search}
        onChange={value => setSearch(value)}
        placeholder='Movie or serie title...'
        aria-label='Search a movie or a serie'
      />
      <Movies movies={movies} />
      <Series series={series} />
    </main>
  );
}

export { App };
