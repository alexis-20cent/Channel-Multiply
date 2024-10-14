import { mapTMDBDTOToActor } from '@/modules/actors/infrastructure/TMDB/actorTMDBMapper';
import { MovieRepository } from '../../domain/MovieRepository';
import { movieActorsTMDBClient, movieSearchTMDBClient, movieTMDBClient } from './movieTMDBClient';
import { mapTMDBDTOToMovie, mapTMDBSearchDTOToMovies } from './movieTMDBMapper';

export const movieTMDBRepository: MovieRepository = {
  async get(id) {
    const movieDTO = await movieTMDBClient.get('/' + id);
    if (typeof movieDTO.success === 'boolean' && !movieDTO.success) {
      throw new Error('Movie not found');
    }
    const movie = mapTMDBDTOToMovie(movieDTO);
    movie.actors = await this.getActors(id);
    return movie;
  },
  async search(query) {
    const moviesDTOs = await movieSearchTMDBClient.get('', { query });
    return mapTMDBSearchDTOToMovies(moviesDTOs);
  },
  async getActors(id) {
    const movieActorsDTO = await movieActorsTMDBClient.get('/' + id);
    if (typeof movieActorsDTO.success === 'boolean' && !movieActorsDTO.success) {
      throw new Error('Movie not found');
    }
    return movieActorsDTO.cast.map(mapTMDBDTOToActor);
  },
};
