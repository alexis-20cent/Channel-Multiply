import { useState } from 'react';
import { SearchInput } from '@/components/shared/SearchInput';
import { Movies } from '@/modules/movies/infrastructure/components/Movies';
import { Series } from '@/modules/series/infrastructure/components/Series';
import { useMovies } from '@/modules/movies/infrastructure/hooks/useMovies';
import { useSeries } from '@/modules/series/infrastructure/hooks/useSeries';
import './style.scss';

function App() {
  const [search, setSearch] = useState<string>('');

  const movies = useMovies(search);
  const series = useSeries(search);

  return (
    <div className={`app app--${search ? 'normal' : 'centered'}`}>
      <header className='app-header'>
        <div className='app-logo' role='img'>
          <span>Channel</span>
          <img src='/logo.svg' alt='*' />
        </div>
        <div className='app-search'>
          <SearchInput
            autoFocus
            value={search}
            onChange={value => setSearch(value)}
            placeholder='Movie or serie title...'
            aria-label='Search a movie or a serie'
            name='search'
          />
        </div>
      </header>
      {search && (
        <>
          <Movies movies={movies} />
          <Series series={series} />
        </>
      )}
    </div>
  );
}

export { App };
