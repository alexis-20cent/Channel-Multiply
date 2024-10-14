import { Page } from '@/components/sections/Page';
import { Section } from '@/components/shared/Section';
import { useSearch } from '@/hooks/useSearch';
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content as ContentType } from '../../domain/Content';

type ContentProps = {
  error: boolean,
  item?: ContentType | null,
  loading: boolean,
};

function ContentComponent({ error, item, loading }: ContentProps) {
  const [, setSearch] = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    setSearch('');
  }, []);

  return (
    <Page
      onSearch={(value) => {
        navigate('/');
        setSearch(value);
      }}
      error={error}
      loading={loading}
    >
      {item && (
        <Section title={item.title}>
          Coucou
        </Section>
      )}
    </Page>
  );
}

export const Content = memo(ContentComponent);
