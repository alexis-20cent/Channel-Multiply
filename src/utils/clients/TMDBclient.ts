import { createFetchClient } from './factories/createFetchClient';

export const TMDBclient = <T>(endpoint: string = '') => createFetchClient<T>('https://api.themoviedb.org/3' + endpoint, {
  api_key: import.meta.env.VITE_TMDB_API_KEY || '92b418e837b833be308bbfb1fb2aca1e',
});
