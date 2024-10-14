import { mapTMDBDTOToActor } from '@/modules/actors/infrastructure/TMDB/actorTMDBMapper';
import { SerieRepository } from '../../domain/SerieRepository';
import { serieActorsTMDBClient, serieSearchTMDBClient, serieTMDBClient } from './serieTMDBClient';
import { mapTMDBDTOToSerie, mapTMDBSearchDTOToSeries } from './serieTMDBMapper';

export const serieTMDBRepository: SerieRepository = {
  async get(id) {
    const serieDTO = await serieTMDBClient.get('/' + id);
    if (typeof serieDTO.success === 'boolean' && !serieDTO.success) {
      throw new Error('Serie not found');
    }
    const serie = mapTMDBDTOToSerie(serieDTO);
    serie.actors = await this.getActors(id);
    return serie;
  },
  async search(query) {
    const seriesDTOs = await serieSearchTMDBClient.get('', { query });
    return mapTMDBSearchDTOToSeries(seriesDTOs);
  },
  async getActors(id) {
    const serieActorsDTO = await serieActorsTMDBClient.get('/' + id);
    if (typeof serieActorsDTO.success === 'boolean' && !serieActorsDTO.success) {
      throw new Error('Movie not found');
    }
    return serieActorsDTO.cast.map(mapTMDBDTOToActor);
  },
};
