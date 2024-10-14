import { ActorTMDBDTO } from '@/modules/actors/infrastructure/TMDB/actorTMDBDTO';

export type MovieTMDBDTO = {
  id: number,
  title: string,
  poster_path?: string,
  overview?: string,
  success?: boolean,
  production_countries?: Array<{ name: string }>,
  release_date?: string,
};

export type MovieSearchTMDBDTO = {
  results: MovieTMDBDTO[],
};

export type MovieActorsTMDBDTO = {
  success?: boolean,
  cast: ActorTMDBDTO[],
};
