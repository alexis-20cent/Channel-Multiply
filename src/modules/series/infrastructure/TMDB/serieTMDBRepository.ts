import { SerieRepository } from '../../domain/SerieRepository';
import { serieSearchTMDBClient, serieTMDBClient } from './serieTMDBClient';
import { mapTMDBDTOToSerie, mapTMDBSearchDTOToSeries } from './serieTMDBMapper';

export const serieTMDBRepository: SerieRepository = {
  async get (id) {
    const serieDTO = await serieTMDBClient.get('/' + id);
    return mapTMDBDTOToSerie(serieDTO);
  },
  async search (query) {
    const seriesDTOs = await serieSearchTMDBClient.get('', { query });
    return mapTMDBSearchDTOToSeries(seriesDTOs);
  },
};
