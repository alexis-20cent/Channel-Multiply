import { List } from '@/components/shared/List';
import { ListItem } from '@/components/shared/ListItem';
import { Movie } from '../../domain/Movie';

export type MoviesProps = {
  movies: Movie[];
};

function Movies({ movies }: MoviesProps) {
  return (
    <section>
      <h2>Movies</h2>
      <List>
        {movies.map(movie => (
          <ListItem
            as='article'
            key={movie.id}
            title={movie.title}
            img={`https://image.tmdb.org/t/p/w500/${movie.image}`}
          />
        ))}
      </List>
    </section>
  );
}

export { Movies };
