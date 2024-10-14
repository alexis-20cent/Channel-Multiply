import { Movie } from "@/modules/movies/domain/Movie";

const movie: Movie = {
	id: 1,
	title: 'Hello',
};

const movies: Movie[] = [movie, {
	id: 2,
	title: 'Hello',
},{
	id: 3,
	title: 'Hello',
}];

export { movie, movies };

