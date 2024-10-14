import { ActorTMDBDTO } from '@/modules/actors/infrastructure/TMDB/actorTMDBDTO';

export type SerieTMDBDTO = {
  id: number,
  name: string,
  poster_path?: string,
  overview?: string,
  success?: boolean,
  origin_country?: string[],
  first_air_date?: string,
};

export type SerieSearchTMDBDTO = {
  results: SerieTMDBDTO[],
};

export type SerieActorsTMDBDTO = {
  success?: boolean,
  cast: ActorTMDBDTO[],
};
