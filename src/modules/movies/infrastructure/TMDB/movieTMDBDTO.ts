export type MovieTMDBDTO = {
	id: number,
	title: string,
	poster_path?: string,
	overview?: string,
};

export type MovieSearchTMDBDTO = {
	results: MovieTMDBDTO[],
};
