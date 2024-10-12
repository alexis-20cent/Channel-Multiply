import { TMDBclient } from "../../../../utils/clients/TMDBclient";
import { SerieSearchTMDBDTO, SerieTMDBDTO } from "./serieTMDBDTO";

export const serieTMDBClient = TMDBclient<SerieTMDBDTO>('/tv');
export const serieSearchTMDBClient= TMDBclient<SerieSearchTMDBDTO>('/search/tv');
