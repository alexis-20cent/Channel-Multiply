import { TMDBclient } from '@/utils/clients/TMDBclient';
import { MovieActorsTMDBDTO, MovieSearchTMDBDTO, MovieTMDBDTO } from './movieTMDBDTO';

export const movieTMDBClient = TMDBclient<MovieTMDBDTO>('/movie');
export const movieSearchTMDBClient = TMDBclient<MovieSearchTMDBDTO>('/search/movie');
export const movieActorsTMDBClient = TMDBclient<MovieActorsTMDBDTO>('/movie', '/credits');
