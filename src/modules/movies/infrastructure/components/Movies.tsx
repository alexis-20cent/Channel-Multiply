import { Movie } from '../../domain/Movie';
import { memo } from 'react';
import { Contents } from '@/modules/contents/infrastructure/components/Content';

export type MoviesProps = {
  movies: Movie[];
};

function MoviesComponent({ movies }: MoviesProps) {
  return (
    <Contents type='Movie' items={movies} />
  );
}

export const Movies = memo(MoviesComponent);
