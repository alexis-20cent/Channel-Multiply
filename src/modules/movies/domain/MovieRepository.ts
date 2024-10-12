import { ContentRepository } from "../../contents/domain/ContentRepository";
import { Movie } from "./Movie";

export type MovieRepository = ContentRepository<Movie> & {};
