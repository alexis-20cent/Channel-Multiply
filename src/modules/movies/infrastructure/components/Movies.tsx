import { List } from '@/components/shared/List';
import { ListItem } from '@/components/shared/ListItem';
import { Movie } from '../../domain/Movie';
import { Section } from '@/components/shared/Section';

export type MoviesProps = {
  movies: Movie[];
};

function Movies({ movies }: MoviesProps) {
  return (
    <Section title='Movies'>
      <List>
        {movies.map(movie => (
          <ListItem
            as='article'
            key={movie.id}
            title={movie.title}
            img={movie.image ? `https://image.tmdb.org/t/p/w500/${movie.image}` : null}
          />
        ))}
      </List>
    </Section>
  );
}

export { Movies };
