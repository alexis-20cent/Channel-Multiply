import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/sections/App';
import './styles/index.scss';
import { ApplicationProvider } from './contexts/appContext';
import { movieTMDBRepository } from './modules/movies/infrastructure/TMDB/movieTMDBRepository';
import { serieTMDBRepository } from './modules/series/infrastructure/TMDB/serieTMDBRepository';
import './sentry';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApplicationProvider
      dependencies={{
        movieRepository: movieTMDBRepository,
        serieRepository: serieTMDBRepository,
      }}
    >
      <App />
    </ApplicationProvider>
  </StrictMode>
);
