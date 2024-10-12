import { List } from "../../../../components/shared/List/Index";
import { ListItem } from "../../../../components/shared/ListItem/Index";
import { Movie } from "../../domain/Movie";

type MoviesProps = {
	movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
	return (
		<section>
			<h2>Movies</h2>
			<List>
				{movies.map(movie => (
					<ListItem
						as="article"
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
