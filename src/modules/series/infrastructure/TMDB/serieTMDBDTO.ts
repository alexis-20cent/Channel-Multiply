export type SerieTMDBDTO = {
	id: number,
	name: string,
	poster_path?: string,
	overview?: string,
};

export type SerieSearchTMDBDTO = {
	results: SerieTMDBDTO[],
};
