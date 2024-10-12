import { Serie } from '../../domain/Serie';
import { SerieSearchTMDBDTO, SerieTMDBDTO } from './serieTMDBDTO';

export const mapTMDBDTOToSerie = (dto: SerieTMDBDTO): Serie => {
  return {
    id: dto.id,
    title: dto.name,
    image: dto.poster_path,
    description: dto.overview,
  };
};

export const mapTMDBSearchDTOToSeries = (seriesDTOs: SerieSearchTMDBDTO): Serie[] => {
  return seriesDTOs.results.map(dto => ({
    id: dto.id,
    title: dto.name,
    image: dto.poster_path,
    description: dto.overview,
  }));
};
