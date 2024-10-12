import { Content, ensureContentIsValid } from '../../contents/domain/Content';

export type Movie = Content & {};

export function ensureMovieIsValid (options: Movie): void {
  ensureContentIsValid<Movie>(options);
}
