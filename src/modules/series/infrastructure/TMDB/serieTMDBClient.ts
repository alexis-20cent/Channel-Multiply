import { TMDBclient } from '@/utils/clients/TMDBclient';
import { SerieActorsTMDBDTO, SerieSearchTMDBDTO, SerieTMDBDTO } from './serieTMDBDTO';

export const serieTMDBClient = TMDBclient<SerieTMDBDTO>('/tv');
export const serieSearchTMDBClient = TMDBclient<SerieSearchTMDBDTO>('/search/tv');
export const serieActorsTMDBClient = TMDBclient<SerieActorsTMDBDTO>('/tv', '/credits');
