import { Page } from '@/components/sections/Page';
import { Section } from '@/components/shared/Section';
import { useSearch } from '@/hooks/useSearch';
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SerieComponent() {
  const [, setSearch] = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    setSearch('');
  }, []);

  return (
    <Page onSearch={(value) => {
      navigate('/');
      setSearch(value);
    }}
    >
      <Section title='Toto'>
        Coucou
      </Section>
    </Page>
  );
}

export const Serie = memo(SerieComponent);
