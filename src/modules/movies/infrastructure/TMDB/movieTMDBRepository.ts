import { MovieRepository } from "../../domain/MovieRepository";
import { movieSearchTMDBClient, movieTMDBClient } from "./movieTMDBClient";
import { mapTMDBDTOToMovie, mapTMDBSearchDTOToMovies } from "./movieTMDBMapper";

export const movieTMDBRepository: MovieRepository = {
	async get(id) {
		const movieDTO = await movieTMDBClient.get('/' + id);
		return mapTMDBDTOToMovie(movieDTO);
	},
	async search(query) {
		const moviesDTOs = await movieSearchTMDBClient.get('', { query });
		return mapTMDBSearchDTOToMovies(moviesDTOs);
	},
};
