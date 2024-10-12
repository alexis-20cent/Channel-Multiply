import { Movie } from '../../domain/Movie';
import { MovieSearchTMDBDTO, MovieTMDBDTO } from './movieTMDBDTO';

export const mapTMDBDTOToMovie = (dto: MovieTMDBDTO): Movie => {
  return {
    id: dto.id,
    title: dto.title,
    image: dto.poster_path,
    description: dto.overview,
  };
};

export const mapTMDBSearchDTOToMovies = (moviesDTOs: MovieSearchTMDBDTO): Movie[] => {
  return moviesDTOs.results.map(dto => ({
    id: dto.id,
    title: dto.title,
    image: dto.poster_path,
    description: dto.overview,
  }));
};
