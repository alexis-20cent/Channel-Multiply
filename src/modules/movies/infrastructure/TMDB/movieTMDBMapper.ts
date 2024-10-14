import { Movie } from '../../domain/Movie';
import { MovieSearchTMDBDTO, MovieTMDBDTO } from './movieTMDBDTO';

export const mapTMDBDTOToMovie = (dto: MovieTMDBDTO): Movie => {
  return {
    id: dto.id,
    title: dto.title,
    image: dto.poster_path,
    description: dto.overview,
    countries: dto.production_countries?.map(country => country.name),
    year: dto.release_date?.split('-')[0],
  };
};

export const mapTMDBSearchDTOToMovies = (moviesDTOs: MovieSearchTMDBDTO): Movie[] => {
  return moviesDTOs.results.map(dto => ({
    id: dto.id,
    title: dto.title,
    image: dto.poster_path,
  }));
};
