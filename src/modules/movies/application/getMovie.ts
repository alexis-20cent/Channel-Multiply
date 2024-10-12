import { getContent } from '../../contents/application/getContent';
import { Movie } from '../domain/Movie';

export const getMovie = getContent<Movie>;
