import { Page } from '@/components/sections/Page';
import { Section } from '@/components/shared/Section';
import { useSearch } from '@/hooks/useSearch';
import { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useMovie } from '../hooks/useMovie';

function MovieComponent() {
  const [, setSearch] = useSearch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { error, movie, loading } = useMovie(Number(id));

  return (
    <Page
      onSearch={(value) => {
        navigate('/');
        setSearch(value);
      }}
      error={error}
      loading={loading}
    >
      {movie && (
        <Section title={movie.title}>
          Coucou
        </Section>
      )}
    </Page>
  );
}

export const Movie = memo(MovieComponent);
