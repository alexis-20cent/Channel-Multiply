import { TMDBclient } from "@/utils/clients/TMDBclient";
import { MovieSearchTMDBDTO, MovieTMDBDTO } from "./movieTMDBDTO";

export const movieTMDBClient = TMDBclient<MovieTMDBDTO>('/movie');
export const movieSearchTMDBClient= TMDBclient<MovieSearchTMDBDTO>('/search/movie');
