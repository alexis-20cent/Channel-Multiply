import { searchContents } from '../../contents/application/searchContents';
import { Movie } from '../domain/Movie';

export const searchMovies = searchContents<Movie>;
