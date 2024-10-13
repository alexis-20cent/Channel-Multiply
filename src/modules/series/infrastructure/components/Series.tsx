import { List } from '@/components/shared/List';
import { ListItem } from '@/components/shared/ListItem';
import { Serie } from '../../domain/Serie';
import { Section } from '@/components/shared/Section';

export type SeriesProps = {
  series: Serie[];
};

function Series({ series }: SeriesProps) {
  return (
    <Section title='Series'>
      {series.length > 0
        ? (
          <List scrollable>
            {series.map(serie => (
              <ListItem
                as='article'
                key={serie.id}
                title={serie.title}
                img={serie.image ? `https://image.tmdb.org/t/p/w500/${serie.image}` : null}
              />
            ))}
          </List>
          )
        : (
          <p>No series found.</p>
          )}
    </Section>
  );
}

export { Series };
