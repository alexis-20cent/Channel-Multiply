export type SerieTMDBDTO = {
  id: number,
  name: string,
  poster_path?: string,
  overview?: string,
  success?: boolean,
};

export type SerieSearchTMDBDTO = {
  results: SerieTMDBDTO[],
};
