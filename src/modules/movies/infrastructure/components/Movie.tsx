import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovie } from '../hooks/useMovie';
import { Content } from '@/modules/contents/infrastructure/components/Content';

function MovieComponent() {
  const { id } = useParams();
  const { error, movie, loading } = useMovie(Number(id));

  return (
    <Content
      error={error}
      item={movie}
      loading={loading}
    />
  );
}

export const Movie = memo(MovieComponent);
