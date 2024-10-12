import { ContentRepository } from "../../contents/domain/ContentRepository";
import { Serie } from "./Serie";

export type SerieRepository = ContentRepository<Serie> & {};
