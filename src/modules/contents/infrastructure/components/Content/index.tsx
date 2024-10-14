import { Page } from '@/components/sections/Page';
import { Section } from '@/components/shared/Section';
import { useSearch } from '@/hooks/useSearch';
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Content as ContentType } from '../../../domain/Content';
import './style.scss';
import { List } from '@/components/shared/List';
import { ListItem } from '@/components/shared/ListItem';

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
        <Section title={item.title} className='content'>
          <div className='content-inside'>
            <img className='content-img' src={item.image ? `https://image.tmdb.org/t/p/w500${item.image}` : '/default.svg'} alt='' />
            <div className='content-details'>
              <div className='content-title'>{item.year} <span className='content-lighter'>- {item.countries?.join(' / ')}</span></div>
              <p className='content-description'>{item.description}</p>
              {item.actors && (
                <>
                  <h2 className='content-title'>Cast</h2>
                  <List>
                    {item.actors.map(actor => (
                      <ListItem
                        key={actor.id}
                        title={actor.name}
                        img={actor.image ? `https://image.tmdb.org/t/p/w500${actor.image}` : null}
                      />
                    ))}
                  </List>
                </>
              )}
            </div>
          </div>
        </Section>
      )}
    </Page>
  );
}

export const Content = memo(ContentComponent);
