import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.scss';
import { ApplicationProvider } from './contexts/appContext';
import { movieTMDBRepository } from './modules/movies/infrastructure/TMDB/movieTMDBRepository';
import { serieTMDBRepository } from './modules/series/infrastructure/TMDB/serieTMDBRepository';
import './sentry';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApplicationProvider
      dependencies={{
        movieRepository: movieTMDBRepository,
        serieRepository: serieTMDBRepository,
      }}
    >
      <RouterProvider router={router} />
    </ApplicationProvider>
  </StrictMode>
);
