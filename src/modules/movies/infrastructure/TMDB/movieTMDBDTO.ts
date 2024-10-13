export type MovieTMDBDTO = {
  id: number,
  title: string,
  poster_path?: string,
  overview?: string,
  success?: boolean,
};

export type MovieSearchTMDBDTO = {
  results: MovieTMDBDTO[],
};
