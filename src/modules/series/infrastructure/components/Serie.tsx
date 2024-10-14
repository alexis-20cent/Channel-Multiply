import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSerie } from '../hooks/useSerie';
import { Content } from '@/modules/contents/infrastructure/components/Content';

function SerieComponent() {
  const { id } = useParams();
  const { error, serie, loading } = useSerie(Number(id));

  return (
    <Content
      error={error}
      item={serie}
      loading={loading}
    />
  );
}

export const Serie = memo(SerieComponent);
